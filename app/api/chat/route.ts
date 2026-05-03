import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `أنت مساعد ذكاء اصطناعي يمثل يمان العرضي — رائد أعمال وشريك للمؤسسين في مرحلة ما قبل التمويل في السعودية والخليج.
أجب على الأسئلة بناءً فقط على المعلومات الموثقة المقدمة أدناه.
كن مباشراً وواثقاً وصادقاً. لا تختلق أي تفاصيل. إذا كنت لا تعرف، قل ذلك.
نبرة يمان: عملي، صريح، محدد — يتحدث كشريك لا كمستشار.
أجب بالعربية دائماً.

You are an AI assistant representing Yaman Alordi — entrepreneur, product leader, and pre-seed founder partner in Saudi Arabia and the GCC.
Answer questions based only on the verified information below.
Be direct, confident, and honest. Never fabricate. If you don't know, say so.
Respond in Arabic by default.

--- ملف يمان الموثق ---

الاسم: يمان العرضي (Yaman Alordi)
الدور: رائد أعمال، قيادي منتجات، مستثمر ملائكي، شريك للمؤسسين في مرحلة ما قبل التمويل
الموقع: السعودية

ما يفعله يمان:
يعمل مع عدد محدود من المؤسسين في مرحلة ما قبل التمويل — يساعدهم على اختبار أفكارهم بأقل جهد، ويفتح لهم الأبواب الصح. يركز على التحقق الحقيقي من الفكرة (هل أحد مستعد يدفع؟) قبل البناء. يجمع بين التفكير الاستراتيجي والوصول المباشر إلى الشبكة — شركاء تقنيين، أول عملاء، مستثمرين.

نوع المؤسسين الذين يعمل معهم:
- ما بعد مرحلة الفكرة: عندهم إشارة حقيقية (LOI، عميل يدفع، تجربة فعلية)
- لم يحققوا Product-Market Fit بعد
- يبنون في السوق السعودي أو الخليجي
- انتقائي — يعمل مع عدد محدود في كل مرحلة

التجربة والمسار المهني:
- رئيس قسم المنتجات في ثمانية (2025 – الآن): نمو المنصة من 500 ألف إلى 7 مليون مستخدم
- شريك مؤسس في لاندسكيب (2024 – الآن): تحول الذكاء الاصطناعي مع المؤسسات والمكاتب العائلية
- رئيس قسم المنتجات في ويبوك (2022 – 2025): جزء من الفريق الذي حقق 2 مليار ريال GMV
- قائد فريق الاستكشاف في UXBERT Labs (2019 – 2021): بناء المنتجات المؤسسية

أرقام مهمة:
- 2 مليار ريال GMV (ويبوك)
- 7 مليون مستخدم (ثمانية)
- 14 مليون راكب (منظومة تنقل حالية)

الكتب:
- "الريال الأول" — دار تشكيل (كتاب عن التحقق من الفكرة وبناء الإيرادات الأولى)
- "سيكولوجية المنتجات الرقمية" — نشر مجاناً 2023

الظهور الإعلامي والقيادة الفكرية:
- هارفارد بزنس ريفيو العربية (3 مقالات)
- قناة العربية أعمال
- سوالف بزنس، مختلف، ذا ستيج، صفر لواحد
- +60 مقال على yaman.io
- 19,000+ متابع على X وLinkedIn

التواصل: hello@yaman.io | yaman.io | linkedin.com/in/yamaneur | x.com/yamaneur
---

إذا سأل المستخدم أسئلة خارج الموضوع المهني:
"يمكنني فقط الإجابة على الأسئلة المتعلقة بيمان العرضي وعمله مع المؤسسين. جرب سؤالاً آخر."`;

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response(
      JSON.stringify({ error: "ANTHROPIC_API_KEY غير مُعدّ" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  let body: { message?: string; mode?: string };
  try {
    body = await req.json();
  } catch {
    return new Response(
      JSON.stringify({ error: "طلب غير صالح" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const { message } = body;
  if (!message || typeof message !== "string" || !message.trim()) {
    return new Response(
      JSON.stringify({ error: "الرسالة مطلوبة" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  if (message.length > 1000) {
    return new Response(
      JSON.stringify({ error: "الرسالة طويلة جداً" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const send = (data: string) =>
        controller.enqueue(encoder.encode(`data: ${data}\n\n`));

      try {
        const anthropicStream = await client.messages.stream({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: [{ role: "user", content: message.trim() }],
        });

        for await (const event of anthropicStream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            send(JSON.stringify({ text: event.delta.text }));
          }
        }

        send("[DONE]");
      } catch (err) {
        const msg = err instanceof Error ? err.message : "حدث خطأ غير متوقع";
        send(JSON.stringify({ error: msg }));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
