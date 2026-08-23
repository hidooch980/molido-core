import type { Localized } from "../i18n/locale";

export interface Signal {
  /** ISO date, YYYY-MM-DD. One entry per day, newest anywhere in the list. */
  date: string;
  /** Short transmission line shown under the signal status. */
  text: Localized<string>;
}

/**
 * The daily signal. Add an entry to publish; nothing else has to change.
 * Entries dated in the future are ignored until their day arrives, so a
 * week can be queued up in advance.
 */
export const signals: Signal[] = [
  {
    date: "2026-08-23",
    text: {
      en: "Fourth fragment resolved. Three continents reported the same checksum gap within nine hours of each other.",
      fa: "چهارمین قطعه حل شد. سه قاره در فاصله‌ی نُه ساعت از هم، همان شکافِ جمع کنترلی را گزارش کردند.",
      ar: "حُلَّت الشظية الرابعة. أبلغت ثلاث قارات عن الفجوة نفسها في المجموع الرقابي خلال تسع ساعات من بعضها.",
      ur: "چوتھا ٹکڑا حل ہو گیا۔ تین براعظموں نے نو گھنٹوں کے اندر ایک ہی چیک سم خلا کی اطلاع دی۔",
      hi: "चौथा टुकड़ा सुलझा। तीन महाद्वीपों ने नौ घंटों के भीतर एक ही चेकसम अंतराल की सूचना दी।",
      tr: "Dördüncü parça çözüldü. Üç kıta, birbirinden dokuz saat içinde aynı sağlama boşluğunu bildirdi.",
      az: "Dördüncü parça həll olundu. Üç qitə bir-birindən doqquz saat ərzində eyni yoxlama boşluğunu bildirdi.",
      zh: "第四个片段已解析。三块大陆在九小时内报告了相同的校验和缺口。",
    },
  },
  {
    date: "2026-08-22",
    text: {
      en: "Archive sweep complete. Seventeen station logs preserved and checksummed.",
      fa: "پویش بایگانی کامل شد. گزارش هفده ایستگاه نگهداری و مهر کنترلی شد.",
      ar: "اكتمل مسح الأرشيف. حُفظت سجلات سبع عشرة محطة وخُتمت بمجموع رقابي.",
      ur: "آرکائیو کی جانچ مکمل۔ سترہ اسٹیشنوں کے ریکارڈ محفوظ اور چیک سم شدہ۔",
      hi: "अभिलेख जाँच पूरी। सत्रह स्टेशनों के अभिलेख सुरक्षित और चेकसम किए गए।",
      tr: "Arşiv taraması tamam. On yedi istasyon kaydı saklandı ve sağlaması alındı.",
      az: "Arxiv taraması tamamlandı. On yeddi stansiya qeydi saxlanıldı və yoxlanıldı.",
      zh: "档案扫描完成。十七个台站记录已保存并计算校验和。",
    },
  },
  {
    date: "2026-08-21",
    text: {
      en: "Carrier re-established. Foundation online.",
      fa: "حامل دوباره برقرار شد. پایه‌ها آنلاین.",
      ar: "أُعيد إنشاء الحامل. الأساس متصل.",
      ur: "کیریئر دوبارہ قائم۔ بنیاد آن لائن۔",
      hi: "वाहक पुनः स्थापित। नींव ऑनलाइन।",
      tr: "Taşıyıcı yeniden kuruldu. Temel çevrimiçi.",
      az: "Daşıyıcı yenidən quruldu. Təməl onlayndır.",
      zh: "载波已重建。基础已上线。",
    },
  },
];

/**
 * The newest signal that is not dated in the future.
 * `today` is injected so this stays testable and does not read the clock
 * itself.
 */
export function currentSignal(today: string): Signal | undefined {
  return signals
    .filter((s) => s.date <= today)
    .reduce<Signal | undefined>(
      (newest, s) => (!newest || s.date > newest.date ? s : newest),
      undefined,
    );
}

/** Today's date as YYYY-MM-DD in the viewer's own timezone. */
export function todayISO(now: Date = new Date()): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}
