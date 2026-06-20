"use client";

import { useLanguage } from "@/components/common/language-provider";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={() => setLanguage(language === "id" ? "en" : "id")}
      className="font-bold text-xs w-12 h-12 sm:w-10 sm:h-10"
      title={language === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
    >
      {language.toUpperCase()}
    </Button>
  );
}
