import { Task } from "@/types/task";
import { BugSection } from "./bug-section";
import { AdjustSection } from "./adjust-section";
import { FindingsSection } from "./findings-section";

export function TaskList({ tasks }: { tasks: Task[] }) {
  const bugs = tasks.filter(t => t.category === "bugs");
  const adjust = tasks.filter(t => t.category === "adjust");
  const findings = tasks.filter(t => t.category === "findings");

  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center border rounded-lg border-dashed">
        <h3 className="text-lg font-semibold text-muted-foreground">No tasks found</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          You're all caught up! Enjoy your day.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {bugs.length > 0 && <BugSection tasks={bugs} />}
      {adjust.length > 0 && <AdjustSection tasks={adjust} />}
      {findings.length > 0 && <FindingsSection tasks={findings} />}
    </div>
  );
}
