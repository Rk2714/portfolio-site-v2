# 金城竜弥 ポートフォリオサイト

Next.js 16 + TypeScript + Tailwind CSS で構築した個人ポートフォリオサイト兼ラジオメディアサイト。

**公開URL**: https://portfolio-site-xi-eight-33.vercel.app/

---

## 目次

1. [セットアップ方法](#1-セットアップ方法)
2. [プロジェクト構造](#2-プロジェクト構造)
3. [データ管理ルール](#3-データ管理ルール)
4. [記事（ラジオ）の追加・編集](#4-記事ラジオの追加編集)
5. [トップページの編集](#5-トップページの編集)
6. [パーソナリティ（hosts）の管理](#6-パーソナリティhostsの管理)
7. [配色・デザイン変更](#7-配色デザイン変更)
8. [デプロイ手順](#8-デプロイ手順)
9. [よくある作業フロー](#9-よくある作業フロー)
10. [Instagram・SNSとの連携について](#10-instagramsnsとの連携について)
11. [トラブルシューティング](#11-トラブルシューティング)
12. [引き継ぎメモ](#12-引き継ぎメモ)
13. [TODO](#13-todo)

---

## 1. セットアップ方法

```bash
# クローン
git clone https://github.com/Rk2714/portfolio-site-v2.git
cd portfolio-site-v2

# 依存関係インストール
npm install

# 開発サーバー起動（http://localhost:3000）
npm run dev

# ビルド（本番用）
npm run build
```

### 必要なもの
- Node.js 18以上
- npm（Node.jsに同梱）
- Git
- Vercelアカウント（デプロイ担当者のみ）
- microCMSアカウント（記事管理担当者のみ）

---

## 2. プロジェクト構造

```
portfolio-site-v2/
├── public/
│   ├── images/                  # 画像ファイル（Hero背景など）
│   └── profile-text.md          # 金城竜弥プロフィール文（業者提出用）
├── src/
│   ├── app/
│   │   ├── page.tsx             # トップページ（セクションを呼び出すだけ）
│   │   ├── layout.tsx           # ルートレイアウト（ヘッダー・フッター）
│   │   ├── globals.css          # Tailwind + カスタムCSS
│   │   ├── media/
│   │   │   ├── page.tsx         # メディア記事一覧（カードグリッド）
│   │   │   └── [id]/page.tsx    # 記事詳細ページ
│   │   ├── sections/            # トップページ用パーツ
│   │   │   ├── Hero.tsx
│   │   │   ├── Problem.tsx
│   │   │   ├── Services.tsx     # 2+1 非対称レイアウト
│   │   │   ├── Works.tsx
│   │   │   ├── LatestMedia.tsx  # 最新ラジオ3件
│   │   │   ├── About.tsx        # 写真＋プロフィール＋キャリアタイムライン
│   │   │   ├── Skills.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── Contact.tsx      # カレンダー予約＋連絡先3チャネル
│   │   └── components/
│   │       ├── Navigation.tsx
│   │       ├── Footer.tsx
│   │       └── ShareButtons.tsx
│   └── lib/
│       ├── site-data.ts         # ★ 全トップページデータ（要編集）
│       └── media-data.ts        # ★ メディア記事データ（要編集）
├── package.json                 # build = next build + dist同期
└── README.md
```

---

## 3. データ管理ルール

### 3.1 データの所在

| データ内容 | 管理場所 | 編集方法 |
|-----------|---------|---------|
| プロフィール・実績・スキル・連絡先 | `src/lib/site-data.ts` | ファイル直接編集 |
| メディア記事の基本情報（日付・タイトル・要約・YouTube） | **microCMS**（media） | CMS管理画面から編集 |
| メディア記事の詳細（文字起こし・名言・ゲスト紹介・パーソナリティ） | `src/lib/media-data.ts` | ファイル直接編集 |
| パーソナリティ情報（カッシー・きんちゃん etc） | `src/lib/site-data.ts`（hosts） | ファイル直接編集 |

### 3.2 データの優先順位

```
microCMS（優先） → media-data.ts（フォールバック）
```

- 一覧表示: `getAllMediaFromCMS()` がCMSから基本情報を取得し、不足フィールドを静的データで補完
- 個別表示: `getMediaByIdFromCMS(id)` がCMSから取得し、静的データをマージ
- IDでマッチング（`media-data.ts` のID = microCMSのコンテンツID）

### 3.3 microCMSのAPIキーについて

⚠️ **現在コード内に直書きされています。**
公開リポジトリのため、本番運用前に `.env.local` に移すことを推奨。

```bash
# .env.local
MICROCMS_API_KEY=ydaf5pN5b4BqHJrtD67NXUa19qPUybJ9GWcX
MICROCMS_SERVICE_ID=yqj3ujq81j
```

---

## 4. 記事（ラジオ）の追加・編集

### 4.1 新しいゲスト記事を追加する（完全版）

**Step 1: microCMSに基本情報を登録**

microCMS管理画面 → mediaエンドポイント → 新規作成

| フィールド | 内容 | 必須 |
|-----------|------|------|
| title | 記事タイトル（例：イエローかっし～ FM21｜○○さん——キャッチコピー） | ⚠️ |
| category | radio / guest / appear / note から選択 | ⚠️ |
| date | 公開日 | ⚠️ |
| excerpt | 一覧に表示する要約文 | |
| youtubeUrl | YouTube埋め込みURL（例：https://www.youtube.com/embed/XXXXX） | |

※ category を空にすると「出演（appear）」として扱われます。

**Step 2: media-data.ts に静的データを追加**

`src/lib/media-data.ts` の `mediaPosts` 配列の最後に追加。

```typescript
{
  id: "（microCMSのコンテンツIDを入力）",
  category: "guest",
  categoryLabel: "ゲスト",
  date: "2026-06-01",
  title: "イエローかっし～ FM21｜○○さん——キャッチコピー",
  excerpt: "一覧に表示する要約文。ラジオの内容を簡潔に。",
  youtubeUrl: "https://www.youtube.com/embed/XXXXX",
  thumbnail: "https://i.ytimg.com/vi/XXXXX/hqdefault.jpg",
  theme: "この回のテーマ。ラジオの核心を一言で。",
  summary: [
    { time: "00:30", text: "オープニング・自己紹介" },
    { time: "05:00", text: "ゲスト紹介・経歴" },
    // ... 好きなだけ追加
  ],
  quotes: [
    "印象的な名言1",
    "印象的な名言2",
    "3〜5個がベスト",
  ],
  transcript: `【前半】\n\n（文字起こし全文）\n\n【後半】\n\n（文字起こし）`,
  tags: ["FM21", "キーワード1", "キーワード2"],
  guests: [
    {
      name: "ゲスト名",
      role: "肩書き / 所属",
      bio: "ゲストの紹介文（改行で段落分け可）",
      links: [
        { label: "Instagram", url: "https://www.instagram.com/..." },
        { label: "Webサイト", url: "https://..." },
      ],
    },
  ],
  hostIds: ["cassy", "kinchan"],
  //   └─ パーソナリティの指定方法:
  //      ["cassy"]           → カッシーのみ
  //      ["cassy", "kinchan"] → カッシー + きんちゃん
  //      ["kinchan"]         → きんちゃんのみ（別番組など）
  //      ["cassy", "tecchan", "kinjo"] → 旧体制（てっちゃん在籍時）
},
```

### 4.2 既存記事に文字起こしだけ追加する

`src/lib/media-data.ts` の該当オブジェクトを探して編集：

```typescript
// 空欄を埋める
summary: [
  { time: "00:00", text: "オープニング" },
  { time: "10:00", text: "本題" },
],
quotes: [
  "名言1",
  "名言2",
],
transcript: `（書き起こし全文）`,
```

microCMS側の変更は不要。（CMSデータが優先され、不足フィールドだけ静的データで補完される）

### 4.3 文字起こしの自動生成（YouTube自動字幕）

```bash
# PythonでYouTubeから自動字幕を取得
python3 << 'EOF'
from youtube_transcript_api import YouTubeTranscriptApi
ytt_api = YouTubeTranscriptApi()
transcript = ytt_api.fetch("YOUR_VIDEO_ID", languages=['ja'])
snippets = list(transcript)
# summary用のタイムスタンプとテキストを生成
for s in snippets:
    print(f"[{int(s.start//60):02d}:{int(s.start%60):02d}] {s.text}")
EOF
```

⚠️ 自動字幕には誤認識が多い。公開前に手動で確認・修正すること。

### 4.4 出演記事（自分がゲスト出演）の場合

```typescript
{
  id: "microCMSのID",
  category: "appear",        // ← 出演カテゴリ
  categoryLabel: "出演",
  hostIds: ["kinchan"],      // 自分のみ
  guests: [],                // ゲストなし（自分が出演側なので）
  // summary, quotes, transcript は通常通り追加可能
}
```

### 4.5 カテゴリの意味

| カテゴリ | 意味 | 使用例 |
|---------|------|--------|
| `radio` | 自分の番組（パーソナリティとして） | イエローかっし～通常回 |
| `guest` | ゲストを迎えた回 | ゲスト対談 |
| `appear` | 自分が他の番組に出演 | ラジオ出演・取材 |
| `note` | 雑記・コラム | （現在未使用） |

---

## 5. トップページの編集

### 5.1 プロフィール・タグライン

`src/lib/site-data.ts` の `siteProfile` を編集：

```typescript
export const siteProfile = {
  name: "金城竜弥",
  title: "看護師 / DX・業務改善パートナー / ラジオパーソナリティ",
  bio: "（Aboutに表示される自己紹介文）",
  location: "沖縄県中城村（活動拠点：沖縄全域）",
  heroTagline1: "「どうするとよくなるか」",
  heroTagline2: "で立ち止まったら、相談してほしい。",
  heroDescription: "（Heroの説明文）",
};
```

### 5.2 実績（Works）

`defaultWorks` 配列を編集。非公開案件は description に「非公開」と記載。

### 5.3 スキル（Skills）

`defaultSkills` 配列を編集。カテゴリ分けは「医療・ヘルスケア」「DX・システム構築」「AI・人材育成」の3軸。

### 5.4 キャリアタイムライン

`careerTimeline` 配列を編集：

```typescript
export const careerTimeline: TimelineItem[] = [
  {
    year: "〜2012",
    title: "見出し",
    subtitle: "説明文",
  },
  // ... 必要に応じて追加・削除
];
```

### 5.5 写真の差し替え

Aboutセクションの写真は `public/images/` に配置後、`site-data.ts` の `imageUrl` を設定。
Heroの背景写真は `public/images/okinawa-sea.jpg`。

---

## 6. パーソナリティ（hosts）の管理

### 6.1 パーソナリティ情報の一元管理

`src/lib/site-data.ts` の `hosts` オブジェクトで管理。

```typescript
export const hosts: Record<string, Host> = {
  cassy: {
    name: "カッシー",
    role: "イエローかっし～ メインパーソナリティ / インソール工房アイマスト",
    links: [{ label: "Instagram", url: "https://www.instagram.com/imust.insole/" }],
  },
  tecchan: {
    name: "てっちゃん",
    role: "イエローかっし～ 元パーソナリティ",
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
```

### 6.2 各記事との紐付け

各記事の `hostIds` で指定するだけ：

```typescript
// 現在の体制（2026年3月14日〜）
hostIds: ["cassy", "kinchan"]

// 旧体制（てっちゃん在籍時）
hostIds: ["cassy", "tecchan", "kinjo"]

// 別番組は自分のみ
hostIds: ["kinchan"]
```

### 6.3 現在のパーソナリティ編成一覧

| 日付 | 記事 | パーソナリティ |
|------|------|--------------|
| 2026-05-14 | 池田弥生さん | カッシー + きんちゃん |
| 2026-04-28 | 古内さん | カッシー + きんちゃん |
| 2026-04-14 | 島袋さん | カッシー + きんちゃん |
| 2026-03-10 | 新垣さん | カッシー + 金城 |
| 2026-02-24 | 第二夜 | カッシー + 金城 |
| 2026-01-13 | ゲスト出演 | カッシー + てっちゃん + 金城 |
| 2025-09-02 | MRT | 金城のみ |

---

## 7. 配色・デザイン変更

### 7.1 現在の配色

| 色 | 使用箇所 | コード |
|-----|---------|--------|
| ベース背景（セクション） | 温かみのある白 | `#FFFCF9` |
| セクション背景2 | 温かみのあるベージュ | `#FFF8F0` |
| プレースホルダー背景 | 薄い琥珀 | `#FFF5EB` |
| テキスト（黒） | 見出し・本文 | `#0F172A` |
| 本文（グレー） | 説明文 | `#475569` |
| アクセント（琥珀） | カテゴリバッジ・タイムライン | `#D97706` |
| アクセント（青） | リンク・ラジオカテゴリ | `#2563EB` |
| アクセント（緑） | ゲストカテゴリ | `#059669` |

### 7.2 色を変えたい場合

各コンポーネントの Tailwind クラスを直接編集。セクション背景は以下のファイルに分散：

- `src/app/media/page.tsx` — メディア一覧
- `src/app/media/[id]/page.tsx` — 記事詳細
- `src/app/sections/*.tsx` — トップページ各セクション

検索置換の例：
```bash
# セクション背景を変更
sed -i '' 's/bg-\[#FFF8F0\]/bg-[#希望のカラーコード]/g' src/app/sections/*.tsx
```

---

## 8. デプロイ手順

### 8.1 本番デプロイ

```bash
# 最新コードを取得
cd ~/Desktop/portfolio-site
git pull

# ビルド
npm run build

# Vercelデプロイ
npx vercel --prod --yes
```

### 8.2 更新の流れ（通常）

1. コードを編集（media-data.ts や site-data.ts）
2. `npm run build` でエラーがないか確認
3. 編集したファイルを git add / git commit
4. `git push origin main`（GitHubにプッシュ）
5. Vercelが自動デプロイ（または手動で `npx vercel --prod --yes`）

### 8.3 注意事項

- **ローカルのgitが古いと古いコードがデプロイされる** → 必ず `git pull` してから
- VercelのISRは60秒キャッシュ → 変更反映まで最大60秒かかる
- DesktopフォルダはmacOSのプライバシー制限でアクセス不可になる場合がある
  → 対策: `mv ~/Desktop/portfolio-site ~/` でDesktop外に移動

---

## 9. よくある作業フロー

### 9.1 新しいラジオ収録→記事化

```
1. ラジオ収録（YouTubeにアップ）
2. microCMSに基本情報を登録（タイトル・日付・YouTube URL）
3. YouTubeの自動字幕を取得（Pythonスクリプト使用）
4. 文字起こしを手動修正（誤字訂正）
5. 名言・タイムスタンプ要約を作成
6. media-data.ts に静的データを追加
7. ゲストのSNSリンクを確認
8. 必要に応じてhostIdsを設定
9. npm run build → git push → Vercelデプロイ
```

### 9.2 プロフィール更新

1. site-data.ts の該当項目を編集
2. 特にbio・heroTagline・heroDescriptionは頻繁に見直すと良い
3. public/profile-text.md も合わせて更新（業者提出用）

### 9.3 デザインの微調整

各セクションの `.tsx` ファイルを直接編集。`Tailwind CSS` のクラス指定でスタイルが決まる。
- 余白: `py-20`（上下 pdding）`px-4 sm:px-6`（左右 padding）
- フォント: `Noto Sans JP` 固定（Interは使用禁止）
- グリッド: `grid md:grid-cols-2` で2カラム（3カラム禁止）
- 角: 角丸なし（ボーダーは直角）

---

## 10. Instagram・SNSとの連携について

### 現在できること

| 機能 | 対応 |
|------|------|
| 記事内にInstagramリンクを表示 | ✅ ゲスト紹介・パーソナリティ紹介に設定済み |
| SNSシェアボタン（X / LINE / URLコピー） | ✅ 各記事ページ下部に実装済み |
| Instagramの投稿をサイトに埋め込む | ❌ 現在未対応（対応可能） |
| Instagramのフィードをトップに表示 | ❌ 現在未対応（対応可能） |

### Instagram埋め込みを追加する場合

各記事ページに Instagram の埋め込みコードを追加可能。
以下の2パターン：

**A. 特定の投稿を埋め込む**
```tsx
// 該当する記事ページの JSX に追加
<blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/XXXXX/">
</blockquote>
<script async src="//www.instagram.com/embed.js"></script>
```

**B. トップページに最新フィードを表示**
→ `src/app/sections/LatestMedia.tsx` と同様のコンポーネントを作成。
Instagram Graph API または埋め込みウィジェットを使用。

---

## 11. トラブルシューティング

| 症状 | 原因 | 対処 |
|------|------|------|
| デプロイ後に変更が反映されない | ローカルgitが古い | `git pull` → 再ビルド → 再デプロイ |
| Vercelが古いHTMLを返す | ISRキャッシュ | 60秒待つ、または再デプロイ |
| メディア記事の内容が古い記事のまま | ID不一致 | media-data.tsのIDとmicroCMSのIDが一致しているか確認 |
| 「Operation not permitted」 | macOSプライバシー制限 | Desktopから出す: `mv ~/Desktop/portfolio-site ~/` |
| 文字起こしに誤字が多い | YouTube自動字幕由来 | `media-data.ts` の `transcript` を手動修正 |
| 新しい記事が「雑記」と表示される | categoryが空 | microCMSでcategoryを設定、または空ならappear扱い |
| 記事一覧の順番がおかしい | ソート不正 | `sortByDateDesc` 関数が正しく動作しているか確認 |

---

## 12. 引き継ぎメモ

### 作業履歴（2026年5月1日時点）

- [x] Next.js 16 + TypeScript + Tailwind CSS で構築
- [x] Vercelデプロイ（dist/問題解決済み）
- [x] microCMSエンドポイント統合（media + inquiries）
- [x] 全トップページデータをコード内静的化（site-data.ts）
- [x] メディア記事7本のデータ投入（microCMS + media-data.ts）
- [x] 文字起こし・名言・要約の追加（全記事対応済み）
- [x] パーソナリティ紹介機能（hosts）追加
- [x] 名前統一（金城竜弥）
- [x] 記事一覧カードデザイン化
- [x] 配色を温かみ系に変更（#FFF8F0 / #FFF5EB）
- [x] Aboutキャリアタイムライン追加
- [x] Heroフローティング統計 / 矢印モチーフ
- [x] Contactフォーム削除（3チャネル整理）
- [x] 最新ラジオ3件をトップページに表示

### 注意点・ナレッジ

- `Desktop/portfolio-site` は macOS のプライバシー制限でアクセス不可になることがある
  → 作業前に `mv ~/Desktop/portfolio-site ~/portfolio-site` して回避するのが確実
- microCMSのコンテンツIDは自動生成。静的データの `id` と手動で一致させる必要がある
- `media-data.ts` にAPIキーが直書きされている。公開リポジトリのため.env.local化を推奨
- YouTube自動字幕の精度は70〜80%。公開前に人手での確認・修正が必要
- 新しい別のチャットで作業を継続する場合、このREADMEを最初に読めば全て把握できる

---

## 13. TODO

### 優先度高
- [ ] Aboutの「RK」プレースホルダー画像を実写に差し替え
- [ ] APIキーを環境変数（.env.local）に移動
- [ ] 第二夜（fxq_0k5c3hnb）の文字起こし追加
- [ ] 池田弥生さんの記事に `hostIds` の反映確認

### 優先度中
- [ ] Problemセクションに具体的な数字データを反映
- [ ] Testimonialsの充実 or 削除の判断
- [ ] Instagramフィード埋め込みの検討

### 優先度低
- [ ] 記事追加フローのスクリプト化
- [ ] ダークモード対応
- [ ] パフォーマンス最適化（画像のWebP変換など）
