"use client";

import { ViewTaskDialog } from "./view-task-dialog";

import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Task } from "@/types/task";
import { formatDistanceToNow } from "date-fns";
import { id as idLocale, enUS } from "date-fns/locale";
import { EditTaskDialog } from "./edit-task-dialog";
import { DeleteTaskDialog } from "./delete-task-dialog";
import { toggleTaskStatus } from "@/app/actions/tasks";
import { useActionState, useRef, useState } from "react";
import { toast } from "sonner";
import { CalendarIcon, MoreHorizontal, Pencil, Trash2, Eye } from "lucide-react";
import { useLanguage } from "@/components/common/language-provider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface TaskCardProps {
  task: Task;
  addOptimisticTask?: (action: Task) => void;
}

export function TaskCard({ task, addOptimisticTask }: TaskCardProps) {
  const { t, language } = useLanguage();
  const isDone = task.status === "done";
  const [, action] = useActionState(async (prevState: { success?: boolean; error?: string | null } | null, formData: FormData) => {
    // Fire optimistic update immediately on form submit
    if (addOptimisticTask) {
      addOptimisticTask({ ...task, status: isDone ? "ongoing" : "done" });
    }
    
    const result = await toggleTaskStatus(prevState, formData);
    
    if (result.success) {
      toast.success(t("statusUpdated"));
    } else if (result.error) {
      toast.error(result.error);
    }
    
    return result;
  }, null);
  
  const formRef = useRef<HTMLFormElement>(null);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <>
      <ViewTaskDialog task={task} open={isViewOpen} onOpenChange={setIsViewOpen} />
      <EditTaskDialog task={task} open={isEditOpen} onOpenChange={setIsEditOpen} />
      <DeleteTaskDialog taskId={task.id} open={isDeleteOpen} onOpenChange={setIsDeleteOpen} />
      
      <div className={`group flex flex-row items-center gap-2 sm:gap-4 px-3 sm:px-4 py-2.5 border-b last:border-b-0 transition-all hover:bg-muted/50 ${isDone ? "opacity-60" : ""}`}>
      
      {/* 1. Checklist */}
      <form ref={formRef} action={action} className="flex items-center shrink-0">
        <input type="hidden" name="id" value={task.id} />
        <input type="hidden" name="status" value={isDone ? "ongoing" : "done"} />
        <Checkbox 
          checked={isDone} 
          onCheckedChange={() => formRef.current?.requestSubmit()} 
        />
      </form>
      
      {/* 2. Priority */}
      <div className="shrink-0 w-[52px] sm:w-[60px] flex items-center">
        {task.priority === "high" && (
          <Badge className="bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50 capitalize text-[10px] px-1.5 py-0 h-5 w-full justify-center border-0">{t("high")}</Badge>
        )}
        {task.priority === "medium" && (
          <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-900/50 capitalize text-[10px] px-1.5 py-0 h-5 w-full justify-center border-0">{t("medium")}</Badge>
        )}
        {task.priority === "low" && (
          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:hover:bg-emerald-900/50 capitalize text-[10px] px-1.5 py-0 h-5 w-full justify-center border-0">{t("low")}</Badge>
        )}
      </div>

      {/* 3. Title */}
      <div className="flex-1 flex items-center min-w-0">
        <h3 className={`font-medium text-sm leading-tight truncate ${isDone ? "line-through text-muted-foreground" : ""}`} title={task.title}>
          {task.title}
        </h3>
      </div>
      
      {/* 4. Labels */}
      <div className="flex items-center gap-1.5 shrink-0 hidden md:flex overflow-hidden w-[140px]">
        {task.labels && task.labels.length > 0 && task.labels.slice(0, 2).map(label => (
          <Badge key={label} variant="outline" className="capitalize text-[10px] px-1.5 py-0 h-5 truncate max-w-[60px]">
            {label}
          </Badge>
        ))}
        {task.labels && task.labels.length > 2 && (
            <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-5">+{task.labels.length - 2}</Badge>
        )}
      </div>

      {/* 5. Due Date */}
      <div className="shrink-0 w-[110px] hidden lg:flex items-center justify-end">
        {task.due_date && (
          <div className="flex items-center gap-1.5 text-xs whitespace-nowrap text-muted-foreground">
            <CalendarIcon className="h-3.5 w-3.5" />
            <span suppressHydrationWarning className={new Date(task.due_date) < new Date() ? "text-destructive font-medium" : ""}>
              {formatDistanceToNow(new Date(task.due_date), { 
                addSuffix: true,
                locale: language === "id" ? idLocale : enUS
              })}
            </span>
          </div>
        )}
      </div>

      {/* 6. Actions */}
      <div className="flex items-center gap-1 shrink-0 w-[40px] justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-10 w-10 sm:h-8 sm:w-8 text-muted-foreground hover:text-foreground">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">More Options</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {task.description && (
              <DropdownMenuItem onSelect={() => setIsViewOpen(true)} className="cursor-pointer h-12 sm:h-10">
                <Eye className="mr-2 h-4 w-4" />
                <span>{t("description")}</span>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem onSelect={() => setIsEditOpen(true)} className="cursor-pointer h-12 sm:h-10">
              <Pencil className="mr-2 h-4 w-4" />
              <span>{t("edit")}</span>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setIsDeleteOpen(true)} className="cursor-pointer text-destructive focus:text-destructive h-12 sm:h-10">
              <Trash2 className="mr-2 h-4 w-4" />
              <span>{t("delete")}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
    </>
  );
}
