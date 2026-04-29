export default function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="font-serif-display font-black text-xl mb-1">يمان العردي</p>
            <p className="text-[#666] text-sm">قائد المنتجات وتحول الذكاء الاصطناعي</p>
          </div>

          {/* Links */}
          <nav aria-label="روابط التذييل">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
              <li>
                <a
                  href="https://linkedin.com/in/yamanalordi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity min-h-[44px] inline-flex items-center"
                >
                  لينكد إن
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@yaman.io"
                  className="hover:opacity-60 transition-opacity min-h-[44px] inline-flex items-center"
                >
                  البريد الإلكتروني
                </a>
              </li>
              <li>
                <a
                  href="https://yaman.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity min-h-[44px] inline-flex items-center"
                >
                  المدونة
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-[#666]">
          <p>هذه المحفظة تستخدم الذكاء الاصطناعي لتمثيلي — وليس لاستبدالي.</p>
          <p>© ٢٠٢٦ يمان العردي</p>
        </div>
      </div>
    </footer>
  );
}
