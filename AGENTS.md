<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## User-facing work instructions

- The site owner is not an engineer. When handing work back, explain later manual work as numbered steps.
- For every command, state what it does, where to run it, what success looks like, and what to do if it fails.
- Separate local preview, editing, verification, and production publishing. Never describe saving a file as publishing.
- Explain Git terms in plain Japanese. Before deletion, reset, commit, push, deployment, or other consequential actions, describe the scope and obtain confirmation when required.
- Keep `SITE_UPDATE_GUIDE.md` current when the local port, scripts, deployment route, or important content locations change.

## このサイトの更新ルール（ポートフォリオ = 金城竜弥の紹介 + ラジオアーカイブ）

### デプロイ（最重要）
- 公開 = `git push origin main` で済む（GitHub連携が自動デプロイ）。**`npx vercel --prod` は使わない**（この環境では Not authorized になる。2026-09-07実績）
- コミット前に必ず `git branch --show-current` で **main** にいることを確認。別ブランチに置いてしまった場合は `git checkout main && git merge --ff-only <branch>` で他コミットを混ぜずに戻す
- pushしても20〜60秒は旧版が残る。`https://portfolio-site-xi-eight-33.vercel.app` で 200 + 新コンテンツを確認して完了

### ラジオエピソード追加（いえろーかっし～ FM21）
1. ユーザーから3点セットを受け取る：YouTubeリンク・ゲストInstagram・ゲストHP
2. **名前は必ず実ソースで確認**（IGのページタイトル / bio / 番組内の発言）。推測で書かない。自動文字起こし（ASR）は固有名詞が乱れるので、漢字が読めない場合はユーザーに確認する
3. `src/lib/media-data.ts` の `mediaPosts[]` 末尾に追加。id は `{テーマ}-{YYYYMMDD}` 形式（例: `mostoro-fsc-20260827`）。最新回の category は `"guest"` / categoryLabel `"ゲスト"`
4. 文字起こし：`youtube-transcript-api` の `api.fetch(video_id, languages=['ja'])` で取得（ライブ配信アーカイブでも取れる）。雑音行（`[拍手]`等、3文字未満）はフィルタし、`[mm:ss] 内容` 形式で transcript フィールドへ
5. microCMS にも同じ id で PUT（title / category:["guest"] / date / excerpt / youtubeUrl）。**APIキーはリポジトリにコミットしない**（ユーザーか Hermes に確認）
6. `npx tsc --noEmit` → `npm run build` → push → 本番URLで確認

### コンテンツ規則（絶対）
- 「DX」という言葉は使わない。肩書きは「医療・介護現場の業務改善パートナー / Yazirusi 代表」。看護師経験は「約15年」（「約」必須）
- プロフィール写真は実写のみ（`public/images/headshot.png` を上書き）。AI生成写真はNG
- ゲスト名・リンクラベルは実ソースの正式表記に合わせる（一般名にしない。例: Salonキャラ / 陽だまりマルシェ）。必須でない限り個人のフルネームを出す（チーム名でOKと言われたら従う）
- 実績の数字は誇張しない。サイト上の声は匿名（「医療機関 院長」等）。「ST」は書かず「訪問看護ステーション」
- 削除・外部送信・公開は事前にユーザー承認

### 落とし穴
- `getAllMediaFromCMS()` のフォールバックは必ず `sortByDateDesc()` でラップ（しないと古い順になる）
- microCMSは POST の自動IDを使わず、media-data.ts の id と一致させた PUT で登録
- ファイル編集は短すぎる文字列で patch しない（前後3行のコンテキスト込みで）
- 「削ぎ落とす」と言われたら Works セクションのみ。Hero / Services / About / Contact は消さない
- `youtubeUrl` は `https://www.youtube.com/embed/{id}` 形式
- サブエージェント（Codex等）にこの作業を任せたら、結果を自分でビルドして確認する（自己申告を信じない）
