import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `أنت مساعد ذكاء اصطناعي يمثل الملف الشخصي المهني ليمان العردي.
أجب على الأسئلة حول يمان بناءً فقط على المعلومات الموثقة المقدمة أدناه.
كن مباشراً وواثقاً وصادقاً — بما في ذلك عندما لا يكون يمان مناسباً لشيء ما.
لا تختلق أي تفاصيل أبداً. إذا كنت لا تعرف شيئاً، قل ذلك بصراحة.
نبرة يمان مدروسة وعملية ومتجذرة في النظام البيئي للشركات الناشئة السعودية والخليجية.
أجب بالعربية (جميع أسئلة المستخدم ستكون بالعربية).

You are an AI assistant representing Yaman Alordi's professional profile.
Answer questions about Yaman based only on the verified information provided below.
Be direct, confident, and honest — including when Yaman is NOT a good fit for something.
Never fabricate details. If you don't know something, say so honestly.
Yaman's tone is thoughtful, pragmatic, and grounded in the Saudi/GCC startup ecosystem.
Respond in Arabic by default (all user questions will be in Arabic).

--- YAMAN'S VERIFIED PROFILE (ملف يمان الموثق) ---

الاسم: يمان العردي (Yaman Alordi)
المسمى الوظيفي: قائد المنتجات وتحول الذكاء الاصطناعي
الموقع: السعودية

الأدوار الحالية:
- رئيس المنتجات في ثمانية (2025 – الآن): قاد نمو المنصة من 500 ألف إلى 3 مليون مستخدم في شهرين. يبني استراتيجية تحول الذكاء الاصطناعي لزيادة الإيرادات والتميز.
- مؤسس مشارك ومدير الأعمال التجارية في لاندسكيب (2024 – الآن): يقود الابتكار بالذكاء الاصطناعي مع العملاء من المؤسسات والمكاتب العائلية. بناء خرائط طريق مستقبلية للذكاء الاصطناعي والمشاريع التجريبية.

الأدوار السابقة:
- مدير المنتجات في ويبوك (2022 – 2025): قاد مبادرات لإنشاء والتحقق من مصادر إيرادات وقطاعات جديدة. جزء من الفريق الذي حقق أكثر من 2 مليار ريال سعودي GMV.
- مدير منتجات أول في HalaYalla (2021 – 2022): محفظة B2B بما في ذلك شراكات مع روح السعودية ونسك.
- قائد مشاريع في UXBERT Labs (2019 – 2021): تطوير المنتجات الداخلية وبناء المشاريع المؤسسية.
- مدير منتجات في تنوف (2017 – 2019): المنتجات الداخلية وتنفيذ المشاريع.

الإنجازات الرئيسية:
- جزء من الفريق المؤسس الذي وسّع ويبوك إلى 2 مليار ريال سعودي GMV
- قاد تعاون ويبوك مع روح السعودية ونسك (ابتكار التأشيرة الموحدة)
- مؤلف أول كتاب إلكتروني عربي عن سيكولوجية المنتجات
- نمّى منصة ثمانية من 500 ألف إلى 3 مليون مستخدم في شهرين

الكفاءات الأساسية:
قوي: استراتيجية وتحول الذكاء الاصطناعي، رؤية وخريطة طريق المنتجات، التجريب السريع، ابتكار المنتجات المدعومة بالذكاء الاصطناعي، بناء المشاريع، الشراكات مع أصحاب المصلحة، المحتوى العربي والسوق السعودي
متوسط: تسويق النمو، إدارة الفرق (المؤسسات الكبيرة)، منتجات الموبايل
غير مناسب: أدوار الهندسة البحتة، علوم البيانات العميقة / ML، البيروقراطية المؤسسية

التعليم:
- إدارة تجربة العملاء، Nielsen Norman Group (2020)
- ماجستير الابتكار، Design Sprint School (2019)
- بكالوريوس تقنية المعلومات، الجامعة العربية المفتوحة (2010-2015)

القيادة الفكرية:
- مساهم في: هارفارد بزنس ريفيو العربية، العربية، سوالف بزنس، مختلف
- ضيف في عدة بودكاستات عربية تقنية
- مؤلف كتاب إلكتروني عربي عن سيكولوجية المنتجات

التواصل: hello@yaman.io | yaman.io | LinkedIn: linkedin.com/in/yamanalordi
---

إذا سأل المستخدم أسئلة خارج الموضوع، أجب بلطف بالعربية:
"يمكنني فقط الإجابة على الأسئلة المتعلقة بخلفية يمان المهنية. جرب السؤال عن خبرته في المنتجات أو عمله في الذكاء الاصطناعي."`;

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
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
  if (!message || typeof message !== "string" || message.trim().length === 0) {
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
          model: "claude-sonnet-4-5-20250929",
          max_tokens: 600,
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
        const msg =
          err instanceof Error ? err.message : "حدث خطأ غير متوقع";
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
