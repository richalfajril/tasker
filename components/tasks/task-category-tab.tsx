"use client";

import { useState } from "react";

import { Task } from "@/types/task";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TaskCard } from "./task-card";
import { useLanguage } from "@/components/common/language-provider";

interface TaskCategoryTabProps {
  tasks: Task[];
  addOptimisticTask?: (action: Task) => void;
}


import { StatusToggle } from "./status-toggle";
import { CreateTaskDialog } from "./create-task-dialog";
import { EmptyState } from "@/components/ui/empty-state";
import { Card } from "@/components/ui/card";

export function TaskCategoryTab({ tasks, addOptimisticTask }: TaskCategoryTabProps) {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"ongoing" | "done">("ongoing");
  
  const filteredByStatus = tasks.filter(t => t.status === status);
  const bugs = filteredByStatus.filter(t => t.category === "bugs");
  const adjust = filteredByStatus.filter(t => t.category === "adjust");
  const findings = filteredByStatus.filter(t => t.category === "findings");



  const renderGrid = (tasksArray: Task[]) => {
    if (tasksArray.length === 0) {
      return (
        <EmptyState message={t("emptyState")} />
      );
    }
    return (
      <Card className="flex flex-col rounded-lg overflow-hidden p-0 gap-0 py-0 border-0 shadow-sm sm:border sm:shadow-sm">
        {tasksArray.map(task => (
          <TaskCard key={task.id} task={task} addOptimisticTask={addOptimisticTask} />
        ))}
      </Card>
    );
  };

  return (
    <Tabs defaultValue="bugs" className="w-full">
      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-md border-t z-50 flex sm:hidden pb-safe">
        <div className="grid grid-cols-2 gap-4 w-full">
          <StatusToggle status={status} onChange={setStatus} className="w-full h-12" />
          <div className="[&>button]:w-full [&>button]:h-12 [&>button]:rounded-full">
            <CreateTaskDialog />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <div className="hidden sm:block">
          <StatusToggle status={status} onChange={setStatus} />
        </div>
        
        <TabsList className="grid w-full flex-1 grid-cols-3 h-14 sm:h-10">
          <TabsTrigger value="bugs" className="h-12 sm:h-8 data-[state=active]:!text-red-600 dark:data-[state=active]:!text-red-400">{t("bugs")} ({bugs.length})</TabsTrigger>
          <TabsTrigger value="adjust" className="h-12 sm:h-8 data-[state=active]:!text-emerald-600 dark:data-[state=active]:!text-emerald-400">{t("adjust")} ({adjust.length})</TabsTrigger>
          <TabsTrigger value="findings" className="h-12 sm:h-8 data-[state=active]:!text-blue-600 dark:data-[state=active]:!text-blue-400">{t("findings")} ({findings.length})</TabsTrigger>
        </TabsList>

        <div className="hidden sm:block shrink-0 [&>button]:w-full">
          <CreateTaskDialog />
        </div>
      </div>
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
