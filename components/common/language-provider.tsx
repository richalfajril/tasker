"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries, Language, Dictionary } from "@/lib/dictionaries";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Dictionary) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id"); // Default to ID
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load from local storage if available
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "id" || saved === "en")) {
      setLanguageState(saved);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: keyof Dictionary): string => {
    // If not mounted yet, default to Indonesian dictionary to match SSR
    // In a real i18n we would read from headers, but for simple MVP this is fine
    const dict = mounted ? dictionaries[language] : dictionaries["id"];
    return dict[key] || key;
  };

  // Avoid hydration mismatch by waiting to render children until mounted
  // OR just render children with default "id" language, then update on client
  // Since this is a simple app, we can just render right away. Hydration errors 
  // might occur if the server renders "id" but client localstorage is "en".
  // A standard fix is to hide content until mounted or accept the flash.
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language: "id", setLanguage, t: (k) => dictionaries["id"][k] }}>
        <div className="opacity-0">{children}</div>
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
