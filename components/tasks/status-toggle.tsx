"use client";

import { useLanguage } from "@/components/common/language-provider";
import { cn } from "@/lib/utils";

interface StatusToggleProps {
  status: "ongoing" | "done";
  onChange: (status: "ongoing" | "done") => void;
  className?: string;
}

export function StatusToggle({ status, onChange, className }: StatusToggleProps) {
  const { t } = useLanguage();
  const isDone = status === "done";
  

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDone}
      onClick={() => onChange(isDone ? "ongoing" : "done")}
      className={cn(
        "relative inline-flex h-12 w-full sm:h-10 sm:w-36 p-1 shrink-0 cursor-pointer items-center rounded-full overflow-hidden transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        isDone ? "bg-emerald-600" : "bg-destructive",
        className
      )}
    >
      <span className="sr-only">Toggle status</span>
      
      {/* Text "Done" (Muncul dari kiri) */}
      <span 
        className={cn(
          "absolute inset-0 flex items-center justify-center pr-6 text-xs font-semibold text-white transition-transform duration-300 ease-in-out",
          isDone ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {t("done")}
      </span>

      {/* Text "Undone" (Hilang ke kanan) */}
      <span 
        className={cn(
          "absolute inset-0 flex items-center justify-center pl-6 text-xs font-semibold text-white transition-transform duration-300 ease-in-out",
          isDone ? "translate-x-full" : "translate-x-0"
        )}
      >
        {t("undone") || "Undone"}
      </span>

      {/* Thumb */}
      <span
        className={cn(
          "pointer-events-none z-10 absolute h-10 w-10 sm:h-8 sm:w-8 rounded-full bg-background shadow-lg ring-0 transition-all duration-300 ease-in-out",
          isDone ? "left-[calc(100%-2.75rem)] sm:left-[calc(100%-2.25rem)]" : "left-1"
        )}
      />
    </button>
  );
}
