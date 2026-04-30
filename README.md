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
| Animation | Framer Motion |
| Deploy | Vercel |
| CMS（一部） | microCMS |

---

## ディレクトリ構成

```
├── public/images/              # 画像アセット
├── src/
│   ├── app/
│   │   ├── page.tsx            # トップページ（全データをコード内で管理）
│   │   ├── layout.tsx          # ルートレイアウト
│   │   ├── media/
│   │   │   ├── page.tsx        # メディア記事一覧（microCMS＋コード内fallback）
│   │   │   └── [id]/page.tsx   # メディア記事詳細（シェアボタン・ゲストSNSリンク対応）
│   │   ├── sections/           # トップページ用セクションコンポーネント
│   │   │   ├── Hero.tsx
│   │   │   ├── Problem.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Works.tsx
│   │   │   ├── Trust.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── Contact.tsx
│   │   └── components/
│   │       ├── Navigation.tsx
│   │       ├── Footer.tsx
│   │       └── ShareButtons.tsx  # SNSシェアボタン（クライアントコンポーネント）
│   └── lib/
│       ├── site-data.ts        # トップページの静的データ（プロフィール・実績・スキル）
│       └── media-data.ts       # メディア記事の静的データ＋microCMS連携関数
├── README.md
├── vercel.json
├── next.config.ts
└── package.json
```

---

## データ管理方針

| データ | 管理方法 | 理由 |
|-------|---------|------|
| プロフィール・実績・スキル・連絡先 | **コード内（site-data.ts）** | 変更頻度が低い。microCMSエンドポイント節約 |
| メディア記事（基本情報） | **microCMS（title/date/excerpt/youtubeUrl）** に加え、詳細はコード内fallback | ゲストの追加・修正が頻繁にあるため |
| 問い合わせフォーム | **microCMS inquiries エンドポイントへPOST** | メール通知に利用 |

**microCMS エンドポイント（合計2つ）:**
- `media` ─ メディア記事の基本情報
- `inquiries` ─ 問い合わせ受信

---

## メディア記事の追加フロー

1. YouTubeの文字起こしを入手
2. `src/lib/media-data.ts` の `mediaPosts` に記事データを追加（タイトル・要約・名言・文字起こし・ゲスト情報）
3. microCMS管理画面で同タイトルの記事を作成（title / category / date / excerpt / youtubeUrl を入力）
4. `git add && git commit && git push` → Vercelが自動ビルド
5. 記事が公開される（一覧＋詳細ページ）

**詳細ページで表示されるもの:**
- YouTube動画埋め込み
- タグ・カテゴリー
- シェアボタン（URLコピー / Xポスト / LINE送る）
- ホットトピック解説
- タイムスタンプ付き内容要約（クリックでYouTube該当時間にジャンプ）
- 名言ピックアップ
- フル文字起こし（折りたたみ）
- ゲスト紹介（SNSリンク・所属先リンク付き）

---

## ローカル開発

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開く。

---

## ビルド・デプロイ

### 手順（必ず順番通り）

```bash
# 1. ビルド
npm run build

# 2. コミット＆プッシュ（⚠️ VercelはGitHubのコードをビルドする）
git add -A
git commit -m "変更内容"
git push origin main

# 3. Vercel自動デプロイ or CLI
npx vercel --prod
```

### ⚠️ よくあるトラブル：変更が反映されない

**原因1: Gitにコミットしていない**
→ VercelはGitHubからビルドする。ローカル変更のみでは反映されない。

**原因2: `dist/` の同期漏れ（過去の経緯）**
→ `package.json` の build スクリプトで `.next/` を `dist/` にコピーしている：
```json
"build": "next build && rm -rf dist && cp -R .next dist"
```
`dist/` はGit管理外（`.gitignore` に追加済み）。Vercelダッシュボードの Output Directory が `.next` になっていることを確認。

**原因3: CDNキャッシュ**
→ シークレットウィンドウで確認するか、Vercelダッシュボードから「Purge Cache」を実行。

---

## デザインルール

| 項目 | ルール |
|------|--------|
| 色 | フラット単色のみ。グラデーション禁止。 |
| レイアウト | 3カラム等幅カードの連続使用禁止。非対称レイアウトを基本とする。 |
| 画像 | フェイク画像（「RK」などのプレースホルダー）禁止。実写または Unsplash を使用。 |
| フォント | Inter 禁止。Noto Sans JP を使用。 |

---

## 開発履歴（トラブルシューティング）

### Vercelデプロイ問題
- **症状**: `next build` 成功、GitHubにもpush済み、deployも成功しているのに、公開URLに古いコンテンツが表示される
- **原因**: Vercelプロジェクト設定に `dist/` が Output Directory として保存されていた。古い `dist/` が配信され続けていた
- **対処**: `package.json` の build スクリプトで `.next/` → `dist/` に上書きコピーするように修正
- **教訓**: Vercel設定はダッシュボードと `vercel.json` で二重管理。変更は必ず `git push` でトリガー。

### microCMS エンドポイント整理
- **経緯**: 当初4つのエンドポイント（works/profile/skills/contacts）を使っていたが、トップページの全データをコード内に移行
- **結果**: エンドポイントを6→2に削減（media + inquiries のみ）

### 画像未反映問題
- **症状**: ローカルで追加した画像がVercelで表示されない
- **原因**: 画像がGit管理されていなかった
- **対処**: `git add -f public/images/xxx.jpg` で強制追加、または `.gitignore` から除外

---

## 既知の課題・TODO

- [ ] About セクションの「RK」プレースホルダーを実写に差し替え
- [ ] 記事追加時の作業手順を簡略化（スクリプト化）

---

## 備考

- メディア記事詳細ページは `/media/[id]` でSSG。microCMSのデータをベースに、不足フィールドはコード内の静的データで補完。
- ゲストのSNSリンク・所属先リンクは `media-data.ts` の `guests.links` に追記するだけで自動表示。
- 質問・修正依頼は `ryuyakinjo@gmail.com` または Instagram DM。
