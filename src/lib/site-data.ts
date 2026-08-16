export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  icon?: string;
  href?: string;
  linkLabel?: string;
}

export const careerTimeline: TimelineItem[] = [
  {
    year: "2012",
    title: "看護師としてキャリアを開始",
    subtitle: "沖縄北部の看護学校を卒業し、県内の医療機関へ",
  },
  {
    year: "2014.10—2016.04",
    title: "海外留学",
    subtitle: "異なる文化と働き方に触れ、仕事観・人生観を広げる",
  },
  {
    year: "2016—2023",
    title: "病院勤務を再開",
    subtitle: "小児科・消化器領域の看護に携わり、業務改善の意義と難しさを実感",
  },
  {
    year: "2023—2024",
    title: "訪問看護の現場へ",
    subtitle: "病院外の医療を学ぶ中で、改善への思いがさらに強まる",
  },
  {
    year: "2024",
    title: "Yazirusi 設立",
    subtitle: "医療・介護の現場経験を基盤に、業務改善支援を開始",
  },
  {
    year: "2025",
    title: "オンライン診療プロジェクトに参画",
    subtitle: "運営と現場業務の両方に携わり、継続できる仕組みの重要性を学ぶ",
  },
  {
    year: "2026〜",
    title: "ラジオパーソナリティ開始",
    subtitle: "FM21で医療・働き方・地域活動を発信",
  },
  {
    year: "2026〜",
    title: "子ども食堂 運営開始",
    subtitle: "中城村で子どもの居場所づくりを始める",
  },
];

export const siteProfile = {
  name: "金城竜弥",
  title: "医療・介護現場の業務改善パートナー / Yazirusi 代表",
  bio: "病院、訪問看護、介護老人保健施設、オンライン診療の現場で、記録、連絡、情報共有、データ活用にまつわるつまずきを見てきました。AIは目的ではなく、現場を少し楽にするための道具。ラジオや地域活動も含めて、人と現場に次の一歩をつくることを大切にしています。",
  location: "沖縄県中城村",
  heroTagline1: "医療・介護の現場に、",
  heroTagline2: "次の一歩をつくります。",
  heroDescription: "訪問看護、病棟、オンライン診療、地域活動。いろいろな現場で見てきたつまずきをもとに、記録・連絡・情報共有・AI活用を、現場に合わせて整えます。",
};

export const siteContacts = {
  email: "ryuyakinjo@yazirusi.com",
  location: "沖縄県中城村",
  calendly: "https://calendar.google.com/calendar/appointments/AcZssZ1zsY3H7WMckAhw6Ddz4aqb82i9YaIRgmZGUmk=?gv=true",
};

export interface AudienceOffer {
  id: "business" | "personal";
  kicker: string;
  title: string;
  heading: string;
  description: string;
  services: string[];
  priceLabel: string;
  price: string;
  priceNote: string;
  pricingHref: string;
  pricingCta: string;
  consultationCta: string;
}

export const audienceOffers: AudienceOffer[] = [
  {
    id: "business",
    kicker: "For business",
    title: "法人・事業所向け",
    heading: "業務と情報の流れを、現場で続く仕組みに。",
    description:
      "現場だけでは進めにくい改善を、小さく試しながら運用できる形へ整えます。",
    services: [
      "業務・情報の流れを整理",
      "今あるツールの活用と連携",
      "必要に応じた業務システム構築",
    ],
    priceLabel: "業務整理・改善伴走",
    price: "68,000円〜",
    priceNote: "業務改善スポット支援（60分）は10,000円〜。",
    pricingHref: "/pricing#business",
    pricingCta: "法人向け料金を見る",
    consultationCta: "法人・事業所の相談を予約",
  },
  {
    id: "personal",
    kicker: "For individuals",
    title: "個人向け",
    heading: "自分に合うAIの使い方を、一対一でつくる。",
    description:
      "実際にAIを触りながら、仕事や生活で無理なく使い続けられる自分用の型をつくります。",
    services: [
      "自分に合うAI活用",
      "仕事への落とし込み",
      "一対一の実践サポート",
    ],
    priceLabel: "初回AIセッション 60分",
    price: "5,000円",
    priceNote: "2026年8月31日まで。通常セッションは10,000円。",
    pricingHref: "/pricing#personal",
    pricingCta: "個人向け料金を見る",
    consultationCta: "個人AIセッションを予約",
  },
];

export interface CaseStudyItem {
  label: string;
  text: string;
}

export interface CaseStudy {
  status: string;
  sector: string;
  title: string;
  summary: string;
  items: CaseStudyItem[];
}

export const featuredCaseStudy: CaseStudy = {
  status: "匿名の提案・試作事例",
  sector: "医療・介護事業者",
  title: "散らばった業務を、使える形にする試作案。",
  summary:
    "現場で起こり得る課題を整理し、今あるツールと小さな仕組みを使った改善案を試作しました。",
  items: [
    {
      label: "想定した課題",
      text: "情報や作業が複数の場所に分かれ、探す時間と繰り返し作業が増えている状態を想定しました。",
    },
    {
      label: "試作した仕組み",
      text: "情報の保存場所と確認手順を整理し、繰り返し作業を減らす小さな仕組みを試作しました。",
    },
    {
      label: "作成した運用案",
      text: "テンプレート、操作手順、判断ルールを組み合わせ、現場で運用するための案を作成しました。",
    },
  ],
};

export interface BusinessPlan {
  name: string;
  price: string;
  priceAmount: number;
  description: string;
  items: string[];
  examples?: string[];
}

export const businessPlans: BusinessPlan[] = [
  {
    name: "業務整理・改善伴走",
    price: "68,000円〜",
    priceAmount: 68000,
    description:
      "実際の業務を題材に、情報と作業の流れを整理します。社内で作れるよう方法をお伝えすることも、必要な仕組みを私が構築することもできます。",
    items: [
      "8回×60分の個別伴走（オンライン）",
      "業務の見える化と優先順位付け",
      "今あるツールで減らせる手間を確認",
      "改善案の設計・小さな試作をサポート",
      "試作品と操作メモを共有",
    ],
    examples: ["情報整理", "帳票・書類の効率化", "作り方の支援または構築"],
  },
  {
    name: "業務システム構築・外部連携",
    price: "100,000円〜",
    priceAmount: 100000,
    description:
      "業務の流れを確認し、必要な仕組みの設計から運用開始まで支援します。",
    items: [
      "業務フローと要件の整理",
      "初期構築・動作確認",
      "運用ルールの作成",
      "現場での運用調整",
    ],
    examples: ["顧客・案件管理", "在庫・受付管理", "売上・請求データの整理"],
  },
  {
    name: "業務改善スポット支援",
    price: "10,000円〜",
    priceAmount: 10000,
    description:
      "困りごとを60分で整理し、優先順位と次の一歩を明確にします。",
    items: [
      "60分のオンライン相談",
      "現在の課題と背景を整理",
      "取り組む順番を提案",
      "相談後に整理メモを共有",
    ],
  },
];

export interface PersonalPlan {
  name: string;
  detail: string;
  price: string;
  priceAmount: number;
  note: string;
}

export const personalPlans: PersonalPlan[] = [
  {
    name: "初回AIセッション",
    detail: "60分",
    price: "5,000円",
    priceAmount: 5000,
    note: "2026年8月31日まで",
  },
  {
    name: "通常セッション",
    detail: "60分",
    price: "10,000円",
    priceAmount: 10000,
    note: "",
  },
  {
    name: "4回パック",
    detail: "60分 × 4回",
    price: "36,000円",
    priceAmount: 36000,
    note: "通常料金から10% OFF",
  },
  {
    name: "8回パック",
    detail: "60分 × 8回",
    price: "68,000円",
    priceAmount: 68000,
    note: "通常料金から15% OFF",
  },
];

export const defaultWorks = [
  {
    id: "1",
    title: "最初の顔合わせ",
    category: "相談設計",
    description: "最初の30分で困りごとの概要を伺い、Yazirusiでできることをお伝えします。詳しいヒアリングは必要な場合のみ次に行います。",
  },
  {
    id: "2",
    title: "情報共有・導線の整備",
    category: "仕組みづくり",
    description: "Google Drive、議事録、連絡ルール、予約導線など。情報の置き場所が増えても迷わない形に整えます。",
  },
  {
    id: "3",
    title: "AI活用・マニュアル整備",
    category: "AI・人材育成",
    description: "音声入力、記録下書き、マニュアル作成など、現場で使う順番から整理します。個人向けでもチーム向けでも対応します。",
  },
];

export const defaultSkills = [
  {
    category: "医療・ヘルスケア",
    name: "小児科",
  },
  {
    category: "医療・ヘルスケア",
    name: "内科",
  },
  {
    category: "医療・ヘルスケア",
    name: "消化器",
  },
  {
    category: "医療・ヘルスケア",
    name: "泌尿器",
  },
  {
    category: "医療・ヘルスケア",
    name: "訪問看護",
  },
  {
    category: "医療・ヘルスケア",
    name: "オンライン診療",
  },
  {
    category: "医療・ヘルスケア",
    name: "看護師業務 約15年",
  },
  {
    category: "業務改善・仕組みづくり",
    name: "出退勤管理",
  },
  {
    category: "業務改善・仕組みづくり",
    name: "在庫管理",
  },
  {
    category: "業務改善・仕組みづくり",
    name: "案件管理",
  },
  {
    category: "業務改善・仕組みづくり",
    name: "Google環境構築",
  },
  {
    category: "業務改善・仕組みづくり",
    name: "ツール連携",
  },
  {
    category: "AI・人材育成",
    name: "AI講師",
  },
  {
    category: "AI・人材育成",
    name: "講座設計",
  },
  {
    category: "AI・人材育成",
    name: "現場定着型育成",
  },
  {
    category: "AI・人材育成",
    name: "AIマニュアル整備",
  },
  {
    category: "AI・人材育成",
    name: "フローチャート作成",
  },
  {
    category: "AI・人材育成",
    name: "マニュアル整備",
  },
];

export interface Host {
  name: string;
  role: string;
  image?: string;
  links?: { label: string; url: string }[];
}

export const hosts: Record<string, Host> = {
  cassy: {
    name: "カッシー",
    role: "イエローかっし～ メインパーソナリティ / インソール工房アイマスト",
    image: "/images/cassy-profile.jpg",
    links: [{ label: "Instagram", url: "https://www.instagram.com/imust.insole/" }],
  },
  tecchan: {
    name: "てっちゃん",
    role: "イエローかっし～ パーソナリティ / イエロークロス骨の委員長",
    links: [{ label: "Instagram", url: "https://www.instagram.com/yellowcross2023/" }],
  },
  kinjo: {
    name: "金城竜弥",
    role: "医療・介護現場の業務改善パートナー / Yazirusi 代表",
    links: [{ label: "Instagram", url: "https://www.instagram.com/yazirusi_kinjo/" }],
  },
  kinchan: {
    name: "きんちゃん (金城竜弥)",
    role: "イエローかっし～ パーソナリティ / Yazirusi 代表",
    image: "/images/kinchan-profile.jpg",
    links: [{ label: "Instagram", url: "https://www.instagram.com/yazirusi_kinjo/" }],
  },
};
