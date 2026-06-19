"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Task } from "@/types/task";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/components/common/language-provider";

export function ViewTaskDialog({ task }: { task: Task }) {
  const { t } = useLanguage();
  if (!task.description) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
          <Eye className="h-4 w-4" />
          <span className="sr-only">{t("viewDescription")}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="leading-relaxed">{task.title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] mt-2 pr-4">
          <div className="text-sm whitespace-pre-wrap text-muted-foreground">
            {task.description}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
