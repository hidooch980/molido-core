# YouTube

## What to make

Vertical Shorts of the daily puzzle.

The format matters more than it looks. YouTube shows Shorts to people who
have never heard of the channel; Telegram only reaches people who already
subscribed. Shorts are the one free surface that solves the actual problem,
which is that nobody knows the site exists.

Twenty seconds, 1080x1920, one puzzle, one question, one link.

## Making one

    cd website
    npm i -D playwright
    npx playwright install chromium
    npx tsx scripts/make-short.mjs

Output lands in `out/short-YYYY-MM-DD-en.mp4`, which is gitignored — these
are generated, not source.

Arguments are optional:

    npx tsx scripts/make-short.mjs 2026-09-01 fa

Playwright is deliberately not a project dependency. The website does not
need it and CI should not spend time installing it, so the script asks for
it only when you actually render a video.

Every frame is drawn from a frame index rather than the clock, so the same
date always produces the same video and a slow machine cannot drop frames.

## Publishing

Title: lead with the puzzle, not the project.

    Four stations. One value in all four. Can you find it?

Not "MOLIDO — a global AI-powered digital ecosystem". Nobody searches for
that. People do click a question they think they can answer.

Description: one line of the day's signal, then the link.

Add `#Shorts`. Keep the rest of the tags honest and few.

## What not to do

Do not ask viewers to like or subscribe before seeing the answer, and do not
gate the puzzle behind an account. YouTube treats engagement gating as spam,
and the project's own rules in the README already rule out artificial
engagement.

The share button on the site exists for the same reason: it earns a share by
being worth sharing, rather than demanding one.
