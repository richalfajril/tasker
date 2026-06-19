import { Task } from "@/types/task";
import { TaskCard } from "./task-card";

export function AdjustSection({ tasks }: { tasks: Task[] }) {
  return (
    <section>
      <h2 className="text-sm font-semibold text-blue-500 mb-3 uppercase tracking-wider">Adjust</h2>
      <div className="grid gap-3">
        {tasks.map(task => <TaskCard key={task.id} task={task} />)}
      </div>
    </section>
  );
}
