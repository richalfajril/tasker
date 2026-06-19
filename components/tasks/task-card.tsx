"use client";

import { ViewTaskDialog } from "./view-task-dialog";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Task } from "@/types/task";
import { formatDistanceToNow } from "date-fns";
import { EditTaskDialog } from "./edit-task-dialog";
import { DeleteTaskDialog } from "./delete-task-dialog";
import { toggleTaskStatus } from "@/app/actions/tasks";
import { useActionState, useRef } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";
import { CalendarIcon } from "lucide-react";

interface TaskCardProps {
  task: Task;
  addOptimisticTask?: (action: Task) => void;
}

export function TaskCard({ task, addOptimisticTask }: TaskCardProps) {
  const isDone = task.status === "done";
  const [, action] = useActionState(async (prevState: { success?: boolean; error?: string | null } | null, formData: FormData) => {
    // Fire optimistic update immediately on form submit
    if (addOptimisticTask) {
      addOptimisticTask({ ...task, status: isDone ? "ongoing" : "done" });
    }
    
    const result = await toggleTaskStatus(prevState, formData);
    
    if (result.success) {
      toast.success("Task status updated");
    } else if (result.error) {
      toast.error(result.error);
    }
    
    return result;
  }, null);
  
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
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <ViewTaskDialog task={task} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View Description</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <EditTaskDialog task={task} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Edit Task</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <DeleteTaskDialog taskId={task.id} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Delete Task</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-muted-foreground">
            <Badge variant={categoryColors[task.category]} className="capitalize">
              {task.category}
            </Badge>
            
            {task.priority === "high" && (
              <Badge variant="destructive" className="capitalize">High</Badge>
            )}
            {task.priority === "medium" && (
              <Badge variant="secondary" className="capitalize">Medium</Badge>
            )}
            {task.priority === "low" && (
              <Badge variant="outline" className="capitalize text-muted-foreground">Low</Badge>
            )}

            {task.labels && task.labels.length > 0 && task.labels.map(label => (
              <Badge key={label} variant="outline" className="capitalize">
                {label}
              </Badge>
            ))}

            {task.due_date && (
              <div className="flex items-center gap-1 text-xs whitespace-nowrap">
                <CalendarIcon className="h-3 w-3" />
                <span className={new Date(task.due_date) < new Date() ? "text-destructive font-medium" : ""}>
                  Due {formatDistanceToNow(new Date(task.due_date), { addSuffix: true })}
                </span>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
