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
    status: "incoming",
    teaser:
      "The fragment is not noise. It is structured — and something is missing from it on purpose.",
  },
  {
    id: 3,
    stage: "Hidden Coordinates",
    title: "A Place That Should Be Empty",
    status: "sealed",
    teaser: "The fragment resolves to a location. The maps disagree about it.",
  },
  {
    id: 4,
    stage: "Global Discovery",
    title: "Others Are Listening",
    status: "sealed",
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
