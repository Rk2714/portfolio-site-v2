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
    subtitle: "AI×医療を軸に、コンサルタントとして独立",
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
  title: "AI活用アドバイザー / 仕組みづくり / キャリア相談",
  bio: "看護の現場からスタートして、AIの使い方、Googleまわりの整備、予約や導線の整理までやっています。派手なことより、ちゃんと回ること。仕事の流れを少し軽くして、考える余白をつくるのが役目です。",
  location: "沖縄県中城村",
  heroTagline1: "AIの使い方を、",
  heroTagline2: "仕事に合わせて教えます。",
  heroDescription: "相談だけでも、仕組みづくりでも。看護の現場で育った感覚をベースに、AI・Google・予約導線を、無理なく使える形に整えます。",
};

export const siteContacts = {
  email: "ryuyakinjo@gmail.com",
  location: "沖縄県中城村",
  calendly: "https://calendar.google.com/calendar/appointments/AcZssZ1zsY3H7WMckAhw6Ddz4aqb82i9YaIRgmZGUmk=?gv=true",
};

export const defaultWorks = [
  {
    id: "1",
    title: "AI活用の初回整理",
    category: "相談設計",
    description: "30分の無料相談で、今どこが詰まっているかを整理。AIを入れるべきか、Googleを整えるべきか、まず見極めるところから始めます。",
  },
  {
    id: "2",
    title: "Google / 予約導線の整備",
    category: "仕組みづくり",
    description: "Googleカレンダーや予約導線、支払いリンクの整理など。リンクが増えても迷わない形に整えます。",
  },
  {
    id: "3",
    title: "AI活用講座",
    category: "AI・人材育成",
    description: "「使い方がわからない」を前提に、現場で使う順番から整理する講座設計。個人向けでもチーム向けでも対応します。",
  },
  {
    id: "4",
    title: "キャリア相談",
    category: "対話",
    description: "看護がベースで、いろいろ転々としてきた経験をもとに、働き方や次の一歩も一緒に整理します。",
    instagram: "https://www.instagram.com/p/DZG7LxMEmAi/",
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
