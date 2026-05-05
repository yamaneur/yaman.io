import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  ariaLabelledBy?: string;
  fullWidth?: boolean;
  noBorder?: boolean;
}

export default function Section({
  children,
  id,
  className = "",
  ariaLabelledBy,
  fullWidth = false,
  noBorder = false,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`py-20 sm:py-24 lg:py-32 ${!noBorder ? "border-t border-[#E5E5E5]" : ""} ${className}`}
    >
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 ${fullWidth ? "max-w-6xl" : "max-w-2xl"}`}>
        {children}
      </div>
    </section>
  );
}
