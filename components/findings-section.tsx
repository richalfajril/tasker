import { Task } from "@/types/task";
import { TaskCard } from "./task-card";

export function FindingsSection({ tasks }: { tasks: Task[] }) {
  return (
    <section>
      <h2 className="text-sm font-semibold text-green-500 mb-3 uppercase tracking-wider">Findings</h2>
      <div className="grid gap-3">
        {tasks.map(task => <TaskCard key={task.id} task={task} />)}
      </div>
    </section>
  );
}
