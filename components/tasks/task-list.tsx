"use client";

import { Task } from "@/types/task";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TaskCard } from "./task-card";
import { useLanguage } from "@/components/common/language-provider";

interface TaskListProps {
  tasks: Task[];
  addOptimisticTask?: (action: Task) => void;
}

export function TaskList({ tasks, addOptimisticTask }: TaskListProps) {
  const { t } = useLanguage();
  const bugs = tasks.filter(t => t.category === "bugs");
  const adjust = tasks.filter(t => t.category === "adjust");
  const findings = tasks.filter(t => t.category === "findings");

  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center border rounded-lg border-dashed">
        <h3 className="text-lg font-semibold text-muted-foreground">{t("emptyState")}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {t("emptyState")}
        </p>
      </div>
    );
  }

  const renderGrid = (tasksArray: Task[]) => {
    if (tasksArray.length === 0) {
      return (
        <div className="flex items-center justify-center py-8 text-center border rounded-lg border-dashed">
          <p className="text-sm text-muted-foreground">{t("emptyState")}</p>
        </div>
      );
    }
    return (
      <div className="grid gap-3">
        {tasksArray.map(task => (
          <TaskCard key={task.id} task={task} addOptimisticTask={addOptimisticTask} />
        ))}
      </div>
    );
  };

  return (
    <Tabs defaultValue="bugs" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-6">
        <TabsTrigger value="bugs">{t("bugs")} ({bugs.length})</TabsTrigger>
        <TabsTrigger value="adjust">{t("adjust")} ({adjust.length})</TabsTrigger>
        <TabsTrigger value="findings">{t("findings")} ({findings.length})</TabsTrigger>
      </TabsList>
      <TabsContent value="bugs" className="mt-0">
        {renderGrid(bugs)}
      </TabsContent>
      <TabsContent value="adjust" className="mt-0">
        {renderGrid(adjust)}
      </TabsContent>
      <TabsContent value="findings" className="mt-0">
        {renderGrid(findings)}
      </TabsContent>
    </Tabs>
  );
}
