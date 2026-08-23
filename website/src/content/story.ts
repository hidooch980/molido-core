import type { Localized } from "../i18n/locale";

export type ChapterStatus = "transmitted" | "incoming" | "sealed";

export interface Chapter {
  /** Position in the arc, as defined in README -> THE LAST SIGNAL. */
  id: number;
  status: ChapterStatus;
  /** The stage name from the canonical story structure. */
  stage: Localized<string>;
  title: Localized<string>;
  /** Shown for every chapter, including sealed ones. */
  teaser: Localized<string>;
  /** Full text. Only written once a chapter has actually been transmitted. */
  body?: Localized<string[]>;
}

export const chapters: Chapter[] = [
  {
    id: 1,
    status: "transmitted",
    stage: { en: "Unknown Signal", fa: "سیگنال ناشناس" },
    title: { en: "Something Answered", fa: "چیزی پاسخ داد" },
    teaser: {
      en: "A signal reaches Earth. Nobody sent it.",
      fa: "سیگنالی به زمین می‌رسد. هیچ‌کس آن را نفرستاده است.",
    },
    body: {
      en: [
        "It arrived on a Tuesday, at 03:17 UTC, on a frequency nobody uses any more.",
        "Seventeen stations recorded it. None of them were listening for it. The pattern held for four minutes and eleven seconds, then stopped — not faded, stopped, the way a sentence stops when the speaker decides you have heard enough.",
        "It has not repeated. What it left behind is a fragment: incomplete, structured, and clearly meant to be finished by someone else.",
        "That is where MOLIDO begins. Not with an answer — with the first piece of a question.",
      ],
      fa: [
        "سه‌شنبه رسید، ساعت ۰۳:۱۷ به وقت جهانی، روی فرکانسی که دیگر کسی از آن استفاده نمی‌کند.",
        "هفده ایستگاه ثبتش کردند. هیچ‌کدام منتظرش نبودند. الگو چهار دقیقه و یازده ثانیه دوام آورد، بعد قطع شد — نه محو شد، قطع شد؛ همان‌طور که جمله‌ای قطع می‌شود وقتی گوینده تصمیم می‌گیرد به‌اندازه‌ی کافی شنیده‌ای.",
        "تکرار نشده است. آنچه به‌جا گذاشت یک قطعه است: ناقص، ساختارمند، و آشکارا ساخته‌شده تا کس دیگری تمامش کند.",
        "مولیدو از همین‌جا آغاز می‌شود. نه با یک پاسخ — با نخستین تکه‌ی یک پرسش.",
      ],
    },
  },
  {
    id: 2,
    status: "transmitted",
    stage: { en: "First Fragment", fa: "نخستین قطعه" },
    title: { en: "The Incomplete Message", fa: "پیام ناتمام" },
    teaser: {
      en: "The fragment is not noise. It is structured — and something is missing from it on purpose.",
      fa: "قطعه نویز نیست. ساختار دارد — و چیزی عمداً از آن کم شده است.",
    },
    body: {
      en: [
        "Noise is easy to recognise. Noise has no opinion about where it ends.",
        "This has structure. Repeating blocks, consistent spacing, a checksum at the close of each section that resolves correctly — every section except one. In that section the checksum expects fourteen values and receives thirteen.",
        "The obvious reading is damage: something lost in transit, a gap where the atmosphere or the distance ate a piece of the message. But damaged data does not usually leave the surrounding structure intact, and this structure is untouched on both sides of the hole. The gap is the exact size of the thing that should fill it.",
        "Which leaves a harder reading. The fragment was not broken on the way here. It was sent incomplete.",
        "A message you cannot finish is a message. A message that can only be finished by someone doing something is an invitation.",
        "Nobody has decided yet which one this is.",
      ],
      fa: [
        "نویز را به‌راحتی می‌شود تشخیص داد. نویز درباره‌ی اینکه کجا تمام شود نظری ندارد.",
        "این یکی ساختار دارد. بلوک‌های تکرارشونده، فاصله‌گذاری یکنواخت، و یک جمع کنترلی در پایان هر بخش که درست حل می‌شود — همه‌ی بخش‌ها جز یکی. در آن بخش، جمع کنترلی انتظار چهارده مقدار را دارد و سیزده مقدار دریافت می‌کند.",
        "خوانش بدیهی، آسیب است: چیزی در مسیر گم شده، شکافی که جوّ یا فاصله تکه‌ای از پیام را خورده. اما داده‌ی آسیب‌دیده معمولاً ساختار پیرامونش را دست‌نخورده باقی نمی‌گذارد، و اینجا ساختار در هر دو سوی حفره سالم است. اندازه‌ی شکاف دقیقاً به‌اندازه‌ی چیزی است که باید پُرش کند.",
        "و این خوانش دشوارتری باقی می‌گذارد. قطعه در راه نشکسته است. ناقص فرستاده شده است.",
        "پیامی که نمی‌توانی تمامش کنی، یک پیام است. پیامی که فقط با انجام‌دادن کاری از سوی کسی تمام می‌شود، یک دعوت است.",
        "هنوز کسی تصمیم نگرفته این کدام یک است.",
      ],
    },
  },
  {
    id: 3,
    status: "transmitted",
    stage: { en: "Hidden Coordinates", fa: "مختصات پنهان" },
    title: {
      en: "A Place That Should Be Empty",
      fa: "جایی که باید خالی باشد",
    },
    teaser: {
      en: "The fragment resolves to a location. The maps disagree about it.",
      fa: "قطعه به یک موقعیت مکانی می‌رسد. نقشه‌ها بر سر آن اختلاف دارند.",
    },
    body: {
      en: [
        "Thirteen values. Read as coordinates, they resolve.",
        "They resolve to open water — a stretch of ocean with nothing on it, which is what most of the planet is. Unremarkable, until you compare sources. Older survey charts mark a small landmass there. Newer ones do not. The correction appears in the record without a survey behind it, the way a typo gets fixed rather than the way a discovery gets made.",
        "There are ordinary explanations. Charts inherit errors from each other for centuries; phantom islands have been copied forward and quietly deleted before. That is the likely answer, and it should be said plainly rather than skipped past because a stranger one is available.",
        "What the ordinary explanation does not cover is the fourteenth value — the one the checksum expects and the fragment does not supply.",
        "Coordinates fix a point on a surface. Thirteen values give a where. The missing one would give a when.",
        "The fragment is not pointing at a place. It is pointing at a place at a time, and it has declined to say which.",
      ],
      fa: [
        "سیزده مقدار. اگر به‌عنوان مختصات خوانده شوند، حل می‌شوند.",
        "به آب‌های آزاد می‌رسند — پهنه‌ای از اقیانوس که چیزی رویش نیست، که بیشترِ این سیاره همین است. عادی، تا وقتی منابع را با هم بسنجی. نقشه‌های قدیمی‌تر آنجا خشکی کوچکی را نشان می‌دهند. تازه‌ترها نه. و آن اصلاح، بی‌آنکه نقشه‌برداری‌ای پشتش باشد، وارد سابقه شده — به شیوه‌ای که یک غلط تایپی تصحیح می‌شود، نه به شیوه‌ای که یک کشف ثبت می‌شود.",
        "توضیح‌های عادی وجود دارند. نقشه‌ها قرن‌ها خطاهای یکدیگر را به ارث می‌برند؛ جزیره‌های شبح پیش‌تر هم رو به جلو رونویسی و بی‌سروصدا حذف شده‌اند. این پاسخِ محتمل است، و باید صریح گفته شود، نه اینکه از رویش رد شویم چون پاسخ عجیب‌تری در دسترس است.",
        "آنچه توضیح عادی پوشش نمی‌دهد، مقدار چهاردهم است — همانی که جمع کنترلی انتظارش را دارد و قطعه ارائه‌اش نمی‌کند.",
        "مختصات یک نقطه را روی یک سطح ثابت می‌کنند. سیزده مقدار یک «کجا» می‌دهند. آن یکی که غایب است، یک «کِی» می‌داد.",
        "قطعه به یک مکان اشاره نمی‌کند. به یک مکان در یک زمان اشاره می‌کند، و از گفتن اینکه کدام زمان، سر باز زده است.",
      ],
    },
  },
  {
    id: 4,
    status: "incoming",
    stage: { en: "Global Discovery", fa: "کشف جهانی" },
    title: { en: "Others Are Listening", fa: "دیگران هم می‌شنوند" },
    teaser: {
      en: "The signal did not reach one person. It reached everyone who was willing to look.",
      fa: "سیگنال به یک نفر نرسید. به هر کسی رسید که حاضر بود نگاه کند.",
    },
  },
  {
    id: 5,
    status: "sealed",
    stage: { en: "MOLIDO Awakening", fa: "بیداری مولیدو" },
    title: { en: "The Network Wakes", fa: "شبکه بیدار می‌شود" },
    teaser: {
      en: "What the fragments assemble into was never a message.",
      fa: "آنچه قطعه‌ها کنار هم می‌سازند، هرگز یک پیام نبود.",
    },
  },
  {
    id: 6,
    status: "sealed",
    stage: { en: "The Unknown", fa: "ناشناخته" },
    title: { en: "—", fa: "—" },
    teaser: {
      en: "Unwritten. It depends on who follows the signal.",
      fa: "نوشته‌نشده. بستگی دارد چه کسی دنبال سیگنال برود.",
    },
  },
];
