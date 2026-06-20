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
import { Plus } from "lucide-react";
import { createTask } from "@/app/actions/tasks";
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

export function CreateTaskDialog() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [dueDate, setDueDate] = useState<Date | undefined>();
  const [state, action] = useActionState(createTask, null);

  useEffect(() => {
    if (state?.success) {
      setOpen(false);
      setDueDate(undefined);
      toast.success(t("taskCreated"));
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [state, t]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "n" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="h-12 sm:h-10">
          <Plus className="mr-2 h-4 w-4" /> {t("newTask")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-bold text-xl">{t("createTask")}</DialogTitle>
        </DialogHeader>
        <form action={action} className="grid gap-4 py-4">
          {state?.error && <p className="text-sm text-destructive">{state.error}</p>}
          <div className="grid gap-2">
            <Label htmlFor="title">{t("title")}</Label>
            <Input id="title" name="title" className="h-12" required />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="category">{t("category")}</Label>
              <Select name="category" required defaultValue="bugs">
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
              <Select name="priority" required defaultValue="medium">
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
              <Input id="labels" name="labels" className="h-12" placeholder={t("labelsPlaceholder")} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="due_date">{t("dueDate")}</Label>
              <DatePicker date={dueDate} setDate={setDueDate} name="due_date" className="h-12" />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">{t("description")}</Label>
            <Textarea id="description" name="description" className="h-24" />
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
