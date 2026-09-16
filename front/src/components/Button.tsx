import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  const variants = {
    primary: "bg-slate-800 text-white hover:bg-slate-700",
    outline: "bg-transparent",
  };

  const customClass = `${className} ${variants[variant]}`;

  return (
    <button
      className={`${customClass} px-4 py-2.5 cursor-pointer rounded flex items-center justify-center gap-2 transition-colors`}
    >
      {children}
    </button>
  );
}
