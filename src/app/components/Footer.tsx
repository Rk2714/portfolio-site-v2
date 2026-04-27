export default function Footer() {
  return (
    <footer className="bg-[#0F172A] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-white/40">KINJO RYUYA</p>
        <p className="text-xs text-white/30">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}