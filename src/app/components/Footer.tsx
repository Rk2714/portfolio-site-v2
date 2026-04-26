export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} 金城竜弥（Kinjo Ryuya）. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
