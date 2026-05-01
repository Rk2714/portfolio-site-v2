export const siteProfile = {
  name: "金城竜弥",
  title: "看護師 / DX・業務改善パートナー / ラジオパーソナリティ",
  bio: "看護師15年の臨床経験を活かし、医療現場・企業・個人事業主のDX・業務改善を支援しています。システム構築、Google環境セットアップ、AI人材育成（50名規模）まで、現場の課題を技術で解決します。",
  location: "沖縄県中城村",
  heroTagline1: "医療現場の課題を、",
  heroTagline2: "DXと人材育成で解決する。",
  heroDescription: "15年の臨床経験を活かし、医療機関を中心に企業・個人事業主・チームの業務改善も支援。出退勤・在庫・案件管理のシステム構築、Google環境セットアップ、AI人材育成（50名規模）まで、現場目線で対応します。",
};

export const siteContacts = {
  email: "ryuyakinjo@gmail.com",
  location: "沖縄県中城村",
  calendly: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1dL0u8qskhfEDpacS_oUA7sQzLuLcNJf35Jm55-LP0WqMhoRB38reuFFqrjqU2sAQG9rkzjlrI?gv=true",
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
];

export const defaultSkills = [
  {
    category: "医療・ヘルスケア",
    name: "救急・ICU",
  },
  {
    category: "医療・ヘルスケア",
    name: "手術室",
  },
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
    role: "AIコンサルタント / 矢印代表",
    links: [{ label: "Instagram", url: "https://www.instagram.com/yazirusi_kinjo/" }],
  },
};
