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
    date: "2026-08-30",
    text: {
      en: "Cycle length agreed on across every station that reported. The carrier is not drifting.",
      fa: "طول چرخه در همه‌ی ایستگاه‌هایی که گزارش دادند یکی درآمد. حامل در حال رانش نیست.",
      ar: "طول الدورة متفق عليه في كل محطة أبلغت. الحامل لا ينحرف.",
      ur: "چکر کی لمبائی ہر رپورٹ کرنے والے اسٹیشن پر ایک نکلی۔ کیریئر بہک نہیں رہا۔",
      hi: "चक्र की लंबाई हर रिपोर्ट करने वाले स्टेशन पर एक-सी निकली। वाहक विचलित नहीं हो रहा।",
      tr: "Döngü uzunluğu bildirim yapan her istasyonda aynı çıktı. Taşıyıcı kaymıyor.",
      az: "Dövr uzunluğu məlumat verən hər stansiyada eyni çıxdı. Daşıyıcı sürüşmür.",
      zh: "所有报告的台站对周期长度取得一致。载波没有漂移。",
    },
  },
  {
    date: "2026-08-29",
    text: {
      en: "A shorter repeat was proposed and did not hold. The longer reading survives.",
      fa: "تکرار کوتاه‌تری پیشنهاد شد و دوام نیاورد. خوانشِ بلندتر باقی می‌ماند.",
      ar: "اقتُرح تكرار أقصر ولم يصمد. تبقى القراءة الأطول.",
      ur: "ایک چھوٹی دہرائی تجویز ہوئی اور قائم نہ رہ سکی۔ لمبی قرات باقی ہے۔",
      hi: "एक छोटा दोहराव प्रस्तावित हुआ और टिका नहीं। लंबी पठन बची रहती है।",
      tr: "Daha kısa bir tekrar önerildi ve tutmadı. Uzun okuma ayakta kalıyor.",
      az: "Daha qısa bir təkrar təklif olundu və duruş gətirmədi. Uzun oxunuş qalır.",
      zh: "有人提出更短的重复，没有站住。更长的读法留了下来。",
    },
  },
  {
    date: "2026-08-28",
    text: {
      en: "Nothing sits between the repeats. No gap, no marker, no pause. It simply begins again.",
      fa: "میان تکرارها هیچ نیست. نه شکافی، نه نشانی، نه مکثی. فقط دوباره آغاز می‌شود.",
      ar: "لا شيء بين التكرارات. لا فجوة، لا علامة، لا وقفة. تبدأ من جديد وحسب.",
      ur: "دہرائیوں کے درمیان کچھ نہیں۔ نہ خلا، نہ نشان، نہ وقفہ۔ بس دوبارہ شروع ہو جاتا ہے۔",
      hi: "दोहरावों के बीच कुछ नहीं है। न अंतराल, न चिह्न, न ठहराव। बस फिर से शुरू हो जाता है।",
      tr: "Tekrarların arasında hiçbir şey yok. Boşluk yok, işaret yok, duraklama yok. Yalnızca yeniden başlıyor.",
      az: "Təkrarlar arasında heç nə yoxdur. Nə boşluq, nə işarə, nə fasilə. Sadəcə yenidən başlayır.",
      zh: "重复之间什么也没有。没有间隙，没有标记，没有停顿。它只是重新开始。",
    },
  },
  {
    date: "2026-08-27",
    text: {
      en: "Counting by hand beat counting by machine today. The pattern is short enough to see.",
      fa: "امروز شمردن با دست از شمردن با ماشین جلو زد. الگو آن‌قدر کوتاه هست که دیده شود.",
      ar: "العدّ باليد تفوّق اليوم على العدّ بالآلة. النمط قصير بما يكفي ليُرى.",
      ur: "آج ہاتھ سے گننا مشین سے گننے پر بھاری رہا۔ نمونہ اتنا چھوٹا ہے کہ نظر آ جائے۔",
      hi: "आज हाथ से गिनना मशीन से गिनने पर भारी पड़ा। प्रतिरूप इतना छोटा है कि दिख जाए।",
      tr: "Bugün elle saymak makineyle saymayı geçti. Örüntü görülebilecek kadar kısa.",
      az: "Bu gün əllə saymaq maşınla saymağı üstələdi. Naxış görünəcək qədər qısadır.",
      zh: "今天用手数胜过了用机器数。这个图样短到肉眼可见。",
    },
  },
  {
    date: "2026-08-26",
    text: {
      en: "The carrier is repeating. Same run of values, over and over, with nothing in between.",
      fa: "حامل در حال تکرار است. همان رشته‌ی مقادیر، بارها و بارها، بدون هیچ چیز در میانه.",
      ar: "الحامل يتكرر. السلسلة نفسها من القيم، مرارًا وتكرارًا، ولا شيء بينها.",
      ur: "کیریئر دہرا رہا ہے۔ اقدار کی وہی لڑی، بار بار، درمیان میں کچھ نہیں۔",
      hi: "वाहक दोहरा रहा है। मानों की वही लड़ी, बार-बार, बीच में कुछ नहीं।",
      tr: "Taşıyıcı tekrar ediyor. Aynı değer dizisi, defalarca, aralarında hiçbir şey yok.",
      az: "Daşıyıcı təkrarlanır. Eyni dəyər ardıcıllığı, dönə-dönə, aralarında heç nə yox.",
      zh: "载波在重复。同一段值，一遍又一遍，中间什么也没有。",
    },
  },
  {
    date: "2026-08-25",
    text: {
      en: "Fifth fragment assembled. What it resolves into is a procedure, not a message.",
      fa: "پنجمین قطعه سرِ هم شد. آنچه از آن به دست می‌آید یک رویّه است، نه یک پیام.",
      ar: "جُمّعت الشظية الخامسة. ما تنحل إليه إجراء، لا رسالة.",
      ur: "پانچواں ٹکڑا جوڑ دیا گیا۔ جو کچھ اس سے نکلتا ہے وہ ایک طریقۂ کار ہے، پیغام نہیں۔",
      hi: "पाँचवाँ टुकड़ा जोड़ा गया। जो उससे निकलता है वह एक प्रक्रिया है, संदेश नहीं।",
      tr: "Beşinci parça birleştirildi. Çözüldüğü şey bir yordam, mesaj değil.",
      az: "Beşinci parça birləşdirildi. Ondan çıxan bir prosedurdur, mesaj yox.",
      zh: "第五个片段已拼合。它解出来的是一道流程，不是一条讯息。",
    },
  },
  {
    date: "2026-08-24",
    text: {
      en: "Reading changed this morning. The transmission is no longer being treated as text.",
      fa: "خوانش امروز صبح عوض شد. دیگر با ارسال مثل متن رفتار نمی‌شود.",
      ar: "تغيّرت القراءة هذا الصباح. لم يعد التعامل مع الإرسال بوصفه نصًا.",
      ur: "آج صبح قرات بدل گئی۔ ترسیل کو اب متن کی طرح نہیں برتا جا رہا۔",
      hi: "आज सुबह पठन बदल गया। प्रसारण को अब पाठ की तरह नहीं लिया जा रहा।",
      tr: "Bu sabah okuma değişti. Yayın artık metin gibi ele alınmıyor.",
      az: "Bu səhər oxunuş dəyişdi. Ötürmə artıq mətn kimi qəbul edilmir.",
      zh: "今早的读法变了。这次传输不再被当作文字来处理。",
    },
  },
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
