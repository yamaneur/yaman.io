export default function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="font-serif-display font-black text-xl mb-1">يمان العرضي</p>
            <p className="text-[#666] text-sm leading-relaxed max-w-xs">
              أساعد المؤسسين على اختبار أفكارهم بأقل جهد — وأفتح لهم الأبواب الصح
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
                  X
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

        <div className="mt-10 pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-[#666]">
          <p>هذا الموقع يستخدم الذكاء الاصطناعي للتواصل — وليس لاستبدال المحادثة الحقيقية.</p>
          <p>© 2026 يمان العرضي</p>
        </div>
      </div>
    </footer>
  );
}
