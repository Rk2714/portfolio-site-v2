import type { MediaPost } from "./media-data";

export type MediaCategory = MediaPost["category"];
export type MediaCategoryFilter = MediaCategory | "all";

export const mediaCategoryOptions: Array<{
  key: MediaCategoryFilter;
  label: string;
  heroTitle: string;
  heroDescription: string;
}> = [
  {
    key: "all",
    label: "すべて",
    heroTitle: "人と活動の記録。",
    heroDescription:
      "ラジオの放送回、出演・取材、日々の気づきをまとめています。気になる記録からご覧ください。",
  },
  {
    key: "radio",
    label: "ラジオ",
    heroTitle: "ラジオの放送記録。",
    heroDescription:
      "番組で交わした話を、テーマや要点とともにまとめています。気になる回からお聴きください。",
  },
  {
    key: "guest",
    label: "ゲスト",
    heroTitle: "ゲストと交わした話。",
    heroDescription:
      "沖縄で活動する方々の歩みや思いを伺った放送回です。ゲストの活動先もあわせて紹介しています。",
  },
  {
    key: "appear",
    label: "出演",
    heroTitle: "出演・取材の記録。",
    heroDescription:
      "番組出演や取材、対談の内容をまとめています。お話ししたテーマと活動の背景をご覧いただけます。",
  },
  {
    key: "note",
    label: "読みもの",
    heroTitle: "日々の気づきと、考えたこと。",
    heroDescription:
      "現場で感じたことや、仕事につながる視点を短い文章で残しています。",
  },
];

export function isMediaCategory(value: string): value is MediaCategory {
  return value === "radio" || value === "guest" || value === "appear" || value === "note";
}

export function normalizeMediaCategory(value: string | string[] | undefined): MediaCategoryFilter {
  const candidate = Array.isArray(value) ? value[0] : value;

  if (!candidate || candidate === "all") {
    return "all";
  }

  return isMediaCategory(candidate) ? candidate : "all";
}

export function getMediaCategoryOption(category: MediaCategoryFilter) {
  return mediaCategoryOptions.find((option) => option.key === category) ?? mediaCategoryOptions[0]!;
}
