"use client";

import { toast } from "sonner";
import { useActionState, useState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { deleteTask } from "@/app/actions/tasks";

import { useLanguage } from "@/components/common/language-provider";

interface DeleteTaskDialogProps {
  taskId: string;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  const { t } = useLanguage();
  return (
    <Button type="submit" variant="destructive" disabled={pending}>
      {pending ? t("saving") : t("deleteTask")}
    </Button>
  );
}

export function DeleteTaskDialog({ taskId }: DeleteTaskDialogProps) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [state, action] = useActionState(deleteTask, null);

  useEffect(() => {
    if (state?.success) {
      setOpen(false);
      toast.success(t("taskDeleted"));
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [state, t]);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive hover:bg-destructive/10">
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">{t("deleteTask")}</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("deleteConfirm")}</AlertDialogTitle>
          <AlertDialogDescription>
            {t("deleteWarning")}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form action={action}>
          <input type="hidden" name="id" value={taskId} />
          {state?.error && <p className="text-sm text-destructive mb-4">{state.error}</p>}
          <AlertDialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>{t("cancel")}</Button>
            <SubmitButton />
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
