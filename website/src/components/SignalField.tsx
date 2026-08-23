import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
}

const STAR_COUNT = 520;
/** Distance from the eye to the projection plane; larger reads as a longer lens. */
const FOCAL = 260;
const DEPTH = 900;
const SPEED = 26;
/** Pointer parallax is deliberately small — it should feel like depth, not like a toy. */
const PARALLAX = 26;

function seedStar(depth: number): Star {
  return {
    x: (Math.random() - 0.5) * 2200,
    y: (Math.random() - 0.5) * 2200,
    z: Math.random() * depth,
  };
}

/**
 * A 3D star field with a signal wavefront travelling through it, drawn on a
 * plain canvas with a hand-rolled perspective projection.
 *
 * Deliberately not three.js: this is a background, and a background is not
 * worth ~600 kB of WebGL engine on a phone.
 */
function SignalField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const stars: Star[] = Array.from({ length: STAR_COUNT }, () =>
      seedStar(DEPTH),
    );

    let width = 0;
    let height = 0;
    // Capping the pixel ratio keeps this affordable on high-density phones.
    let dpr = 1;

    function resize() {
      if (!canvas || !ctx) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    // Pointer parallax, eased so it drifts rather than snaps.
    let targetX = 0;
    let targetY = 0;
    let offsetX = 0;
    let offsetY = 0;

    function onPointer(e: PointerEvent) {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    }
    if (!reduceMotion) window.addEventListener("pointermove", onPointer);

    // Expanding wavefronts, emitted on a slow cadence.
    let waves: number[] = [0];
    let sinceWave = 0;

    let raf = 0;
    let last = performance.now();

    function frame(now: number) {
      if (!ctx) return;
      // rAF hands back the frame's start time, which can precede the
      // performance.now() read a moment earlier, so dt must be clamped at
      // both ends - a negative dt drove the wave radius below zero and
      // arc() throws on that.
      const dt = Math.max(0, Math.min((now - last) / 1000, 0.05));
      last = now;

      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      offsetX += (targetX * PARALLAX - offsetX) * 0.04;
      offsetY += (targetY * PARALLAX - offsetY) * 0.04;

      if (!reduceMotion) {
        sinceWave += dt;
        if (sinceWave > 4.5) {
          sinceWave = 0;
          waves.push(0);
        }
        waves = waves.map((w) => w + dt * 150).filter((w) => w < 1400);
      }

      // Wavefronts first, so stars sit in front of them.
      for (const radius of waves) {
        if (radius <= 0) continue;
        const fade = 1 - radius / 1400;
        ctx.beginPath();
        ctx.arc(cx - offsetX * 0.4, cy - offsetY * 0.4, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(126, 162, 255, ${(fade * 0.16).toFixed(3)})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      for (const star of stars) {
        if (!reduceMotion) {
          star.z -= SPEED * dt * 2.2;
          if (star.z <= 1) {
            const fresh = seedStar(DEPTH);
            star.x = fresh.x;
            star.y = fresh.y;
            star.z = DEPTH;
          }
        }

        const scale = FOCAL / star.z;
        const px = cx + star.x * scale - offsetX * (1 - star.z / DEPTH);
        const py = cy + star.y * scale - offsetY * (1 - star.z / DEPTH);

        if (px < -40 || px > width + 40 || py < -40 || py > height + 40) continue;

        // Near stars are larger and brighter; far ones fade into the ground.
        const depth = 1 - star.z / DEPTH;
        const size = Math.max(0.45, depth * 2.6);
        const alpha = 0.28 + depth * 0.72;

        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(198, 216, 255, ${alpha.toFixed(3)})`;
        ctx.fill();
      }

      if (!reduceMotion) raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);

    // Nothing should burn battery behind a hidden tab.
    function onVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reduceMotion) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    }
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="signal-field" aria-hidden="true" />;
}

export default SignalField;
