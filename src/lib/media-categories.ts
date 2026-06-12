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
    heroTitle: "ラジオ、ゲスト対談、現場での気づき。",
    heroDescription:
      "ラジオパーソナリティとしての活動記録と、現場で感じたことを書き留めた雑記。医療、DX、地方創生、人材育成の視点をまとめています。",
  },
  {
    key: "radio",
    label: "ラジオ",
    heroTitle: "ラジオ回を、まとめてチェック。",
    heroDescription:
      "番組本編の内容を、テーマ・タイムスタンプ・要点つきで一覧化。あとから探しやすく、共有しやすい形でまとめています。",
  },
  {
    key: "guest",
    label: "ゲスト",
    heroTitle: "ゲスト回を、紹介しやすく。",
    heroDescription:
      "専門家や実践者のリアルな話を、ひと目で伝わる要約つきで整理。ゲスト本人や関係者がそのまま紹介しやすい一覧です。",
  },
  {
    key: "appear",
    label: "出演",
    heroTitle: "出演回を、まとめて紹介。",
    heroDescription:
      "他番組や取材での出演内容を一覧化。金城竜弥がどんな切り口で話しているかを、外部向けに見せやすく整理しています。",
  },
  {
    key: "note",
    label: "雑記",
    heroTitle: "雑記・メモを、静かに整理。",
    heroDescription:
      "現場で感じたことや、仕事につながる視点を短くまとめる場所。まだ件数は少ないですが、今後の蓄積先です。",
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
