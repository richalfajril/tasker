"use client";

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

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save Changes"}
    </Button>
  );
}

interface EditTaskDialogProps {
  task: Task;
}

export function EditTaskDialog({ task }: EditTaskDialogProps) {
  const [open, setOpen] = useState(false);
  const [state, action] = useActionState(updateTask, null);

  useEffect(() => {
    if (state?.success) {
      setOpen(false);
    }
  }, [state]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Pencil className="h-4 w-4" />
          <span className="sr-only">Edit task</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
        </DialogHeader>
        <form action={action} className="grid gap-4 py-4">
          {state?.error && <p className="text-sm text-destructive">{state.error}</p>}
          <input type="hidden" name="id" value={task.id} />
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" defaultValue={task.title} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Select name="category" defaultValue={task.category} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bugs">Bugs</SelectItem>
                <SelectItem value="adjust">Adjust</SelectItem>
                <SelectItem value="findings">Findings</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" defaultValue={task.description || ""} />
          </div>
          <div className="flex justify-end gap-3 mt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <SubmitButton />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
