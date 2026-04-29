"use client";

import { useState } from "react";

const skills = {
  strong: [
    "استراتيجية وتحول الذكاء الاصطناعي",
    "رؤية المنتج وخريطة الطريق",
    "التجريب السريع والاستكشاف",
    "ابتكار المنتجات المدعومة بالذكاء الاصطناعي",
    "مشاركة أصحاب المصلحة والشراكات",
    "بناء المشاريع والتحقق منها",
    "المحتوى العربي والسوق السعودي",
    "القيادة الفكرية والصوت العام",
  ],
  moderate: [
    "تسويق النمو",
    "تطوير الأعمال",
    "إدارة الفرق (أكثر من ٢٠ شخصاً)",
    "منتجات الجوال",
    "التنظيمي والامتثال",
  ],
  notFit: [
    "الهندسة التقنية البحتة",
    "علوم البيانات العميقة / ML",
    "تصميم تطبيقات B2C المستهلك",
    "التنفيذ المنفرد المبكر (فريق < ٣ أشخاص)",
    "الأدوار البيروقراطية المؤسسية",
  ],
};

const demoExamples = {
  strong: `رئيس منتجات أو مدير منتجات تنفيذي في شركة ناشئة مرحلة Series A–C في المملكة العربية السعودية أو منطقة الخليج. نحتاج شخصاً يمتلك استراتيجية المنتج، ويبني خارطة طريق الذكاء الاصطناعي، ويوحّد الفرق المتقاطعة حول رؤية واضحة. نتحرك بسرعة ونحتاج شخصاً مرتاحاً مع الغموض.`,
  weak: `مهندس برمجيات أول للانضمام إلى فريق الخلفية. ستمتلك بنية الخدمات المصغرة، وتكتب كود Go/Rust على مستوى الإنتاج، وتساهم في البنية التحتية. لا يوجد عمل على المنتجات أو الاستراتيجية.`,
};

export default function FitAssessment() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const assess = async (text: string) => {
    if (!text.trim()) return;
    setLoading(true);
    setResponse("");
    setError("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `قيّم مدى ملاءمة يمان لهذا الدور أو التحدي. كن صادقاً ومباشراً بشأن نقاط القوة والضعف:\n\n${text}`,
          mode: "fit",
        }),
      });

      if (!res.ok) throw new Error("فشل الطلب");

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      if (!reader) throw new Error("لا يوجد بيانات");

      let fullText = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") break;
            try {
              const parsed = JSON.parse(data);
              if (parsed.text) {
                fullText += parsed.text;
                setResponse(fullText);
              }
            } catch {
              // skip malformed chunks
            }
          }
        }
      }
    } catch {
      setError("الذكاء الاصطناعي غير متاح حالياً. تواصل عبر hello@yaman.io");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="fit" className="py-20 lg:py-28 border-t border-[#E5E5E5]" aria-labelledby="fit-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h2 id="fit-heading" className="font-serif-display font-black text-3xl sm:text-4xl mb-3">
            المهارات وتقييم الملاءمة
          </h2>
          <p className="text-[#666] text-base leading-relaxed">
            الصدق يوفر وقت الجميع. هذا ليس سيرة ذاتية — هذا دليل للعمل معاً.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {/* Strong */}
          <div className="border border-[#E5E5E5] rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-black shrink-0" />
              <h3 className="font-bold text-sm">ملاءمة قوية</h3>
            </div>
            <ul className="space-y-2.5">
              {skills.strong.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm leading-snug">
                  <span className="mt-1 text-xs">✓</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Moderate */}
          <div className="border border-[#E5E5E5] rounded-2xl p-5 bg-[#FAFAFA]">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#999] shrink-0" />
              <h3 className="font-bold text-sm text-[#555]">حسب السياق</h3>
            </div>
            <ul className="space-y-2.5">
              {skills.moderate.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm leading-snug text-[#555]">
                  <span className="mt-1 text-xs">~</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Fit */}
          <div className="border border-[#E5E5E5] rounded-2xl p-5 bg-[#F9F9F9]">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#CCC] shrink-0" />
              <h3 className="font-bold text-sm text-[#888]">ليس مجالي</h3>
            </div>
            <ul className="space-y-2.5">
              {skills.notFit.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm leading-snug text-[#888]">
                  <span className="mt-1 text-xs">✗</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Assessment Tool */}
        <div className="border border-[#E5E5E5] rounded-2xl p-6 lg:p-8">
          <h3 className="font-serif-display font-bold text-xl sm:text-2xl mb-2">
            تقييم الملاءمة التفاعلي
          </h3>
          <p className="text-[#666] text-sm mb-6 leading-relaxed">
            الصق وصف الوظيفة أو اشرح ما تحتاجه. احصل على قراءة صادقة حول مدى ملاءمتي — بما في ذلك عندما لا أكون المناسب.
          </p>

          {/* Demo buttons */}
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => setInput(demoExamples.strong)}
              className="text-xs font-medium border border-[#E5E5E5] rounded-full px-3 py-1.5 hover:bg-[#F5F5F5] transition-colors min-h-[44px]"
            >
              مثال ملاءمة قوية
            </button>
            <button
              onClick={() => setInput(demoExamples.weak)}
              className="text-xs font-medium border border-[#E5E5E5] rounded-full px-3 py-1.5 hover:bg-[#F5F5F5] transition-colors min-h-[44px]"
            >
              مثال ملاءمة ضعيفة
            </button>
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="الصق وصف الوظيفة أو اشرح التحدي الذي تواجهه..."
            rows={5}
            className="w-full border border-[#E5E5E5] rounded-xl p-4 text-sm resize-none focus:outline-none focus:border-black transition-colors leading-relaxed bg-white"
            dir="rtl"
            maxLength={1000}
            aria-label="وصف الوظيفة أو التحدي"
          />
          <div className="flex items-center justify-between mt-3 gap-4">
            <span className="text-xs text-[#999]">{input.length}/١٠٠٠</span>
            <button
              onClick={() => assess(input)}
              disabled={loading || !input.trim()}
              className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#222] disabled:opacity-40 disabled:cursor-not-allowed transition-colors min-h-[44px]"
            >
              {loading ? "جارٍ التحليل..." : "قيّم الملاءمة"}
            </button>
          </div>

          {/* Response */}
          {(response || loading || error) && (
            <div className="mt-6 border border-[#E5E5E5] rounded-xl p-5 bg-white">
              <p className="text-[10px] font-bold text-[#999] uppercase tracking-wider mb-3">
                ✦ تقييم الذكاء الاصطناعي
              </p>
              {error ? (
                <p className="text-sm text-[#666]">{error}</p>
              ) : (
                <div className="text-sm leading-[2] whitespace-pre-wrap">
                  {response}
                  {loading && <span className="cursor-blink inline-block w-0.5 h-4 bg-black ms-0.5 align-middle" />}
                </div>
              )}
            </div>
          )}

          {/* Tagline */}
          <div className="mt-6 pt-6 border-t border-[#E5E5E5] text-sm text-[#666] leading-relaxed">
            <p>هذا يرسل إشارة مختلفة تماماً عن "يرجى النظر في طلبي."</p>
            <p className="font-medium text-black mt-1">أنت تقيّمني. وقتي له قيمة أيضاً.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
