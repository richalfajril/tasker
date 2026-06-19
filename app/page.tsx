import { Header } from "@/components/header";
import { TaskTabs } from "@/components/task-tabs";
import { TaskList } from "@/components/task-list";
import { createClient } from "@/lib/supabase/server";
import { Task } from "@/types/task";
import { Suspense } from "react";

export const dynamic = 'force-dynamic';

async function fetchTasks(): Promise<Task[]> {
  const supabase = await createClient();
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

  const ongoingTasks = tasks.filter((t) => t.status === "ongoing");
  const doneTasks = tasks.filter((t) => t.status === "done");

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8">
      <Header />
      <main className="mt-8">
        <Suspense fallback={
          <div className="flex items-center justify-center py-20 text-muted-foreground">
            Loading tasks...
          </div>
        }>
          <TaskTabs 
            ongoingTasks={<TaskList tasks={ongoingTasks} />}
            doneTasks={<TaskList tasks={doneTasks} />}
          />
        </Suspense>
      </main>
    </div>
  );
}
