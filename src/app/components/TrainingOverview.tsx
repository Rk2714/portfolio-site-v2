import Link from "next/link";
import { TRAINING_OFFERS } from "../../lib/training-data";
import "../training/training.css";

export default function TrainingOverview() {
  return <section id="training" className="training-preview home-shell" aria-labelledby="training-preview-title">
    <div>
      <p className="training-kicker">2名から / オンライン・訪問</p>
      <h2 id="training-preview-title">AIも、PCの基本も。<br />仕事に合わせて、一緒に学ぶ。</h2>
      <p>文章作成、資料やファイルの整理、いつものPC操作。<br />参加者の「ここを楽にしたい」から組み立てる少人数研修です。</p>
      <p className="training-small">ChatGPT・Gemini・Claudeなど。AIを使わないPC研修もご相談いただけます。</p>
      <Link className="training-text-link" href="/training">研修内容・料金を見る <span aria-hidden="true">→</span></Link>
    </div>
    <div className="training-preview__prices">
      <p className="training-kicker">スタート記念価格 / 1組・税込</p>
      {TRAINING_OFFERS.map(offer => <div key={offer.id}><span>{offer.name}・{offer.minutes}分</span><strong>{offer.price.toLocaleString("ja-JP")}<small>円</small></strong></div>)}
      <p className="training-small">2〜5名は同一料金。6名以上・クリエイティブ分野は個別見積。訪問交通費等は別途ご案内します。</p>
    </div>
  </section>;
}
