import { ReactNode } from "react";

interface SectionHeaderProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export default function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  action,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 lg:mb-16 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
        <div className="space-y-3">
          {eyebrow && (
            <p className="text-xs font-bold text-[#999] uppercase tracking-wider">
              {eyebrow}
            </p>
          )}
          <h2 id={id} className="font-serif-display font-black text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight">
            {title}
          </h2>
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
      {description && (
        <p className="text-[#666] text-base leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}
