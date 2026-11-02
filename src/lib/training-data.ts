/** Public group-training terms. Separate from individual session contracts. */
export const TRAINING_OFFERS = [
  { id: "basics", name: "AI・PC基礎レクチャー", minutes: 90, price: 27500, description: "基本の使い方と仕事での活用例を、講義・実演・質疑を通して学びます。", outcome: "使ってみたい仕事と、次に試す手順を持ち帰る" },
  { id: "practice", name: "仕事の効率化・実践研修", minutes: 120, price: 44000, description: "参加者が実際に操作し、文章や資料の下書き作成、確認・修正まで体験します。", outcome: "自分で試した作例と、確認・修正の進め方を持ち帰る" },
] as const;

export const TRAINING_TOPICS = [
  { number: "01", title: "AIを仕事に使い始める", description: "AIの選び方、頼み方、回答の確かめ方を、普段の仕事の例で練習します。", examples: "ChatGPT・Gemini・Claudeなど" },
  { number: "02", title: "毎日のPC作業を楽にする", description: "コピー・貼り付け、画面の使い分け、ファイル整理など、繰り返す操作を見直します。", examples: "PC基本操作・ショートカット・ファイル管理" },
  { number: "03", title: "文章・資料・表を整える", description: "お知らせ、メール、会議メモ、表の整理などから、取り組みたい仕事を一つ選びます。", examples: "文章作成・要約・情報整理・表計算の基礎" },
] as const;

export const TRAINING_FAQ = [
  { question: "2名でも申し込めますか？", answer: "はい。2名から受け付け、5名まで同一料金です。表示は1人あたりではなく1組・1回の料金です。6名以上は人数と内容に応じてお見積りします。" },
  { question: "オンラインでも受けられますか？", answer: "はい。オンラインと訪問のどちらにも対応します。オンラインは全国からご相談いただけます。訪問場所・交通費は事前に確認し、お見積りに明記します。" },
  { question: "AIを使わないPC研修だけでも頼めますか？", answer: "はい。PC基本操作やファイル整理など、参加者が困っている作業から内容を組み立てます。機器の修理や個別の環境整備は、研修とは別にご相談ください。" },
  { question: "どのAIツールに対応していますか？", answer: "ChatGPT・Gemini・Claudeなどに対応します。現在お使いのツールや試したいツールをお知らせください。その他のツールも、希望する内容を確認してご案内します。" },
  { question: "画像・動画・デザインも相談できますか？", answer: "はい。クリエイティブ分野は、ご希望と難易度を確認し、対応範囲と追加料金を個別にご案内します。専用教材や高度な制作は基本料金に含みません。" },
  { question: "当日までに何を準備しますか？", answer: "参加人数、普段の業務、試したいことを事前打合せで伺います。実践研修ではPC・インターネット接続・使用ツールへのログインをご準備ください。必要な有料ツールがある場合は、契約前に費用と理由をご案内します。練習には架空情報や共有可能な資料を使います。" },
] as const;
