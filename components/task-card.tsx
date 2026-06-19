"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Task } from "@/types/task";
import { formatDistanceToNow } from "date-fns";
import { EditTaskDialog } from "./edit-task-dialog";
import { DeleteTaskDialog } from "./delete-task-dialog";
import { toggleTaskStatus } from "@/app/actions/tasks";
import { useActionState, useRef } from "react";

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  const isDone = task.status === "done";
  const [state, action] = useActionState(toggleTaskStatus, null);
  const formRef = useRef<HTMLFormElement>(null);
  
  const categoryColors = {
    bugs: "destructive",
    adjust: "default",
    findings: "secondary",
  } as const;

  return (
    <Card className={`transition-all ${isDone ? "opacity-60" : ""}`}>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-2">
        <form ref={formRef} action={action} className="mt-1">
          <input type="hidden" name="id" value={task.id} />
          <input type="hidden" name="status" value={isDone ? "ongoing" : "done"} />
          <Checkbox 
            checked={isDone} 
            onCheckedChange={() => formRef.current?.requestSubmit()} 
          />
        </form>
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <h3 className={`font-semibold leading-none tracking-tight ${isDone ? "line-through text-muted-foreground" : ""}`}>
              {task.title}
            </h3>
            <div className="flex items-center gap-1">
              <EditTaskDialog task={task} />
              <DeleteTaskDialog taskId={task.id} />
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Badge variant={categoryColors[task.category]} className="capitalize">
              {task.category}
            </Badge>
            <span>•</span>
            <span>{formatDistanceToNow(new Date(task.updated_at), { addSuffix: true })}</span>
          </div>
        </div>
      </CardHeader>
      {task.description && (
        <CardContent className="pt-0 pb-4 pl-12 text-sm text-muted-foreground">
          {task.description}
        </CardContent>
      )}
    </Card>
  );
}
