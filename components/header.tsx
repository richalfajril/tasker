import { CreateTaskDialog } from "./create-task-dialog";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between py-6 border-b">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Tasker</h1>
        <p className="text-sm text-muted-foreground">Development Notes</p>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <CreateTaskDialog />
      </div>
    </header>
  );
}
