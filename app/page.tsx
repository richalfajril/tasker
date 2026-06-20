import { TaskBoardSkeleton } from "@/components/tasks/task-board-skeleton";

import { createClient } from "@/lib/supabase/server";
import { Task } from "@/types/task";
import { Suspense } from "react";
import { TaskBoard } from "@/components/tasks/task-board";

async function fetchTasks(): Promise<Task[]> {
  const supabase = await createClient((url, init) => {
    return fetch(url, { ...init, next: { tags: ["tasks"] } });
  });
  
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }

  return data as Task[];
}

export default async function Home() {
  const tasks = await fetchTasks();

  return (
    <div className="w-full min-h-screen bg-background">
      <main className="w-full max-w-7xl mx-auto p-4 pb-24 md:p-8 md:pb-8">
        <Suspense fallback={<TaskBoardSkeleton />}>
          <TaskBoard initialTasks={tasks} />
        </Suspense>
      </main>
    </div>
  );
}
