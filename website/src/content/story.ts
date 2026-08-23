export type ChapterStatus = "transmitted" | "incoming" | "sealed";

export interface Chapter {
  /** Position in the arc, as defined in README -> THE LAST SIGNAL. */
  id: number;
  /** The stage name from the canonical story structure. */
  stage: string;
  title: string;
  status: ChapterStatus;
  /** Shown for every chapter, including sealed ones. */
  teaser: string;
  /** Full text. Only written once a chapter has actually been transmitted. */
  body?: string[];
}

export const STATUS_LABEL: Record<ChapterStatus, string> = {
  transmitted: "TRANSMITTED",
  incoming: "INCOMING",
  sealed: "SEALED",
};

export const chapters: Chapter[] = [
  {
    id: 1,
    stage: "Unknown Signal",
    title: "Something Answered",
    status: "transmitted",
    teaser: "A signal reaches Earth. Nobody sent it.",
    body: [
      "It arrived on a Tuesday, at 03:17 UTC, on a frequency nobody uses any more.",
      "Seventeen stations recorded it. None of them were listening for it. The pattern held for four minutes and eleven seconds, then stopped — not faded, stopped, the way a sentence stops when the speaker decides you have heard enough.",
      "It has not repeated. What it left behind is a fragment: incomplete, structured, and clearly meant to be finished by someone else.",
      "That is where MOLIDO begins. Not with an answer — with the first piece of a question.",
    ],
  },
  {
    id: 2,
    stage: "First Fragment",
    title: "The Incomplete Message",
    status: "transmitted",
    teaser:
      "The fragment is not noise. It is structured — and something is missing from it on purpose.",
    body: [
      "Noise is easy to recognise. Noise has no opinion about where it ends.",
      "This has structure. Repeating blocks, consistent spacing, a checksum at the close of each section that resolves correctly — every section except one. In that section the checksum expects fourteen values and receives thirteen.",
      "The obvious reading is damage: something lost in transit, a gap where the atmosphere or the distance ate a piece of the message. But damaged data does not usually leave the surrounding structure intact, and this structure is untouched on both sides of the hole. The gap is the exact size of the thing that should fill it.",
      "Which leaves a harder reading. The fragment was not broken on the way here. It was sent incomplete.",
      "A message you cannot finish is a message. A message that can only be finished by someone doing something is an invitation.",
      "Nobody has decided yet which one this is.",
    ],
  },
  {
    id: 3,
    stage: "Hidden Coordinates",
    title: "A Place That Should Be Empty",
    status: "transmitted",
    teaser: "The fragment resolves to a location. The maps disagree about it.",
    body: [
      "Thirteen values. Read as coordinates, they resolve.",
      "They resolve to open water — a stretch of ocean with nothing on it, which is what most of the planet is. Unremarkable, until you compare sources. Older survey charts mark a small landmass there. Newer ones do not. The correction appears in the record without a survey behind it, the way a typo gets fixed rather than the way a discovery gets made.",
      "There are ordinary explanations. Charts inherit errors from each other for centuries; phantom islands have been copied forward and quietly deleted before. That is the likely answer, and it should be said plainly rather than skipped past because a stranger one is available.",
      "What the ordinary explanation does not cover is the fourteenth value — the one the checksum expects and the fragment does not supply.",
      "Coordinates fix a point on a surface. Thirteen values give a where. The missing one would give a when.",
      "The fragment is not pointing at a place. It is pointing at a place at a time, and it has declined to say which.",
    ],
  },
  {
    id: 4,
    stage: "Global Discovery",
    title: "Others Are Listening",
    status: "incoming",
    teaser:
      "The signal did not reach one person. It reached everyone who was willing to look.",
  },
  {
    id: 5,
    stage: "MOLIDO Awakening",
    title: "The Network Wakes",
    status: "sealed",
    teaser: "What the fragments assemble into was never a message.",
  },
  {
    id: 6,
    stage: "The Unknown",
    title: "—",
    status: "sealed",
    teaser: "Unwritten. It depends on who follows the signal.",
  },
];
