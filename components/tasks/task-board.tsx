"use client";

import { useOptimistic, useState, useEffect, useRef } from "react";
import { Task } from "@/types/task";
import { TaskTabs } from "./task-tabs";
import { TaskList } from "./task-list";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useLanguage } from "@/components/common/language-provider";

export function TaskBoard({ initialTasks }: { initialTasks: Task[] }) {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const [sortOrder, setSortOrder] = useState("updated_desc");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [optimisticTasks, addOptimisticTask] = useOptimistic(
    initialTasks,
    (state, updatedTask: Task) => {
      const exists = state.some((t) => t.id === updatedTask.id);
      if (exists) {
        return state.map((t) => (t.id === updatedTask.id ? updatedTask : t));
      } else {
        return [updatedTask, ...state];
      }
    }
  );

  // Global Keyboard shortcut for search
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // 1. Filter
  const filteredTasks = optimisticTasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (task.description?.toLowerCase() || "").includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  // 2. Sort
  filteredTasks.sort((a, b) => {
    const aTime = new Date(sortOrder.startsWith("updated") ? a.updated_at : a.created_at).getTime();
    const bTime = new Date(sortOrder.startsWith("updated") ? b.updated_at : b.created_at).getTime();
    
    if (sortOrder.endsWith("desc")) {
      return bTime - aTime;
    } else {
      return aTime - bTime;
    }
  });

  const ongoingTasks = filteredTasks.filter((t) => t.status === "ongoing");
  const doneTasks = filteredTasks.filter((t) => t.status === "done");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            ref={searchInputRef}
            type="search" 
            placeholder={t("searchPlaceholder")} 
            className="pl-8 pr-12"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute right-2 top-2 pointer-events-none flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </div>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">


          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-full sm:w-[150px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="updated_desc">Recently Updated</SelectItem>
              <SelectItem value="updated_asc">Oldest Updated</SelectItem>
              <SelectItem value="created_desc">Newest Created</SelectItem>
              <SelectItem value="created_asc">Oldest Created</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <TaskTabs 
        ongoingTasks={<TaskList tasks={ongoingTasks} addOptimisticTask={addOptimisticTask} />}
        doneTasks={<TaskList tasks={doneTasks} addOptimisticTask={addOptimisticTask} />}
      />
    </div>
  );
}
