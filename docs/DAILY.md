# The daily signal

One line a day. It is the only thing on this project that has to happen
regularly, and it costs nothing.

## Publishing one

Signals live in `website/src/content/signals.ts`. Add an entry:

```ts
{
  date: "2026-09-01",
  text: {
    en: "…", fa: "…", ar: "…", ur: "…",
    hi: "…", tr: "…", az: "…", zh: "…",
  },
},
```

Push, and the site publishes itself.

All eight languages are required. Leaving one out fails the build rather
than quietly showing English to a Persian reader.

## Writing a week ahead

Entries dated in the future are ignored until their own day arrives, so a
whole week can be written in one sitting and will open one day at a time.
`npm test` proves that nothing publishes early.

Queueing ahead is the recommended way to work. A daily habit that depends on
having an idea that morning breaks in the first difficult week.

## What a signal is

A single line of in-fiction transmission log. Short, factual in tone,
consistent with THE LAST SIGNAL.

It is not an announcement, a marketing line, or a status update about the
project. It is the story continuing to happen while nobody was watching.

Match the week's puzzle where you can — during a period week the signals can
talk about the carrier repeating. That makes the site feel like one thing
rather than a page with a game bolted on.

## What a signal must never do

- Claim user numbers, milestones or engagement that did not happen.
- Promise a token, a payout, or any financial return.
- Give away the answer to the current puzzle.
- Announce a feature that does not exist yet.

The project's own rules in the README say not to claim what does not exist.
The daily signal is where that is easiest to break, because it is written
quickly.

## The other half

Posting the same line to Telegram, with a link to the site, is what turns a
published signal into a reason for someone to arrive. The site cannot do
that part.

    Telegram: https://t.me/Molidoo
    YouTube:  https://youtube.com/@molido-v7z
