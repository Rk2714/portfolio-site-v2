import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <p className="text-sm text-white/60">金城竜弥 <span className="text-white/30">/</span> AI活用アドバイザー</p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link href="/" className="hover:text-white/60 transition-colors">トップ</Link>
            <Link href="/radio" className="hover:text-white/60 transition-colors">ラジオ</Link>
            <Link href="/media" className="hover:text-white/60 transition-colors">更新一覧</Link>
            <Link href="/#contact" className="hover:text-white/60 transition-colors">お問い合わせ</Link>
          </div>
        </div>
        <p className="text-xs text-white/30 text-center md:text-right">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
