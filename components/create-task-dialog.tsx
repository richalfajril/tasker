"use client";

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

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save"}
    </Button>
  );
}

export function CreateTaskDialog() {
  const [open, setOpen] = useState(false);
  const [state, action] = useActionState(createTask, null);

  useEffect(() => {
    if (state?.success) {
      setOpen(false);
    }
  }, [state]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
        </DialogHeader>
        <form action={action} className="grid gap-4 py-4">
          {state?.error && <p className="text-sm text-destructive">{state.error}</p>}
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" placeholder="What needs to be done?" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Select name="category" required defaultValue="bugs">
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
            <Textarea id="description" name="description" placeholder="Optional details..." />
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
