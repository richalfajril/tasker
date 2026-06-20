"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useLanguage } from "@/components/common/language-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/common/language-toggle";
import { Kbd } from "@/components/ui/kbd";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  priorityFilter: string;
  setPriorityFilter: (priority: string) => void;
  searchInputRef: React.RefObject<HTMLInputElement | null>;
}

export function Header({ searchQuery, setSearchQuery, priorityFilter, setPriorityFilter, searchInputRef }: HeaderProps) {
  const { t } = useLanguage();

  return (
    <header className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-6">
      {/* Mobile Row 1 / Desktop Left */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <h1 className="text-2xl font-bold tracking-tight">Tasker</h1>
        <div className="flex gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>

      {/* Desktop Spacer */}
      <div className="hidden md:block flex-1" />

      {/* Search & Sort (Mobile Row 2 / Desktop Right) */}
      <div className="flex gap-2 w-full md:w-auto items-center">
        <div className="relative flex-1 md:w-64 lg:w-80">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            ref={searchInputRef}
            type="search" 
            placeholder={t("searchPlaceholder")} 
            className="pl-8 pr-12"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Kbd className="absolute right-2 top-2">
            <span className="text-xs">⌘</span>K
          </Kbd>
        </div>
        
        <Select value={priorityFilter} onValueChange={setPriorityFilter}>
          <SelectTrigger className="w-[140px] md:w-[150px]">
            <SelectValue placeholder={t("priority")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("allPriorities")}</SelectItem>
            <SelectItem value="high">{t("high")}</SelectItem>
            <SelectItem value="medium">{t("medium")}</SelectItem>
            <SelectItem value="low">{t("low")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Desktop Toggles */}
      <div className="hidden md:flex gap-2 shrink-0">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  );
}
