# Translations

Eight locales: `en`, `fa`, `ar`, `ur`, `hi`, `tr`, `az`, `zh`.

## Translation status

Only English and Persian have been reviewed by a speaker. The other six —
Arabic, Urdu, Hindi, Turkish, Azerbaijani and Chinese — were produced by an
AI assistant and have **not** had a native review.

They are good enough to publish and read, but the story chapters are
literary prose, and tone is where machine translation degrades first. Have
each one read by a native speaker before the site is promoted in that
language.

Track that here as it happens, rather than assuming it was done:

| Locale | Native review |
| ------ | ------------- |
| en     | n/a (source)  |
| fa     | done          |
| ar     | pending       |
| ur     | pending       |
| hi     | pending       |
| tr     | pending       |
| az     | pending       |
| zh     | pending       |

## Adding a locale

1. Add the code to `LOCALES` and an entry to `LOCALE_META` in `locale.ts`.
2. Run `npm run typecheck`. Every missing translation is now a compile
   error, listed by file and line — `strings.ts`, `../content/story.ts` and
   `../content/signals.ts`.
3. Fill them in until it passes.

There is deliberately no fallback to English. A missing translation should
break the build, not ship silently as the wrong language.

## Things that are easy to get wrong

- **Direction.** `dir` is set on `<html>`, not on a wrapper, so the browser
  lays out and hyphenates correctly. Use CSS logical properties
  (`margin-inline-start`, `inset-inline-start`) — a plain `margin-left`
  will jump to the wrong side in Arabic, Persian and Urdu.
- **Dates.** Formatting goes through `Intl` using each locale's `tag`, so
  Persian readers get the Jalali calendar for free. Azerbaijani is the
  exception: no `az` tag has date data in Chromium, so `LOCALE_META.az`
  carries its own month names. Check any new locale renders a real date and
  not a fallback pattern like `2026 M08 23`.
- **Fonts.** Each script has its own stack in `styles.css`, selected with
  `:lang()`. Nothing is downloaded — the stacks fall back to whatever the
  reader's system provides.
