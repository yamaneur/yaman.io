"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", project: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Submits to Formspree or similar — replace action URL before launch
    try {
      await fetch("https://formspree.io/f/hello@yaman.io", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: "رسالة جديدة من yaman.io" }),
      });
    } catch {
      // fail silently — still show success to user
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-t border-[#E5E5E5]" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 id="contact-heading" className="font-serif-display font-black text-3xl sm:text-4xl mb-4">
            تحدث معي
          </h2>
          <p className="text-[#666] text-base leading-relaxed mb-10">
            إذا كنت مؤسساً تعمل على اختبار فكرتك وتحتاج شريكاً — تحدث معي.
          </p>

          {submitted ? (
            <div className="border border-[#E5E5E5] rounded-2xl p-8 text-center">
              <p className="font-serif-display font-bold text-xl mb-2">وصلت رسالتك ✦</p>
              <p className="text-[#666] text-sm">سأقرأها وأرد قريباً.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" dir="rtl" noValidate>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                  الاسم
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-[#E5E5E5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors min-h-[44px]"
                  placeholder="اسمك"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                  البريد الإلكتروني
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-[#E5E5E5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors min-h-[44px]"
                  placeholder="بريدك الإلكتروني"
                />
              </div>

              {/* Project */}
              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-1.5">
                  أخبرني عن مشروعك
                </label>
                <textarea
                  id="project"
                  name="project"
                  required
                  rows={4}
                  value={form.project}
                  onChange={handleChange}
                  className="w-full border border-[#E5E5E5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-none leading-relaxed"
                  placeholder="ما الفكرة؟ أين أنت الآن؟ ماذا تحتاج؟"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 bg-black text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-[#222] disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-h-[44px]"
              >
                {loading ? (
                  <><span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" /><span>جارٍ الإرسال...</span></>
                ) : (
                  <><span>أرسل</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-180" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
