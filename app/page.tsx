import { TaskBoardSkeleton } from "@/components/task-board-skeleton";
import { Header } from "@/components/header";
import { createClient } from "@/lib/supabase/server";
import { Task } from "@/types/task";
import { Suspense } from "react";
import { TaskBoard } from "@/components/task-board";

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
    <div className="max-w-3xl mx-auto p-4 md:p-8">
      <Header />
      <main className="mt-8">
        <Suspense fallback={<TaskBoardSkeleton />}>
          <TaskBoard initialTasks={tasks} />
        </Suspense>
      </main>
    </div>
  );
}
