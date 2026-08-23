import type { Localized } from "./locale";

export interface Strings {
  brand: string;
  heroTitle: string;
  heroText: string;
  ctaTelegram: string;
  ctaYoutube: string;
  signalHeading: string;
  signalStatus: string;
  signalNote: string;
  storyHeading: string;
  storyIntro: string;
  storyFootnote: string;
  statusTransmitted: string;
  statusIncoming: string;
  statusSealed: string;
  communityHeading: string;
  communityText: string;
  youtubeHeading: string;
  youtubeText: string;
  telegramHeading: string;
  telegramText: string;
  footerTagline: string;
  languageLabel: string;
}

export const strings: Localized<Strings> = {
  en: {
    brand: "MOLIDO",
    heroTitle: "THE LAST SIGNAL",
    heroText: "The signal has arrived. The journey begins now.",
    ctaTelegram: "Join the Signal",
    ctaYoutube: "Watch on YouTube",
    signalHeading: "Signal Status",
    signalStatus: "SIGNAL DETECTED",
    signalNote: "Transmission is active. Phase 01 — foundation online.",
    storyHeading: "The Story",
    storyIntro:
      "MOLIDO is a global, AI-powered digital ecosystem built around interactive storytelling, games, community and creativity. THE LAST SIGNAL is its story universe — a single transmission, broken into fragments, uncovered by the people who choose to follow it.",
    storyFootnote:
      "New fragments are released as the story is written. Nothing here is final except what has already been transmitted.",
    statusTransmitted: "TRANSMITTED",
    statusIncoming: "INCOMING",
    statusSealed: "SEALED",
    communityHeading: "Community",
    communityText:
      "The signal belongs to everyone who hears it. No borders, no gates — one channel, one story, built in the open.",
    youtubeHeading: "YouTube",
    youtubeText: "Follow the transmission in video form.",
    telegramHeading: "Telegram",
    telegramText: "Live signal channel and community.",
    footerTagline: "The signal has arrived. The journey begins now.",
    languageLabel: "Language",
  },
  fa: {
    brand: "مولیدو",
    heroTitle: "آخرین سیگنال",
    heroText: "سیگنال رسیده است. سفر از همین حالا آغاز می‌شود.",
    ctaTelegram: "به سیگنال بپیوند",
    ctaYoutube: "تماشا در یوتیوب",
    signalHeading: "وضعیت سیگنال",
    signalStatus: "سیگنال شناسایی شد",
    signalNote: "ارسال فعال است. فاز ۰۱ — پایه‌ها آنلاین.",
    storyHeading: "داستان",
    storyIntro:
      "مولیدو یک زیست‌بوم دیجیتال جهانی مبتنی بر هوش مصنوعی است که حول داستان‌گویی تعاملی، بازی، اجتماع و خلاقیت ساخته می‌شود. «آخرین سیگنال» جهانِ داستانی آن است — یک ارسال، شکسته به قطعه‌ها، که کسانی آشکارش می‌کنند که انتخاب می‌کنند دنبالش بروند.",
    storyFootnote:
      "قطعه‌های تازه هم‌زمان با نوشته‌شدن داستان منتشر می‌شوند. هیچ‌چیز اینجا نهایی نیست، جز آنچه پیش‌تر ارسال شده است.",
    statusTransmitted: "ارسال‌شده",
    statusIncoming: "در راه",
    statusSealed: "مهر‌و‌موم",
    communityHeading: "اجتماع",
    communityText:
      "سیگنال متعلق به هر کسی است که آن را می‌شنود. بدون مرز، بدون دروازه — یک کانال، یک داستان، ساخته‌شده در فضای باز.",
    youtubeHeading: "یوتیوب",
    youtubeText: "ارسال را در قالب ویدیو دنبال کن.",
    telegramHeading: "تلگرام",
    telegramText: "کانال زنده‌ی سیگنال و اجتماع.",
    footerTagline: "سیگنال رسیده است. سفر از همین حالا آغاز می‌شود.",
    languageLabel: "زبان",
  },
};
