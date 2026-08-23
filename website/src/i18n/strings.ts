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
  dailySignal: string;
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
  fragmentHeading: string;
  fragmentIntro: string;
  fragmentResolves: string;
  fragmentExpects: string;
  fragmentChecksum: string;
  fragmentPrompt: string;
  fragmentVerify: string;
  fragmentCorrect: string;
  fragmentWrong: string;
  fragmentShare: string;
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
    dailySignal: "DAILY SIGNAL",
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
    fragmentHeading: "The Fragment",
    fragmentIntro: "Three sections close correctly. The fourth expects fourteen values and has thirteen. Work out the rule from the sections that resolve, then recover the value that is missing.",
    fragmentResolves: "resolves",
    fragmentExpects: "expects 14, has 13",
    fragmentChecksum: "checksum",
    fragmentPrompt: "Missing value (0–255)",
    fragmentVerify: "Verify",
    fragmentCorrect: "The checksum closes. The section is complete.",
    fragmentWrong: "The checksum does not close.",
    fragmentShare: "Everyone sees the same fragment today.",
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
    dailySignal: "سیگنال روزانه",
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
    fragmentHeading: "قطعه",
    fragmentIntro: "سه بخش درست بسته می‌شوند. بخش چهارم انتظار چهارده مقدار را دارد و سیزده تا دارد. قاعده را از بخش‌هایی که حل می‌شوند به دست بیاور، بعد مقداری را که غایب است بازیابی کن.",
    fragmentResolves: "حل می‌شود",
    fragmentExpects: "انتظار ۱۴، دارد ۱۳",
    fragmentChecksum: "جمع کنترلی",
    fragmentPrompt: "مقدار غایب (۰ تا ۲۵۵)",
    fragmentVerify: "بررسی",
    fragmentCorrect: "جمع کنترلی بسته شد. بخش کامل است.",
    fragmentWrong: "جمع کنترلی بسته نمی‌شود.",
    fragmentShare: "امروز همه همین قطعه را می‌بینند.",
  },
  ar: {
    brand: "موليدو",
    heroTitle: "الإشارة الأخيرة",
    heroText: "وصلت الإشارة. تبدأ الرحلة الآن.",
    ctaTelegram: "انضم إلى الإشارة",
    ctaYoutube: "شاهد على يوتيوب",
    signalHeading: "حالة الإشارة",
    signalStatus: "تم رصد الإشارة",
    signalNote: "الإرسال نشط. المرحلة ٠١ — الأساس متصل.",
    dailySignal: "الإشارة اليومية",
    storyHeading: "القصة",
    storyIntro:
      "موليدو منظومة رقمية عالمية مدعومة بالذكاء الاصطناعي، مبنية حول السرد التفاعلي والألعاب والمجتمع والإبداع. «الإشارة الأخيرة» هي عالمها القصصي — إرسال واحد، مقسّم إلى شظايا، يكشفه من يختار أن يتبعه.",
    storyFootnote:
      "تُنشر الشظايا الجديدة مع كتابة القصة. لا شيء هنا نهائي سوى ما أُرسل بالفعل.",
    statusTransmitted: "مُرسَلة",
    statusIncoming: "قادمة",
    statusSealed: "مختومة",
    communityHeading: "المجتمع",
    communityText:
      "الإشارة ملك لكل من يسمعها. بلا حدود، بلا بوابات — قناة واحدة، قصة واحدة، تُبنى في العلن.",
    youtubeHeading: "يوتيوب",
    youtubeText: "تابع الإرسال في صورة فيديو.",
    telegramHeading: "تلغرام",
    telegramText: "قناة الإشارة الحية والمجتمع.",
    footerTagline: "وصلت الإشارة. تبدأ الرحلة الآن.",
    languageLabel: "اللغة",
    fragmentHeading: "الشظية",
    fragmentIntro: "ثلاثة أقسام تُغلق بشكل صحيح. الرابع يتوقع أربع عشرة قيمة ولديه ثلاث عشرة. استنتج القاعدة من الأقسام التي تُحَل، ثم استرجع القيمة الناقصة.",
    fragmentResolves: "يُحَل",
    fragmentExpects: "يتوقع ١٤، لديه ١٣",
    fragmentChecksum: "المجموع الرقابي",
    fragmentPrompt: "القيمة الناقصة (٠–٢٥٥)",
    fragmentVerify: "تحقّق",
    fragmentCorrect: "المجموع الرقابي أُغلق. القسم مكتمل.",
    fragmentWrong: "المجموع الرقابي لا يُغلق.",
    fragmentShare: "الجميع يرى الشظية نفسها اليوم.",
  },
  ur: {
    brand: "مولیڈو",
    heroTitle: "آخری سگنل",
    heroText: "سگنل پہنچ چکا ہے۔ سفر ابھی شروع ہوتا ہے۔",
    ctaTelegram: "سگنل میں شامل ہوں",
    ctaYoutube: "یوٹیوب پر دیکھیں",
    signalHeading: "سگنل کی حالت",
    signalStatus: "سگنل شناخت ہوا",
    signalNote: "ترسیل فعال ہے۔ مرحلہ ۰۱ — بنیاد آن لائن۔",
    dailySignal: "روزانہ سگنل",
    storyHeading: "کہانی",
    storyIntro:
      "مولیڈو ایک عالمی، مصنوعی ذہانت پر مبنی ڈیجیٹل نظام ہے جو باہمی کہانی، کھیل، برادری اور تخلیق کے گرد بنایا جا رہا ہے۔ «آخری سگنل» اس کی کہانی کی دنیا ہے — ایک ترسیل، ٹکڑوں میں بٹی ہوئی، جسے وہ لوگ کھولتے ہیں جو اس کے پیچھے جانے کا انتخاب کرتے ہیں۔",
    storyFootnote:
      "نئے ٹکڑے کہانی لکھے جانے کے ساتھ جاری ہوتے ہیں۔ یہاں کچھ بھی حتمی نہیں سوائے اس کے جو پہلے ہی بھیجا جا چکا ہے۔",
    statusTransmitted: "بھیجا گیا",
    statusIncoming: "راستے میں",
    statusSealed: "مہربند",
    communityHeading: "برادری",
    communityText:
      "سگنل ہر اُس شخص کا ہے جو اسے سنتا ہے۔ کوئی سرحد نہیں، کوئی دروازہ نہیں — ایک چینل، ایک کہانی، کھلے عام بنائی جا رہی ہے۔",
    youtubeHeading: "یوٹیوب",
    youtubeText: "ترسیل کو ویڈیو کی صورت میں دیکھیں۔",
    telegramHeading: "ٹیلیگرام",
    telegramText: "زندہ سگنل چینل اور برادری۔",
    footerTagline: "سگنل پہنچ چکا ہے۔ سفر ابھی شروع ہوتا ہے۔",
    languageLabel: "زبان",
    fragmentHeading: "ٹکڑا",
    fragmentIntro: "تین حصے درست بند ہوتے ہیں۔ چوتھا چودہ اقدار کی توقع کرتا ہے اور اس کے پاس تیرہ ہیں۔ اُن حصوں سے قاعدہ اخذ کریں جو حل ہوتے ہیں، پھر غائب قدر بازیاب کریں۔",
    fragmentResolves: "حل ہوتا ہے",
    fragmentExpects: "توقع ۱۴، موجود ۱۳",
    fragmentChecksum: "چیک سم",
    fragmentPrompt: "غائب قدر (۰ تا ۲۵۵)",
    fragmentVerify: "جانچیں",
    fragmentCorrect: "چیک سم بند ہو گیا۔ حصہ مکمل ہے۔",
    fragmentWrong: "چیک سم بند نہیں ہوتا۔",
    fragmentShare: "آج سب یہی ٹکڑا دیکھ رہے ہیں۔",
  },
  hi: {
    brand: "मोलिडो",
    heroTitle: "आख़िरी सिग्नल",
    heroText: "सिग्नल आ चुका है। यात्रा अभी शुरू होती है।",
    ctaTelegram: "सिग्नल से जुड़ें",
    ctaYoutube: "यूट्यूब पर देखें",
    signalHeading: "सिग्नल स्थिति",
    signalStatus: "सिग्नल पहचाना गया",
    signalNote: "प्रसारण सक्रिय है। चरण 01 — नींव ऑनलाइन।",
    dailySignal: "दैनिक सिग्नल",
    storyHeading: "कहानी",
    storyIntro:
      "मोलिडो एक वैश्विक, एआई-संचालित डिजिटल पारिस्थितिकी है, जो संवादात्मक कहानी, खेल, समुदाय और रचनात्मकता के इर्द-गिर्द बनाई जा रही है। «आख़िरी सिग्नल» इसकी कहानी की दुनिया है — एक प्रसारण, टुकड़ों में बँटा हुआ, जिसे वे लोग खोलते हैं जो उसका पीछा करना चुनते हैं।",
    storyFootnote:
      "कहानी लिखे जाने के साथ नए टुकड़े जारी होते हैं। जो पहले ही प्रसारित हो चुका है, उसके अलावा यहाँ कुछ भी अंतिम नहीं है।",
    statusTransmitted: "प्रसारित",
    statusIncoming: "आ रहा है",
    statusSealed: "मुहरबंद",
    communityHeading: "समुदाय",
    communityText:
      "सिग्नल हर उस व्यक्ति का है जो उसे सुनता है। कोई सीमा नहीं, कोई द्वार नहीं — एक चैनल, एक कहानी, खुले में बनती हुई।",
    youtubeHeading: "यूट्यूब",
    youtubeText: "प्रसारण को वीडियो रूप में देखें।",
    telegramHeading: "टेलीग्राम",
    telegramText: "लाइव सिग्नल चैनल और समुदाय।",
    footerTagline: "सिग्नल आ चुका है। यात्रा अभी शुरू होती है।",
    languageLabel: "भाषा",
    fragmentHeading: "टुकड़ा",
    fragmentIntro: "तीन भाग सही ढंग से बंद होते हैं। चौथा चौदह मानों की अपेक्षा करता है और उसके पास तेरह हैं। जो भाग हल होते हैं उनसे नियम निकालें, फिर लुप्त मान पुनः प्राप्त करें।",
    fragmentResolves: "हल होता है",
    fragmentExpects: "अपेक्षा 14, उपलब्ध 13",
    fragmentChecksum: "चेकसम",
    fragmentPrompt: "लुप्त मान (0–255)",
    fragmentVerify: "जाँचें",
    fragmentCorrect: "चेकसम बंद हो गया। भाग पूर्ण है।",
    fragmentWrong: "चेकसम बंद नहीं होता।",
    fragmentShare: "आज सब यही टुकड़ा देख रहे हैं।",
  },
  tr: {
    brand: "MOLIDO",
    heroTitle: "SON SİNYAL",
    heroText: "Sinyal ulaştı. Yolculuk şimdi başlıyor.",
    ctaTelegram: "Sinyale Katıl",
    ctaYoutube: "YouTube'da İzle",
    signalHeading: "Sinyal Durumu",
    signalStatus: "SİNYAL ALGILANDI",
    signalNote: "Yayın etkin. Faz 01 — temel çevrimiçi.",
    dailySignal: "GÜNLÜK SİNYAL",
    storyHeading: "Hikâye",
    storyIntro:
      "MOLIDO; etkileşimli hikâye anlatımı, oyunlar, topluluk ve yaratıcılık etrafında kurulan, yapay zekâ destekli küresel bir dijital ekosistemdir. SON SİNYAL onun hikâye evrenidir — tek bir yayın, parçalara ayrılmış, peşinden gitmeyi seçenler tarafından açığa çıkarılıyor.",
    storyFootnote:
      "Yeni parçalar hikâye yazıldıkça yayımlanır. Burada halihazırda iletilmiş olanın dışında hiçbir şey kesin değildir.",
    statusTransmitted: "İLETİLDİ",
    statusIncoming: "YOLDA",
    statusSealed: "MÜHÜRLÜ",
    communityHeading: "Topluluk",
    communityText:
      "Sinyal, onu duyan herkese aittir. Sınır yok, kapı yok — tek kanal, tek hikâye, açıkta inşa ediliyor.",
    youtubeHeading: "YouTube",
    youtubeText: "Yayını video biçiminde takip edin.",
    telegramHeading: "Telegram",
    telegramText: "Canlı sinyal kanalı ve topluluk.",
    footerTagline: "Sinyal ulaştı. Yolculuk şimdi başlıyor.",
    languageLabel: "Dil",
    fragmentHeading: "Parça",
    fragmentIntro: "Üç bölüm doğru kapanıyor. Dördüncüsü on dört değer bekliyor ve on üçü var. Kuralı çözülen bölümlerden çıkarın, sonra eksik değeri geri kazanın.",
    fragmentResolves: "çözülüyor",
    fragmentExpects: "14 bekliyor, 13 var",
    fragmentChecksum: "sağlama",
    fragmentPrompt: "Eksik değer (0–255)",
    fragmentVerify: "Doğrula",
    fragmentCorrect: "Sağlama kapandı. Bölüm tamamlandı.",
    fragmentWrong: "Sağlama kapanmıyor.",
    fragmentShare: "Bugün herkes aynı parçayı görüyor.",
  },
  az: {
    brand: "MOLIDO",
    heroTitle: "SON SİQNAL",
    heroText: "Siqnal gəlib çatdı. Səyahət indi başlayır.",
    ctaTelegram: "Siqnala Qoşul",
    ctaYoutube: "YouTube-da İzlə",
    signalHeading: "Siqnalın Vəziyyəti",
    signalStatus: "SİQNAL AŞKARLANDI",
    signalNote: "Ötürmə aktivdir. Faza 01 — təməl onlayndır.",
    dailySignal: "GÜNDƏLİK SİQNAL",
    storyHeading: "Hekayə",
    storyIntro:
      "MOLIDO interaktiv hekayəçilik, oyunlar, icma və yaradıcılıq ətrafında qurulan, süni intellektlə işləyən qlobal rəqəmsal ekosistemdir. SON SİQNAL onun hekayə dünyasıdır — vahid bir ötürmə, parçalara bölünmüş, onun ardınca getməyi seçənlər tərəfindən üzə çıxarılır.",
    storyFootnote:
      "Yeni parçalar hekayə yazıldıqca yayımlanır. Artıq ötürülmüş olandan başqa burada heç nə qəti deyil.",
    statusTransmitted: "ÖTÜRÜLDÜ",
    statusIncoming: "YOLDADIR",
    statusSealed: "MÖHÜRLÜ",
    communityHeading: "İcma",
    communityText:
      "Siqnal onu eşidən hər kəsə aiddir. Sərhəd yox, qapı yox — bir kanal, bir hekayə, açıq şəkildə qurulur.",
    youtubeHeading: "YouTube",
    youtubeText: "Ötürməni video formatında izləyin.",
    telegramHeading: "Telegram",
    telegramText: "Canlı siqnal kanalı və icma.",
    footerTagline: "Siqnal gəlib çatdı. Səyahət indi başlayır.",
    languageLabel: "Dil",
    fragmentHeading: "Parça",
    fragmentIntro: "Üç bölmə düzgün bağlanır. Dördüncüsü on dörd dəyər gözləyir və on üçü var. Qaydanı həll olunan bölmələrdən çıxarın, sonra əskik dəyəri bərpa edin.",
    fragmentResolves: "həll olunur",
    fragmentExpects: "14 gözləyir, 13 var",
    fragmentChecksum: "yoxlama məbləği",
    fragmentPrompt: "Əskik dəyər (0–255)",
    fragmentVerify: "Yoxla",
    fragmentCorrect: "Yoxlama məbləği bağlandı. Bölmə tamamdır.",
    fragmentWrong: "Yoxlama məbləği bağlanmır.",
    fragmentShare: "Bu gün hamı eyni parçanı görür.",
  },
  zh: {
    brand: "MOLIDO",
    heroTitle: "最后的信号",
    heroText: "信号已经抵达。旅程由此开始。",
    ctaTelegram: "加入信号",
    ctaYoutube: "在 YouTube 观看",
    signalHeading: "信号状态",
    signalStatus: "已检测到信号",
    signalNote: "传输进行中。阶段 01 — 基础已上线。",
    dailySignal: "每日信号",
    storyHeading: "故事",
    storyIntro:
      "MOLIDO 是一个由人工智能驱动的全球数字生态，围绕互动叙事、游戏、社区与创作构建。《最后的信号》是它的故事宇宙——一次传输，碎裂成片段，由选择追随它的人逐一揭开。",
    storyFootnote:
      "新的片段将随着故事的书写而发布。除了已经传出的部分，这里没有任何内容是最终的。",
    statusTransmitted: "已传出",
    statusIncoming: "传输中",
    statusSealed: "封存",
    communityHeading: "社区",
    communityText:
      "信号属于每一个听见它的人。没有边界，没有门槛——一个频道，一个故事，公开建造。",
    youtubeHeading: "YouTube",
    youtubeText: "以视频形式追踪这次传输。",
    telegramHeading: "Telegram",
    telegramText: "实时信号频道与社区。",
    footerTagline: "信号已经抵达。旅程由此开始。",
    languageLabel: "语言",
    fragmentHeading: "片段",
    fragmentIntro: "三节能正确闭合。第四节期待十四个值，只有十三个。从能解出的那几节里推出规则，然后把缺失的那个值找回来。",
    fragmentResolves: "已闭合",
    fragmentExpects: "期待 14，实有 13",
    fragmentChecksum: "校验和",
    fragmentPrompt: "缺失的值（0–255）",
    fragmentVerify: "验证",
    fragmentCorrect: "校验和闭合了。这一节完整了。",
    fragmentWrong: "校验和没有闭合。",
    fragmentShare: "今天所有人看到的是同一个片段。",
  },
};
