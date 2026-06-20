"use client";

import { toast } from "sonner";
import { useState, useEffect, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pencil } from "lucide-react";
import { Task } from "@/types/task";
import { updateTask } from "@/app/actions/tasks";
import { DatePicker } from "@/components/common/date-picker";

import { useLanguage } from "@/components/common/language-provider";

function SubmitButton() {
  const { pending } = useFormStatus();
  const { t } = useLanguage();
  return (
    <Button type="submit" className="h-12" disabled={pending}>
      {pending ? t("saving") : t("saveChanges")}
    </Button>
  );
}

interface EditTaskDialogProps {
  task: Task;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function EditTaskDialog({ task, open: controlledOpen, onOpenChange: setControlledOpen }: EditTaskDialogProps) {
  const { t } = useLanguage();
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;
  const setOpen = isControlled && setControlledOpen ? setControlledOpen : setUncontrolledOpen;

  const [dueDate, setDueDate] = useState<Date | undefined>(
    task.due_date ? new Date(task.due_date) : undefined
  );
  const [state, action] = useActionState(updateTask, null);

  useEffect(() => {
    if (state?.success) {
      setOpen(false);
      toast.success(t("taskUpdated"));
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [state, t, setOpen]);

  // Reset due date state if dialog opens/closes and task changes
  useEffect(() => {
    if (open) {
      setDueDate(task.due_date ? new Date(task.due_date) : undefined);
    }
  }, [open, task.due_date]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {!isControlled && (
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon">
            <Pencil className="h-4 w-4" />
            <span className="sr-only">{t("editTask")}</span>
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-bold text-xl">{t("editTask")}</DialogTitle>
        </DialogHeader>
        <form action={action} className="grid gap-4 py-4">
          {state?.error && <p className="text-sm text-destructive">{state.error}</p>}
          <input type="hidden" name="id" value={task.id} />
          
          <div className="grid gap-2">
            <Label htmlFor="title">{t("title")}</Label>
            <Input id="title" name="title" defaultValue={task.title} className="h-12" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="category">{t("category")}</Label>
              <Select name="category" defaultValue={task.category} required>
                <SelectTrigger className="w-full h-12">
                  <SelectValue placeholder={t("category")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bugs">{t("bugs")}</SelectItem>
                  <SelectItem value="adjust">{t("adjust")}</SelectItem>
                  <SelectItem value="findings">{t("findings")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="priority">{t("priority")}</Label>
              <Select name="priority" defaultValue={task.priority} required>
                <SelectTrigger className="w-full h-12">
                  <SelectValue placeholder={t("priority")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">{t("high")}</SelectItem>
                  <SelectItem value="medium">{t("medium")}</SelectItem>
                  <SelectItem value="low">{t("low")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="labels">{t("labels")}</Label>
              <Input 
                id="labels" 
                name="labels" 
                defaultValue={task.labels?.join(", ")} 
                placeholder={t("labelsPlaceholder")} 
                className="h-12"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="due_date">{t("dueDate")}</Label>
              <DatePicker date={dueDate} setDate={setDueDate} name="due_date" className="h-12" />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">{t("description")}</Label>
            <Textarea id="description" name="description" defaultValue={task.description || ""} className="h-24" />
          </div>
          <div className="flex justify-end gap-3 mt-4">
            <Button type="button" variant="outline" className="h-12" onClick={() => setOpen(false)}>{t("cancel")}</Button>
            <SubmitButton />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
