"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";

interface TaskTabsProps {
  ongoingTasks: ReactNode;
  doneTasks: ReactNode;
}

export function TaskTabs({ ongoingTasks, doneTasks }: TaskTabsProps) {
  return (
    <Tabs defaultValue="ongoing" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-6">
        <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
        <TabsTrigger value="done">Done</TabsTrigger>
      </TabsList>
      <TabsContent value="ongoing" className="space-y-6">
        {ongoingTasks}
      </TabsContent>
      <TabsContent value="done" className="space-y-6">
        {doneTasks}
      </TabsContent>
    </Tabs>
  );
}
