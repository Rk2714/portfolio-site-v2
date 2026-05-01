# 金城竜弥 ポートフォリオサイト

Next.js 16 + TypeScript + Tailwind CSS で構築した個人ポートフォリオサイト兼ラジオメディアサイト。

**公開URL**: [https://portfolio-site-xi-eight-33.vercel.app/](https://portfolio-site-xi-eight-33.vercel.app/)

---

## 目次

1. [セットアップ](#1-セットアップ)
2. [プロジェクト構造](#2-プロジェクト構造)
3. [データ管理ルール](#3-データ管理ルール)
4. [記事の追加手順](#4-記事の追加手順)
5. [トップページの編集](#5-トップページの編集)
6. [パーソナリティ（hosts）の管理](#6-パーソナリティhostsの管理)
7. [デプロイ](#7-デプロイ)
8. [デザインの設計意図](#8-デザインの設計意図)
9. [引き継ぎメモ](#9-引き継ぎメモ)
10. [トラブルシューティング](#10-トラブルシューティング)
11. [TODO](#11-todo)

---

## 1. セットアップ

```bash
# クローン
git clone https://github.com/Rk2714/portfolio-site-v2.git
cd portfolio-site-v2

# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build
```

## 2. プロジェクト構造

```
├── public/images/                  # 画像アセット（ヒーロー背景など）
├── src/
│   ├── app/
│   │   ├── page.tsx                # トップページ（コンポーネントを呼び出すだけ）
│   │   ├── layout.tsx              # ルートレイアウト
│   │   ├── globals.css             # Tailwind CSS
│   │   ├── media/
│   │   │   ├── page.tsx            # メディア記事一覧（カードデザイン）
│   │   │   └── [id]/page.tsx       # 記事詳細（YouTube・要約・文字起こし・ホスト表示）
│   │   ├── sections/               # トップページ用コンポーネント
│   │   │   ├── Hero.tsx
│   │   │   ├── Problem.tsx
│   │   │   ├── Services.tsx        # 2+1 非対称レイアウト
│   │   │   ├── Works.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── Contact.tsx         # フォームレス（カレンダー/メール/Instagram DM）
│   │   └── components/
│   │       ├── Navigation.tsx
│   │       ├── Footer.tsx
│   │       └── ShareButtons.tsx
│   └── lib/
│       ├── site-data.ts            # トップページの全静的データ
│       └── media-data.ts           # メディア記事の静的データ＋microCMS連携
```

## 3. データ管理ルール

| データ | 管理場所 | 理由 |
|--------|---------|------|
| トップページの全データ（プロフィール・実績・スキル・連絡先） | `src/lib/site-data.ts` | 変更頻度が低く、CMSのAPI上限を節約 |
| メディア記事の基本情報（日付・タイトル・要約・YouTubeリンク） | **microCMS**（mediaエンドポイント） | 記事追加時の柔軟性＋一覧SSG |
| メディア記事の詳細データ（文字起こし・名言・ゲスト紹介・ホスト） | `src/lib/media-data.ts` | microCMSのフィールド上限対策。CMSには無い詳細をコードで補完 |
| お問い合わせ投稿 | microCMS（inquiriesエンドポイント） | フォーム廃止済み（現在は未使用だがAPIは維持） |

### データの優先順位

`microCMS（primary） → media-data.ts（fallback）`

- 一覧表示: `getAllMediaFromCMS()` がmicroCMSから基本情報を取得し、不足フィールドを静的データで補完
- 個別表示: `getMediaByIdFromCMS(id)` がmicroCMSから個別取得し、静的データをマージ
- IDでマッチング（`mediaPosts.find(p => p.id === item.id)`）

## 4. 記事の追加手順

### A. 新しいラジオ記事を追加する

```bash
# 1. microCMS (media) に基本情報を登録
#    必須: title, date, youtubeUrl
#    任意: category（radio/guest/appear/note）, excerpt
#
# 2. src/lib/media-data.ts に静的データを追加
#    mediaPosts 配列の末尾に新しいオブジェクトを追加
```

```typescript
{
  id: "（microCMSのコンテンツIDと一致させる）",
  category: "guest",           // radio / guest / appear / note
  categoryLabel: "ゲスト",
  date: "2026-05-15",
  title: "番組名｜ゲスト名——キャッチコピー",
  excerpt: "要約文（一覧に表示）",
  youtubeUrl: "https://www.youtube.com/embed/XXXXX",
  thumbnail: "https://i.ytimg.com/vi/XXXXX/hqdefault.jpg",
  theme: "この回のテーマ（一言）",
  summary: [
    { time: "00:00", text: "オープニング" },
    // ... タイムスタンプ付き要約
  ],
  quotes: [
    "名言1",
    "名言2",
  ],
  transcript: `【前半】\n\n（書き起こし全文）\n\n【後半】\n\n（書き起こし）`,
  tags: ["FM21", "テーマ"],
  guests: [
    {
      name: "ゲスト名",
      role: "肩書き",
      bio: "紹介文",
      links: [
        { label: "Instagram", url: "https://..." },
      ],
    },
  ],
  hostIds: ["cassy", "kinjo"],  // パーソナリティ（site-data.tsのhostsから参照）
}
```

### B. 既存記事に文字起こしだけ追加する

media-data.ts の該当オブジェクトの `summary`, `quotes`, `transcript` を編集。
microCMS側は変更不要（microCMSのデータが優先され、不足フィールドだけ静的データで補完される）。

## 5. トップページの編集

### プロフィール・タグライン

`src/lib/site-data.ts` を編集：

```typescript
export const siteProfile = {
  name: "金城竜弥",
  title: "看護師 / DX・業務改善パートナー / ラジオパーソナリティ",
  bio: "（Aboutセクションに表示される自己紹介文）",
  heroTagline1: "「どうするとよくなるか」",
  heroTagline2: "で立ち止まったら、相談してほしい。",
  heroDescription: "（Heroの説明文）",
};
```

### Works（実績）

`site-data.ts` の `defaultWorks` 配列を編集。

### Skills

`site-data.ts` の `defaultSkills` 配列を編集。

## 6. パーソナリティ（hosts）の管理

`src/lib/site-data.ts` の `hosts` オブジェクトで一元管理：

```typescript
export const hosts: Record<string, Host> = {
  cassy: { name: "カッシー", role: "...", links: [...] },
  tecchan: { name: "てっちゃん", role: "...", links: [...] },
  kinjo: { name: "金城竜弥", role: "AIコンサルタント / Yazirusi 代表", links: [...] },
};
```

各記事の `hostIds` で参照するだけ：

```typescript
// FM21系: カッシー＋てっちゃん＋金城
hostIds: ["cassy", "tecchan", "kinjo"]

// 最近の2人体制
hostIds: ["cassy", "kinjo"]

// 別番組は金城のみ
hostIds: ["kinjo"]
```

## 7. デプロイ

### Vercel（本番）

```bash
# ビルド（.next/ → dist/ に自動コピー）
npm run build

# Vercelデプロイ
npx vercel --prod --yes
```

### 注意点

- Vercelは `dist/` を配信（`package.json` の build スクリプトで `.next/` → `dist/` を同期）
- microCMSのISRは `revalidate: 60`（60秒間キャッシュ→更新）
- ローカルの git が古いと Vercel に古いコードがデプロイされる → **必ず `git pull` してからデプロイ**

## 8. デザインの設計意図

### 配色

| 色 | 使用箇所 | 役割 |
|-----|---------|------|
| #0F172A | テキスト・ボタン・ヘッダー | ベースカラー（黒） |
| #475569 | 本文テキスト | 読みやすさ |
| #2563EB | リンク・ラジオカテゴリ | アクセント（青） |
| #059669 | ゲストカテゴリ | アクセント（緑） |
| #D97706 | 出演カテゴリ・強調 | アクセント（琥珀） |

### トンマナ

- **フラット単色**（グラデーション不使用）
- **角が直角**（丸みなし）
- **3カラム連続禁止**（非対称レイアウトがルール）
- フォントは **Noto Sans JP**（Interは使用禁止）
- **ポップなカードデザイン**（ホバーで浮く・カテゴリカラー）
- メディア一覧は **2カラムカードグリッド**
- Servicesは **2+1非対称レイアウト**

### メディア記事の構成順

```
YouTube埋め込み
タグ一覧
シェアボタン（URLコピー / X / LINE）
この回のテーマ（カテゴリカラーのアクセントボックス）
内容要約（タイムスタンプ付き）
ピックアップ（名言／濃色背景）
フル文字起こし（折りたたみ）
パーソナリティ紹介
ゲスト紹介（該当する場合）
CTA（取材依頼）
```

## 9. 引き継ぎメモ

### やったこと一覧

- [x] Next.js 16 + TypeScript + Tailwind CSS で新規構築
- [x] Vercel デプロイ（dist/ 問題解決）
- [x] microCMS エンドポイント統合（media + inquiries の2つのみ）
- [x] トップページの全データをコード内静的化（site-data.ts）
- [x] メディア記事6本のデータ投入（microCMS + media-data.ts）
- [x] 出演記事3本の文字起こし・名言・要約追加
- [x] MRT記事の文字起こし追加
- [x] パーソナリティ紹介機能（hosts）追加
- [x] 名前統一（金城竜弥に統一）
- [x] 日付降順ソート
- [x] Contactフォーム削除＋3チャネル整理
- [x] Heroタグライン刷新＋Aboutリライト
- [x] メディア一覧をカードデザインに（ポップ化）
- [x] microCMS APIキー（環境変数ではなくコード直書き→要リファクタリング推奨）

### 残タスク

- [ ] Aboutの「RK」プレースホルダー画像を実写に差し替え
- [ ] Problemセクションに具体的な数字データを反映
- [ ] Testimonialsの充実または削除の判断
- [ ] 第二夜（fxq_0k5c3hnb）の文字起こし追加
- [ ] APIキーを環境変数（.env.local）に移動（セキュリティ）
- [ ] 記事追加フローのスクリプト化（時間があれば）

### 注意点

- `Desktop/portfolio-site` は macOS のプライバシー制限でファイルアクセスがブロックされる場合がある
  → 解決策: `~/portfolio-site` など Desktop 以外の場所に移して作業する
- microCMS のコンテンツIDは自動生成。静的データ（media-data.ts）の `id` は microCMS の ID と手動で一致させる必要がある
- `media-data.ts` には APIキー（ydaf5pN5b4BqHJrtD67NXUa19qPUybJ9GWcX）が直書きされている。公開リポジトリのため、本番環境では環境変数に移すことを推奨

## 10. トラブルシューティング

| 症状 | 原因 | 対処 |
|------|------|------|
| デプロイ後に変更が反映されない | ローカルgitが古い | `git pull && npm run build && npx vercel --prod --yes` |
| Vercelが古いHTMLを返す | ISRキャッシュ | 60秒待つ、または `vercel --prod --yes` で再デプロイ |
| メディア記事の内容が古い記事のまま | microCMS → 静的データのID不一致 | media-data.ts のidとmicroCMSのコンテンツIDが一致しているか確認 |
| ファイルが読めない（Operation not permitted） | macOSプライバシー制限 | Desktopから出す: `mv ~/Desktop/portfolio-site ~/` |
| 文字起こしに誤字が多い | YouTube自動字幕由来 | `media-data.ts` の `transcript` を手動修正 |

## 11. TODO

- [ ] Aboutセクションの写真差し替え（RK→実写）
- [ ] Problemセクションに具体的な数字を反映
- [ ] Testimonialsの充実 or 削除
- [ ] 第二夜の文字起こし追加
- [ ] APIキーの環境変数化
- [ ] microCMSのAPIエンドポイントの整理（不要ならinquiries削除）
- [ ] Aboutタイムラインの内容・年次の確認（要ヒアリング）

### 実装済み（2026-05-01）

- [x] Heroタグライン刷新＋フローティング統計
- [x] Aboutにキャリアタイムライン追加（年次・イベント・説明）
- [x] Contactフォーム削除＋3チャネル（カレンダー/メール/Instagram DM）
- [x] メディア一覧カードデザイン化（ポップ）
- [x] トップページに最新ラジオ3件セクション追加
- [x] 矢印（↑）モチーフをNavigation・Footerに配置
- [x] 「矢印代表」→「Yazirusi 代表」修正
- [x] 名前統一（金城竜弥）
- [x] パーソナリティ紹介（hosts）機能
- [x] 全記事の文字起こし・名言・要約追加
