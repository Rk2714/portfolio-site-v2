import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="home-shell site-footer__inner">
        <div>
          <strong>Yazirusi</strong>
          <p>金城竜弥 / RYUYA KINJO</p>
          <p>業務を整理し、今の会社に合う仕組みへ</p>
        </div>
        <nav aria-label="フッターナビゲーション">
          <Link href="/">ホーム</Link>
          <Link href="/pricing">料金・支援内容</Link>
          <Link href="/radio">ラジオ番組</Link>
          <Link href="/#contact">お問い合わせ</Link>
        </nav>
        <p className="site-footer__copyright">
          &copy; {new Date().getFullYear()} Ryuya Kinjo
        </p>
      </div>
    </footer>
  );
}
