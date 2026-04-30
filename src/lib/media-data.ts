const API_KEY = "ydaf5pN5b4BqHJrtD67NXUa19qPUybJ9GWcX";
const SERVICE_ID = "yqj3ujq81j";

const categoryLabelMap: Record<string, string> = {
  radio: "ラジオ",
  guest: "ゲスト",
  note: "雑記",
};

function formatDate(dateStr: string): string {
  return dateStr.slice(0, 10);
}

export interface MediaPost {
  id: string;
  category: "radio" | "guest" | "note";
  categoryLabel: string;
  date: string;
  title: string;
  excerpt: string;
  youtubeUrl: string | null;
  thumbnail: string;
  theme: string;
  summary: { time: string; text: string }[];
  quotes: string[];
  transcript: string;
  tags: string[];
  guests?: {
    name: string;
    role: string;
    bio: string;
    image?: string;
    links?: { label: string; url: string }[];
  }[];
}

export const mediaPosts: MediaPost[] = [
  {
    id: "1",
    category: "radio",
    categoryLabel: "ラジオ",
    date: "2026-04-28",
    title:
      "イエローかっし～ FM21｜診療看護師・古内さん——医療現場の「摩擦」をなくす架け橋",
    excerpt:
      "県立中部病院の診療看護師・古内さんをゲストに迎え、診療看護師という職種のリアルについて本音トーク。医師と看護師の間に生じる「摩擦」をなくし、医療を止めないために存在するこの職種の役割や、沖縄県内での育成プログラムについて聞きました。",
    youtubeUrl: "https://www.youtube.com/embed/xhOa-5NTptk",
    thumbnail: "https://i.ytimg.com/vi/xhOa-5NTptk/hqdefault.jpg",
    theme:
      "診療看護師とは何か——医師と看護師の間の「摩擦」をなくし、医療を止めない架け橋となる存在",
    summary: [
      { time: "01:50", text: "オープニング・パーソナリティ自己紹介" },
      { time: "03:27", text: "新パーソナリティ（近城君）の就任発表" },
      { time: "04:58", text: "ゲスト紹介：診療看護師・古内さん" },
      { time: "06:24", text: "【テーマ】診療看護師とは何か？" },
      { time: "07:05", text: "医療現場の「摩擦」——看護師の報告では間に合わないケース" },
      { time: "08:08", text: "診療看護師の実際の業務：神経学的所見→CT/MRIオーダー→専門医への相談" },
      { time: "12:28", text: "古内さんのキャリア：手術室→救急→ICU→診療看護師へ" },
      { time: "18:31", text: "【深掘り】沖縄県の診療看護師育成と今後の展望" },
      { time: "21:12", text: "県立中部病院の研修プログラム——全国トップクラスの実地研修" },
      { time: "26:42", text: "お問い合わせ先：県立中部病院 看護部 098-973-4111" },
      { time: "27:11", text: "エンディング" },
    ],
    quotes: [
      "医療を止めない——必要な患者さんに必要な医療を提供していくのが目標です",
      "診療看護師は、医師と看護師の間に生じる摩擦をなくすために生まれた職種です",
      "脳梗塞は時間との勝負。後で見るね、ではなく、すぐに対応する",
      "沖縄県内でも診療看護師はまだまだ足りない。これから需要はさらに増えていきます",
    ],
    transcript: `4月28日（火）12:30 FM21「イエローかっし～」

【パーソナリティ】
- カッシー（インソール工房アイマスト / メインパーソナリティ）
- 近城（AIコンサルタント）
- ゲスト：古内さん（県立中部病院 診療看護師）

────────────────────

【オープニング】

カッシー：「4月28日火曜日、時刻は12時半になりました。これからの時間はイエローかっし～をお届けしていきます。この番組は沖縄の健康と運動スポーツについて、リハビリ専門家である理学療法士と元看護師のAIコンサルタントが交えてご紹介する情報番組です。今日のゲストは診療看護師の古内さんです。よろしくお願いします。」

【最近のめでたいこと】

近城：「最近のめでたいことは、子供が年長さんに上がって、学校に行きたがるようになったことです。今までは早く帰りたい、ゆっくり行きたいだったのが、年長さんになって先生が変わったのか、眠る前にも『早く学校行きたいから早く寝る』と言うようになって。5歳にしてすごい成長だなって嬉しかったです。」

古内さん：「最近めでたかったのは、先月、大望の3人目が生まれました。」

一同：「おめでとうございます！」

カッシー：「めっちゃめでたい！スーパーめでたいですね。3人目ですか。僕も子供3人なんですよ。3人でやってて大変でしたね。」

【診療看護師とは】

カッシー：「そもそも診療看護師とは何なのかってところが、僕は興味津々なので、簡単に説明してもらいたいです。」

古内さん：「診療看護師とは、ベースとして看護師経験を5年以上された方が、大学院・養成所に通い、2年間の研修を受けて資格を取得する流れになります。

患者さんのケアをメインに行うんですけれども、医師の治療と看護師のケアの間に摩擦が生じることが現場では結構ありまして、その摩擦をなくすために生まれたのがこの診療看護師です。

例えば、入院されてる方が新規で発熱しました、という時に、医師に対応していただきたいんですけれども、外科の先生であれば手術中であったり外来をしてる最中で、すぐには対応できない。そういった時に、患者さんをしっかりアセスメントして報告し、次の処置をタイムリーに行えるようにするのが診療看護師の役割です。」

【実際の業務内容】

カッシー：「現場では、そういった橋渡しをする場面は多いんですか？」

古内さん：「現場では多いです。例えば、集中治療の患者さんで、看護師が『なんかおかしいんですよね』と相談してきます。やはり同じ看護師として勤務してるので。

で、『どこがおかしいの？』って聞くと『なんか露骨が…』という時に、『これは優位に麻痺が出てきてるね』と判断して、CTやMRIをオーダーする。で、その結果を見て医師に再度報告して、『これは神経内科の先生にご相談しましょう』と、私が相談をする。

なので、医師はその現場にはいないんですけれども、一緒にアセスメントを共有し、次のアクションを相談して。医療を止めない、というところが私の強みであるかなと思っています。」

【医療現場のリアル】

カッシー：「もし古内さんがいなかったら、さっきの状況だと先生に来てもらわないといけないですよね。」

古内さん：「そうなんです。来てもらうまでに時間がかかる可能性があります。手術中で手が離せなかったり、外来の時はすぐ来ていただけるんですけれども、その分外来が後ろに残ってしまう。で、看護師も残る。無駄な残業時間が発生してしまう。

で、すぐ対応できなかった場合は、脳梗塞って時間との勝負ですので、『後で見るね』ではなく、『すぐに対応しましょう』と。一緒にアセスメントを共有させてください、と私の方が言って、代行で指示入力をさせていただいています。」

【キャリアパス】

カッシー：「古内さんは元々ICUとか救急外来でお勤めだったんですか？」

古内さん：「はい。ただ、もともと手術室オンリーで勤務してました。ずっと手術室で。中部病院でも救急とか経験するんですけど、手術室だけだと救急のことも分からないし、ICU集中治療も分からない。で、そういったところで医師の指導もありますけれども、やはり現場の看護師の助けをいただきながら、一つ一つ勉強させていただいた、というところです。

看護師の経験も活かしますけど、それプラスαを補うのは、現場で診療看護師という資格を取った後の活動で勉強しながら、というところですね。」

【沖縄県の診療看護師育成】

カッシー：「診療看護師になりたい人も募集してるってことでしたよね。」

古内さん：「沖縄県では、まだまだ診療看護師の人数自体は足りないので、医師の医療負担があって、医師の働き方改革が最近言われています。業務のタスクシフトだったりタスクシェアをしていこう、というところで、看護師にもその話が来ています。

そういった中でのキーマンとして診療看護師は必要がありますので、これからも沖縄県内では診療看護師人数は増えていくのかなと思います。中部病院としても人数をどんどん増やしていければなと思いますので、研修をさせて、沖縄県に定着するような診療看護師を根付かせていこう、という働きかけはあります。」

【研修プログラムのリアル】

カッシー：「中部病院の診療看護師育成プログラムとかあったりするんですか？」

古内さん：「県立中部病院っていう病院が、研修の育成にすごい有名なんです。全国でもトップクラス。それとほぼ同じような内容で、一緒に研修させていただいて、診療科をローテーションさせていただいて研修をさせていただくんですけど、おそらく県内で他にやってるところはないかなと思います。外科も内科も外来もさせていただくので、ほぼ医師と同じように勉強させていただいて、医師と同じような共通言語で。」

【どんな人が向いているか】

カッシー：「どんな看護師さんにおすすめとかありますか？」

古内さん：「基本的には救急の現場や集中治療が必要なんですけれども、大学院だと在宅の訪問看護師の方も来ていたりしたので、『こういう人が』というのはあんまりないんです。

しっかり自分のキャリアを考えられる人と、大学院は2年間勉強をしっかりしないといけないので、そういったところを頑張れるような人が、まあ最低条件というか。

今、慢性の病院にいるから私は向いてないんだ、ということは全然なくて、いろんな人ができればなっていう風には考えています。」

【問い合わせ先】

古内さん：「県立中部病院の看護部に連絡をいただければ。電話番号は098-973-4111です。興味があれば、実際どういう風に勤務してるのかを見ていただいた方が、イメージがついて検討しやすいのかなと思います。百聞は一見に如かず、ということで。」

カッシー：「じゃあ中部病院の番号をここでお伝えしておきましょう。098-973-4111。看護部の方に連絡繋いでもらえればいいですかね？」

古内さん：「大丈夫です。」

【エンディング】

カッシー：「今日は診療看護師の古内さんがゲストで来てくれました。ありがとうございました。」

古内さん：「ありがとうございました。」

一同：「せーの、イエローかっし～、バイバーイ」`,
    tags: [
      "FM21",
      "ラジオ",
      "診療看護師",
      "医療",
      "沖縄",
      "県立中部病院",
      "看護",
      "医療現場",
    ],
    guests: [
      {
        name: "古内さん",
        role: "診療看護師 / 県立中部病院",
        bio:
          "手術室で勤務後、救急・ICUを経て診療看護師の資格を取得。仙台の大学院で働きながら2年間研修を受け、現在は県立中部病院で診療看護師として活躍。同院の診療看護師育成プログラムにも携わり、沖縄県内の医療現場における診療看護師の定着に尽力している。先月、第3子が誕生。",
        links: [
          {
            label: "県立中部病院 看護部 098-973-4111",
            url: "tel:0989734111",
          },
        ],
      },
    ],
  },
];

export function getMediaPostById(id: string): MediaPost | undefined {
  return mediaPosts.find((post) => post.id === id);
}

export function getAllMediaPosts(): MediaPost[] {
  return mediaPosts;
}

// microCMS fetch
async function fetchFromMicroCMS(endpoint: string, fallback: any) {
  try {
    const res = await fetch(
      `https://${SERVICE_ID}.microcms.io/api/v1/${endpoint}?limit=100`,
      {
        headers: { "X-MICROCMS-API-KEY": API_KEY },
        next: { revalidate: 60 },
      }
    );
    if (!res.ok) return fallback;
    return await res.json();
  } catch {
    return fallback;
  }
}

export async function getAllMediaFromCMS(): Promise<MediaPost[]> {
  const data = await fetchFromMicroCMS("media", { contents: [] });
  if (!data.contents || data.contents.length === 0) return mediaPosts;

  return data.contents.map((item: any) => {
    const cat = Array.isArray(item.category) ? item.category[0] || "note" : "note";
    const staticPost = mediaPosts.find((p) => p.title === item.title);
    const fallback = staticPost || mediaPosts[0];
    return {
      id: item.id,
      category: cat as "radio" | "guest" | "note",
      categoryLabel: categoryLabelMap[cat] || "雑記",
      date: item.date ? formatDate(item.date) : fallback.date,
      title: item.title || fallback.title,
      excerpt: item.excerpt || fallback.excerpt,
      youtubeUrl: item.youtubeUrl || fallback.youtubeUrl,
      thumbnail: fallback.thumbnail,
      theme: fallback.theme,
      summary: fallback.summary,
      quotes: fallback.quotes,
      transcript: fallback.transcript,
      tags: fallback.tags,
      guests: fallback.guests,
    };
  });
}

export async function getMediaByIdFromCMS(id: string): Promise<MediaPost | undefined> {
  try {
    const res = await fetch(
      `https://${SERVICE_ID}.microcms.io/api/v1/media/${id}`,
      {
        headers: { "X-MICROCMS-API-KEY": API_KEY },
        next: { revalidate: 60 },
      }
    );
    if (!res.ok) return undefined;
    const item = await res.json();
    const cat = Array.isArray(item.category) ? item.category[0] || "note" : "note";
    const staticPost = mediaPosts.find((p) => p.title === item.title);

    return {
      id: item.id,
      category: cat as "radio" | "guest" | "note",
      categoryLabel: categoryLabelMap[cat] || "雑記",
      date: item.date ? formatDate(item.date) : staticPost?.date || "2026-04-28",
      title: item.title || staticPost?.title || "",
      excerpt: item.excerpt || staticPost?.excerpt || "",
      youtubeUrl: item.youtubeUrl || staticPost?.youtubeUrl || null,
      thumbnail: staticPost?.thumbnail || "https://i.ytimg.com/vi/xhOa-5NTptk/hqdefault.jpg",
      theme: staticPost?.theme || "",
      summary: staticPost?.summary || [],
      quotes: staticPost?.quotes || [],
      transcript: staticPost?.transcript || "",
      tags: staticPost?.tags || [],
      guests: staticPost?.guests,
    };
  } catch {
    return undefined;
  }
}
