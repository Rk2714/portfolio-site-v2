# 金城竜弥 ポートフォリオサイト

Next.js 16 + TypeScript + Tailwind CSS で構築した個人ポートフォリオサイト。

**公開URL**: [https://portfolio-site-xi-eight-33.vercel.app/](https://portfolio-site-xi-eight-33.vercel.app/)

---

## 技術スタック

| 項目 | 採用技術 |
|------|---------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Font | Noto Sans JP |
| Icons | Lucide React |
| Deploy | Vercel |

---

## ディレクトリ構成

```
├── public/images/          # 画像アセット（アイコン、背景、サムネイル）
│   └── okinawa-sea.jpg
│   └── radio-microphone.jpg
│   └── clinic-abstract.jpg
│   └── ...
├── src/
│   ├── app/
│   │   ├── page.tsx        # トップページ（セクション組み立て）
│   │   ├── layout.tsx      # ルートレイアウト（フォント、メタデータ）
│   │   ├── media/
│   │   │   └── page.tsx    # ラジオ/メディア活動ページ
│   │   ├── sections/       # トップページ用セクションコンポーネント
│   │   │   ├── Hero.tsx
│   │   │   ├── Problem.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Works.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Voice.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── Contact.tsx
│   │   └── globals.css     # グローバルスタイル
│   └── components/
│       ├── Navbar.tsx      # ナビゲーションバー
│       └── Footer.tsx
├── REDESIGN_PROMPT.md      # AIリデザイン時の詳細プロンプト
├── HANDOVER.md             # 別エージェントへの引き継ぎ資料
├── vercel.json             # Vercel フレームワーク設定
└── next.config.ts          # Next.js 設定
```

---

## ローカル開発

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開く。

---

## ビルド・デプロイ

### Vercel CLI で本番デプロイ

```bash
npx vercel --prod
```

### ⚠️ 重要: Vercel デプロイ時の `dist` トラップ

本プロジェクトでは、**ビルド後に `.next/` を `dist/` に同期**する仕組みを入れている。

```json
// package.json
"build": "next build && rm -rf dist && cp -R .next dist"
```

#### なぜこれが必要か

Vercel はデフォルトで `.next/` を参照するが、**過去に `vercel.json` やダッシュボード設定で `dist/` を出力ディレクトリに指定していた場合**、古い `dist/` のまま配信され続け、ソースの変更が反映されなくなることがある。

#### 発生した事象

- `next build` は成功する
- `out/` や `.next/` は最新になる
- しかし Vercel 公開 URL にアクセスすると、古い HTML が返ってくる
- 原因: Vercel が `dist/`（古い静的エクスポートの残骸）を配信していた

#### 対処法

1. `package.json` の `build` スクリプトで `.next/` を `dist/` に上書きコピーする
2. `vercel.json` で `framework: "nextjs"` を明示する
3. Vercel ダッシュボードの「Output Directory」が `.next` になっていることを確認する

---

## デザインルール

| 項目 | ルール |
|------|--------|
| 色 | フラット単色のみ。グラデーション禁止。 |
| レイアウト | 3カラム等幅カードの連続使用禁止。非対称レイアウトを基本とする。 |
| 画像 | フェイク画像（「RK」などのプレースホルダー）禁止。実写または Unsplash を使用。 |
| フォント | Inter 禁止。Noto Sans JP を使用。 |

---

## 既知の課題・TODO

- [ ] About セクションの「RK」フェイク画像を実写に差し替え
- [ ] Instagram プロフィール文の改善
- [ ] 画像最適化（WebP/AVIF 化、レスポンシブ対応）

---

## 備考

- メディア活動ページ（`/media`）はブログ/雑記スタイルで構成。日付 + カテゴリーバッジ + 抜粋 + サムネイル。
- 既存の `REDESIGN_PROMPT.md` / `HANDOVER.md` は AI エージェント間の引き継ぎ用。手動編集は不要。
