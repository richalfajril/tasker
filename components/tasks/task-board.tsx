"use client";

import { useOptimistic, useState, useEffect, useRef } from "react";
import { Task } from "@/types/task";

import { TaskCategoryTab } from "./task-category-tab";
import { Header } from "@/components/header";

export function TaskBoard({ initialTasks }: { initialTasks: Task[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const [priorityFilter, setPriorityFilter] = useState("all");
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
    
    const matchesPriority = priorityFilter === "all" || task.priority === priorityFilter;

    return matchesSearch && matchesPriority;
  });

  // 2. Sort (Default by newest created_at)
  filteredTasks.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });



  return (
    <div className="space-y-0">
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
        searchInputRef={searchInputRef}
      />

      <TaskCategoryTab tasks={filteredTasks} addOptimisticTask={addOptimisticTask} />
    </div>
  );
}
