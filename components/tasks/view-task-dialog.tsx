"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Task } from "@/types/task";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/components/common/language-provider";

interface ViewTaskDialogProps {
  task: Task;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function ViewTaskDialog({ task, open: controlledOpen, onOpenChange: setControlledOpen }: ViewTaskDialogProps) {
  const { t } = useLanguage();
  
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : undefined;
  const onOpenChange = isControlled ? setControlledOpen : undefined;

  if (!task.description) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {!isControlled && (
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
            <Eye className="h-4 w-4" />
            <span className="sr-only">{t("viewDescription")}</span>
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-[700px] w-[95vw] sm:w-full overflow-hidden">
        <DialogHeader className="min-w-0 w-full pr-6">
          <DialogTitle className="leading-relaxed break-words">{task.title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[85vh] mt-2 w-full min-w-0">
          <div className="text-sm whitespace-pre-wrap break-all pr-4 text-muted-foreground w-full">
            {task.description}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
