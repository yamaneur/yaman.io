"use client";

import Section from "./Section";

export default function Problem() {
  return (
    <Section id="problem" fullWidth noBorder ariaLabelledBy="problem-label">
      <div className="max-w-2xl space-y-8 text-lg sm:text-xl text-[#222] leading-[1.9]">
        <p id="problem-label" className="sr-only">المشكلة التي أحلها</p>
        <p>
          معظم المؤسسين يضيعون سنتهم الأولى في بناء منتج لا أحد يدفع مقابله.
        </p>
        <p>
          مش لأنهم مش أذكياء — لأنهم يختبرون الشيء الغلط، بالطريقة الغلطة.
        </p>
        <p className="font-medium">
          الفرق بين من ينجح ومن يتعب: من يثبت أن أحداً مستعداً يدفع — قبل أن يبني أي شيء.
        </p>
      </div>
    </Section>
  );
}
