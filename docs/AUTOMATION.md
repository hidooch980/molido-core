# Automation

What runs without you, and what does not.

## Every day at 06:00 UTC

`.github/workflows/daily.yml` runs on its own and:

1. renders the day's puzzle as two vertical Shorts, Persian and English
2. writes `docs/TODAY.md` — the titles and post text, ready to paste
3. attaches both videos to the run in the **Actions** tab
4. posts to Telegram, if the secrets below are set
5. commits `docs/TODAY.md` back to the repository

The site itself already publishes on every push, so the daily signal and the
weekly puzzle change with no involvement at all.

Run it early with **Actions → MOLIDO Daily → Run workflow**, optionally for a
specific date.

## Turning on Telegram posting

Without these two secrets the posting step is skipped and everything else
still runs, so the pipeline never depends on credentials existing.

1. Create a bot with **@BotFather** and copy the token.
2. Add the bot to the channel as an **administrator**.
3. Repo → **Settings → Secrets and variables → Actions → New repository
   secret**:

       TELEGRAM_BOT_TOKEN    the token from BotFather
       TELEGRAM_CHAT_ID      @Molidoo

**Never commit the token.** This repository is public — a leaked bot token
lets anyone post as the channel. GitHub Secrets are the only correct place,
and the posting script scrubs the token out of any error it raises.

If a token is ever exposed, revoke it in @BotFather immediately with
`/revoke`; rotating it is cheap, cleaning up afterwards is not.

## What is not automated, and why

**YouTube uploads.** Technically possible with an OAuth refresh token, but
it is a far larger blast radius than a channel bot, and an unattended
uploader publishing a broken render is worse than a missing day. Download the
video from the Actions run and upload it yourself.

**Talking to people.** Replying in a community, judging which title worked,
noticing that nobody is clicking. No schedule does this, and it is where the
project is actually won or lost.

**Writing the story.** Signals are queued, not generated. When the queue runs
low, `docs/TODAY.md` says so at the top with the number of days left.

## The one thing that will break

The pipeline cannot write new material. If the signal queue empties, the site
keeps showing the last entry, every day, and nothing errors — the automation
carries on posting stale content, which looks worse than posting nothing.

`docs/TODAY.md` warns at three days remaining. Treat that warning as the only
recurring obligation the automation cannot absorb.
