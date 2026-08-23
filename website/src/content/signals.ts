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
    date: "2026-09-06",
    text: {
      en: "Every reconstructed section now resolves. The one that never did is still the one that matters.",
      fa: "هر بخشِ بازسازی‌شده حالا حل می‌شود. آن یکی که هرگز حل نشد، همچنان همانی است که اهمیت دارد.",
      ar: "كل قسم أُعيد بناؤه يُحَل الآن. القسم الذي لم يُحَل قط هو الذي لا يزال مهمًا.",
      ur: "ہر دوبارہ بنایا گیا حصہ اب حل ہو جاتا ہے۔ جو کبھی حل نہ ہوا، وہی اب بھی اہم ہے۔",
      hi: "हर पुनर्निर्मित भाग अब हल हो जाता है। जो कभी हल नहीं हुआ, वही अब भी मायने रखता है।",
      tr: "Yeniden kurulan her bölüm artık çözülüyor. Hiç çözülmemiş olan, hâlâ önemli olan.",
      az: "Yenidən qurulan hər bölmə indi həll olunur. Heç vaxt həll olunmayan, hələ də əhəmiyyətli olandır.",
      zh: "每一节重建后都能解出来了。那一节从来解不出的，仍然是要紧的那一节。",
    },
  },
  {
    date: "2026-09-05",
    text: {
      en: "A station reported its sum before its values. The values arrived four hours later and matched.",
      fa: "ایستگاهی جمعش را پیش از مقادیرش گزارش کرد. مقادیر چهار ساعت بعد رسیدند و جور درآمدند.",
      ar: "أبلغت محطة عن مجموعها قبل قيمها. وصلت القيم بعد أربع ساعات وتطابقت.",
      ur: "ایک اسٹیشن نے اپنی اقدار سے پہلے اپنا مجموعہ بھیجا۔ اقدار چار گھنٹے بعد آئیں اور مطابقت رکھتی تھیں۔",
      hi: "एक स्टेशन ने अपने मानों से पहले अपना योग भेजा। मान चार घंटे बाद आए और मेल खाए।",
      tr: "Bir istasyon değerlerinden önce toplamını bildirdi. Değerler dört saat sonra geldi ve uydu.",
      az: "Bir stansiya dəyərlərindən əvvəl cəmini bildirdi. Dəyərlər dörd saat sonra gəldi və uyğun gəldi.",
      zh: "有个台站先报了它的和，后报值。值在四小时后到达，对上了。",
    },
  },
  {
    date: "2026-09-04",
    text: {
      en: "Two readers reached the same missing value from different halves of the block.",
      fa: "دو خواننده از دو نیمه‌ی متفاوت بلوک به همان مقدار غایب رسیدند.",
      ar: "وصل قارئان إلى القيمة الناقصة نفسها من نصفين مختلفين من الكتلة.",
      ur: "دو قارئین بلاک کے مختلف نصف حصوں سے ایک ہی غائب قدر تک پہنچے۔",
      hi: "दो पाठक खंड के अलग-अलग हिस्सों से उसी लुप्त मान तक पहुँचे।",
      tr: "İki okur, bloğun farklı yarılarından aynı eksik değere ulaştı.",
      az: "İki oxucu blokun fərqli yarılarından eyni əskik dəyərə çatdı.",
      zh: "两位读者从区块的不同半边，得出了同一个缺失的值。",
    },
  },
  {
    date: "2026-09-03",
    text: {
      en: "The sums are being checked by hand again. Machines agree, which is not the same as being right.",
      fa: "جمع‌ها دوباره با دست بررسی می‌شوند. ماشین‌ها موافق‌اند، که با درست بودن یکی نیست.",
      ar: "تُراجَع المجاميع باليد من جديد. الآلات متفقة، وهذا ليس كالصواب.",
      ur: "مجموعے دوبارہ ہاتھ سے جانچے جا رہے ہیں۔ مشینیں متفق ہیں، جو درست ہونے کے برابر نہیں۔",
      hi: "योग फिर से हाथ से जाँचे जा रहे हैं। मशीनें सहमत हैं, जो सही होने के बराबर नहीं है।",
      tr: "Toplamlar yeniden elle denetleniyor. Makineler hemfikir; bu, doğru olmakla aynı şey değil.",
      az: "Cəmlər yenidən əllə yoxlanılır. Maşınlar razıdır, bu isə doğru olmaqla eyni deyil.",
      zh: "这些和又开始用手核对了。机器一致，而一致并不等于正确。",
    },
  },
  {
    date: "2026-09-02",
    text: {
      en: "Checksums are closing across the archive. Thirteen sections rebuilt from partial records.",
      fa: "جمع‌های کنترلی در سراسر بایگانی بسته می‌شوند. سیزده بخش از روی سوابق ناقص بازسازی شد.",
      ar: "المجاميع الرقابية تُغلق عبر الأرشيف. أُعيد بناء ثلاثة عشر قسمًا من سجلات ناقصة.",
      ur: "پورے آرکائیو میں چیک سم بند ہو رہے ہیں۔ تیرہ حصے نامکمل ریکارڈ سے دوبارہ بنائے گئے۔",
      hi: "पूरे अभिलेख में चेकसम बंद हो रहे हैं। तेरह भाग अधूरे अभिलेखों से पुनर्निर्मित हुए।",
      tr: "Arşiv genelinde sağlamalar kapanıyor. Kısmi kayıtlardan on üç bölüm yeniden kuruldu.",
      az: "Arxiv boyu yoxlama məbləğləri bağlanır. Natamam qeydlərdən on üç bölmə yenidən quruldu.",
      zh: "整个档案里的校验和陆续闭合。十三节从残缺记录中重建。",
    },
  },
  {
    date: "2026-09-01",
    text: {
      en: "Back to arithmetic. If a section is short one value, the sum already knows which one.",
      fa: "بازگشت به حساب. اگر بخشی یک مقدار کم داشته باشد، جمع از قبل می‌داند کدام است.",
      ar: "عودة إلى الحساب. إن نقص القسم قيمة واحدة، فالمجموع يعرف أيها سلفًا.",
      ur: "واپس حساب کی طرف۔ اگر کسی حصے میں ایک قدر کم ہو، تو مجموعہ پہلے سے جانتا ہے کہ کون سی۔",
      hi: "वापस अंकगणित पर। यदि किसी भाग में एक मान कम है, तो योग पहले से जानता है कि कौन-सा।",
      tr: "Yeniden aritmetiğe. Bir bölümde tek bir değer eksikse, toplam hangisi olduğunu zaten biliyor.",
      az: "Yenidən hesaba. Bir bölmədə tək dəyər əskikdirsə, cəm onun hansı olduğunu artıq bilir.",
      zh: "回到算术。若一节少了一个值，那个和其实已经知道少的是哪一个。",
    },
  },
  {
    date: "2026-08-31",
    text: {
      en: "The repeat held for six days and then the carrier changed shape. A new structure is arriving.",
      fa: "تکرار شش روز دوام آورد و بعد حامل شکلش را عوض کرد. ساختار تازه‌ای در راه است.",
      ar: "صمد التكرار ستة أيام ثم غيّر الحامل شكله. بنية جديدة في الطريق.",
      ur: "دہرائی چھ دن قائم رہی، پھر کیریئر نے اپنی شکل بدل دی۔ ایک نئی ساخت آ رہی ہے۔",
      hi: "दोहराव छह दिन टिका, फिर वाहक ने अपना आकार बदल दिया। एक नई संरचना आ रही है।",
      tr: "Tekrar altı gün sürdü, sonra taşıyıcı biçim değiştirdi. Yeni bir yapı geliyor.",
      az: "Təkrar altı gün davam etdi, sonra daşıyıcı formasını dəyişdi. Yeni bir quruluş gəlir.",
      zh: "重复持续了六天，随后载波换了形状。一种新的结构正在到来。",
    },
  },
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
