import { CircleX } from "lucide-react";
import type { FieldError } from "react-hook-form";

interface FormErrorProps {
  error: FieldError;
}

export default function FormError({ error }: FormErrorProps) {
  return (
    <div className="flex items-center gap-1 text-red-500 animate-pulse">
      <CircleX size={15} />
      <small>{error.message}</small>
    </div>
  );
}
