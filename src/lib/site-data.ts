export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  icon?: string;
}

export const careerTimeline: TimelineItem[] = [
  {
    year: "〜2012",
    title: "看護師になる",
    subtitle: "北部の看護学校を卒業後、中部病院（小児・泌尿器科）で3年勤務",
  },
  {
    year: "2013",
    title: "海外へ飛び出す",
    subtitle: "ワーキングホリデーでオーストラリア・フィリピン・カナダを渡り歩く",
  },
  {
    year: "2014〜",
    title: "看護師に復帰",
    subtitle: "西原の病院で小児科看護。教育担当として後輩指導にも携わる",
  },
  {
    year: "2017〜",
    title: "訪問看護の世界へ",
    subtitle: "病院の外でのケアに可能性を感じ、訪問看護ステーションへ転身",
  },
  {
    year: "2020〜",
    title: "キャリアコンサルタント資格取得",
    subtitle: "「人」と「業務」の両面から現場を支える軸ができる",
  },
  {
    year: "2024",
    title: "Yazirusi 設立",
    subtitle: "AI×医療×DXを軸に、コンサルタントとして独立",
  },
  {
    year: "2025〜",
    title: "オンライン診療「ぬちまーす号」参画",
    subtitle: "沖縄スマートウェルネス「ぬちまーす号」で看護師として新しい医療の形を現場からつくる",
  },
  {
    year: "2026〜",
    title: "ラジオパーソナリティ開始",
    subtitle: "FM21「イエローかっし〜」で医療・DX・キャリア情報を発信",
  },
  {
    year: "2026〜",
    title: "子ども食堂 運営開始",
    subtitle: "地域の子どもたちの居場所づくりを目的に、沖縄・中城村で子ども食堂をスタート。無料・低額での食事提供に加え、学習支援も実施。",
  },
];

export const siteProfile = {
  name: "金城竜弥",
  title: "看護師 / DX・業務改善パートナー / キャリアコンサルタント / ラジオパーソナリティ",
  bio: "看護師15年の現場経験×キャリアコンサルタント。DX・AIで現場の業務改善を支援しながら、キャリア迷子を助ける伴走者。システム構築からAI講座、キャリア相談、ラジオ発信まで。\"よくしたい\"の形は人それぞれ——一緒に道を探します。",
  location: "沖縄県中城村",
  heroTagline1: "「どうするとよくなるか」",
  heroTagline2: "で立ち止まったら、相談してほしい。",
  heroDescription: "現場をよくしたい、でも人手も時間もない——。15年にわたる看護師経験とDX・AIの知見で、あなたの「やりたい」を仕組みでカタチにします。出退勤・在庫・案件管理のシステム構築からAI人材育成まで、現場目線で対応。",
};

export const siteContacts = {
  email: "ryuyakinjo@gmail.com",
  location: "沖縄県中城村",
  calendly: "https://calendar.google.com/calendar/appointments/AcZssZ1zsY3H7WMckAhw6Ddz4aqb82i9YaIRgmZGUmk=?gv=true",
};

export const defaultWorks = [
  {
    id: "1",
    title: "契約書管理システム",
    category: "業務効率化",
    description: "スタッフ7名分の契約書テンプレート化・管理業務。業務委託契約の分類（統括オペレーター/現場ディレクター/運営オペレーター）を設計。",
  },
  {
    id: "2",
    title: "PersonaSight",
    category: "Webアプリケーション",
    description: "多角的ペルソナ視点のビジネスアイデア検証アプリ。Next.js + TypeScript + Tailwind CSSで開発。1,000人の仮想ペルソナからフィードバックを収集。",
  },
  {
    id: "3",
    title: "AI導入支援",
    category: "テクノロジー",
    description: "医療現場へのAI議事録サービス（Leexi）導入支援、業務効率化コンサルティング。契約書管理システムの構築なども実施。",
  },
  {
    id: "4",
    title: "DX環境構築（複数社）",
    category: "テクノロジー",
    description: "出退勤・在庫・案件管理システムの選定・導入、Google環境セットアップ。現場の業務フローを分析し、無駄を削減。",
  },
  {
    id: "5",
    title: "子ども食堂運営",
    category: "地域活動",
    description: "中城村で子ども食堂を運営。地域の子どもたちに無料または低額で食事を提供し、学習支援も実施。地域コミュニティの拠点として活動中。",
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
    name: "看護師業務 15年",
  },
  {
    category: "DX・システム構築",
    name: "出退勤管理",
  },
  {
    category: "DX・システム構築",
    name: "在庫管理",
  },
  {
    category: "DX・システム構築",
    name: "案件管理",
  },
  {
    category: "DX・システム構築",
    name: "Google環境構築",
  },
  {
    category: "DX・システム構築",
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
    name: "マニュアル整備",
  },
  {
    category: "AI・人材育成",
    name: "50名+ 育成実績",
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
    links: [{ label: "Instagram", url: "https://www.instagram.com/imust.insole/" }],
  },
  tecchan: {
    name: "てっちゃん",
    role: "イエローかっし～ パーソナリティ / イエロークロス骨の委員長",
    links: [{ label: "Instagram", url: "https://www.instagram.com/yellowcross2023/" }],
  },
  kinjo: {
    name: "金城竜弥",
    role: "AIコンサルタント / Yazirusi 代表",
    links: [{ label: "Instagram", url: "https://www.instagram.com/yazirusi_kinjo/" }],
  },
  kinchan: {
    name: "きんちゃん (金城竜弥)",
    role: "イエローかっし～ パーソナリティ / Yazirusi 代表",
    links: [{ label: "Instagram", url: "https://www.instagram.com/yazirusi_kinjo/" }],
  },
};
