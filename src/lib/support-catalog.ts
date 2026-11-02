/** Public product terms. Existing contracts retain their purchased snapshot. */
import catalog from "../../services/support/catalog.json";
export type SupportService = "consultation" | "practice";
export type SupportPack = 1 | 4 | 8;
export type SupportAudience = "personal" | "business";
export const SUPPORT_SERVICES = {
  consultation: {
    name: "AI活用相談",
    minutes: 60,
    singlePrice: 5000,
    description:
      "今の状況を簡易診断し、使うAI・改善の方向・次の一歩を整理します。",
    deliverable: "改善の方向と次の一歩をまとめた方針メモ",
    boundary: "操作・制作を進めたい方は実践・開発サポートをお選びください。",
  },
  practice: {
    name: "実践・開発サポート",
    minutes: 90,
    singlePrice: 10000,
    description:
      "画面を共有して、一緒に操作・設定・制作を進めます。作ったプロンプト・設定・小さなプログラムなどをお渡しすることもできます。",
    deliverable: "時間内で作ったもの・設定と、残作業・次の手順",
    boundary:
      "今回のゴールを事前に決めます。時間外の制作や完成までの開発代行は別見積です。",
  },
} as const;
export const SUPPORT_PACKS = [1, 4, 8] as const;
export const SUPPORT_PRODUCTS = (
  Object.keys(SUPPORT_SERVICES) as SupportService[]
).flatMap((service) =>
  SUPPORT_PACKS.map((pack) => {
    const terms = catalog[`${service}-${pack}` as keyof typeof catalog];
    return {
      id: terms.sku,
      service,
      pack,
      price: terms.amount,
      minutes: terms.minutes,
      expiryMonths: terms.months,
      discountPercent: pack === 4 ? 10 : pack === 8 ? 15 : 0,
    };
  }),
);
export function supportProduct(service: SupportService, pack: SupportPack) {
  return SUPPORT_PRODUCTS.find(
    (product) => product.service === service && product.pack === pack,
  )!;
}
export function purchasePath(
  service: SupportService,
  pack: SupportPack,
  audience: SupportAudience,
) {
  return `/account?${new URLSearchParams({ intent: "purchase", service, pack: String(pack), audience })}`;
}
export function parseSupportSelection(search: string, hash = "") {
  const params = new URLSearchParams(search);
  const audience: SupportAudience =
    params.get("audience") === "business"
      ? "business"
      : params.get("audience") === "personal"
        ? "personal"
        : hash === "#business"
          ? "business"
          : "personal";
  const service: SupportService =
    params.get("service") === "practice" ? "practice" : "consultation";
  const value = Number(params.get("pack"));
  const pack: SupportPack = value === 4 || value === 8 ? value : 1;
  return { audience, service, pack };
}
