import Link from "next/link";
import { siteContacts } from "../../lib/site-data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="home-shell site-footer__inner">
        <div>
          <strong>Yazirusi</strong>
          <p>金城竜弥 / RYUYA KINJO</p>
          <p>現場にも、一人ひとりにも。続けられる変化を。</p>
        </div>
        <nav aria-label="フッターナビゲーション">
          <Link href="/">ホーム</Link>
          <Link href="/pricing">料金・支援内容</Link>
          <Link href="/training">AI・PC研修（2名から）</Link>
          <Link href="/radio">ラジオ番組</Link>
          <Link href="/#contact">初めての方：無料相談</Link>
          <a href={siteContacts.lineOfficial} target="_blank" rel="noopener noreferrer">購入済みの方：LINEで日程を相談</a>
        </nav>
        <p className="site-footer__copyright">
          &copy; {new Date().getFullYear()} Ryuya Kinjo
        </p>
      </div>
    </footer>
  );
}
