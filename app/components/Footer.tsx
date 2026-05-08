export default function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="font-serif-display font-black text-xl mb-1">يمــان العرضــي</p>
            <p className="text-[#666] text-sm leading-relaxed max-w-xs">
              أساعد المؤسسين يختبروا السوق ويوصلوا للعملاء الأوائل
            </p>
          </div>

          {/* Links */}
          <nav aria-label="روابط التذييل">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
              <li>
                <a href="https://www.linkedin.com/in/yamaneur/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity min-h-[44px] inline-flex items-center">
                  لينكد إن
                </a>
              </li>
              <li>
                <a href="https://x.com/yamaneur" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity min-h-[44px] inline-flex items-center">
                  إكس
                </a>
              </li>
              <li>
                <a href="mailto:hello@yaman.io" className="hover:opacity-60 transition-opacity min-h-[44px] inline-flex items-center">
                  البريد الإلكتروني
                </a>
              </li>
              <li>
                <a href="https://yaman.io" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity min-h-[44px] inline-flex items-center">
                  المدونة
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-[#E5E5E5]">
          <p className="text-xs text-[#666] text-start">© 2026 يمان العرضي</p>
        </div>
      </div>
    </footer>
  );
}
