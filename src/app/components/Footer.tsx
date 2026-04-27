export default function Footer() {
  return (
    <footer className="bg-[#0A0A0F] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs tracking-[0.2em] uppercase text-white/30">
          Kinjo Ryuya
        </p>
        <p className="text-xs text-white/20">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
