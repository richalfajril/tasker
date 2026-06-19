"use server";

import { revalidateTag } from "next/cache";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const CategorySchema = z.enum(["bugs", "adjust", "findings"]);
const StatusSchema = z.enum(["ongoing", "done"]);

const CreateTaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  category: z.enum(["bugs", "adjust", "findings"]),
  priority: z.enum(["low", "medium", "high"]).default("medium"),
  labels: z.string().transform(val => val ? val.split(',').map(s => s.trim()).filter(Boolean) : []),
  due_date: z.string().optional().nullable(),
});

const UpdateTaskSchema = z.object({
  id: z.string().uuid("Invalid ID"),
  title: z.string().min(1, "Title is required"),
  description: z.string().optional().nullable(),
  category: CategorySchema,
  status: StatusSchema.optional(),
  priority: z.enum(["low", "medium", "high"]).optional(),
  labels: z.string().transform(val => val ? val.split(',').map(s => s.trim()).filter(Boolean) : []).optional(),
  due_date: z.string().optional().nullable(),
});

const DeleteTaskSchema = z.object({
  id: z.string().uuid("Invalid ID"),
});

const ToggleStatusSchema = z.object({
  id: z.string().uuid("Invalid ID"),
  status: StatusSchema,
});

export type ActionState = {
  error?: string | null;
  success?: boolean;
};

export async function createTask(prevState: ActionState | null, formData: FormData): Promise<ActionState> {
  const data = {
    title: formData.get("title"),
    description: formData.get("description"),
    category: formData.get("category"),
    priority: formData.get("priority"),
    labels: formData.get("labels"),
    due_date: formData.get("due_date"),
  };

  const result = CreateTaskSchema.safeParse(data);
  if (!result.success) {
    return { error: result.error.issues[0].message, success: false };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("tasks").insert({
    title: result.data.title,
    description: result.data.description,
    category: result.data.category,
    priority: result.data.priority,
    labels: result.data.labels,
    due_date: result.data.due_date || null,
    status: "ongoing",
  });

  if (error) {
    return { error: error.message, success: false };
  }

  revalidateTag("tasks");
  return { success: true, error: null };
}

export async function updateTask(prevState: ActionState | null, formData: FormData): Promise<ActionState> {
  const data = {
    id: formData.get("id"),
    title: formData.get("title"),
    description: formData.get("description"),
    category: formData.get("category"),
    priority: formData.get("priority"),
    labels: formData.get("labels"),
    due_date: formData.get("due_date"),
  };

  const result = UpdateTaskSchema.safeParse(data);
  if (!result.success) {
    return { error: result.error.issues[0].message, success: false };
  }

  const supabase = await createClient();
  const { error } = await supabase
    .from("tasks")
    .update({
      title: result.data.title,
      description: result.data.description,
      category: result.data.category,
      priority: result.data.priority,
      labels: result.data.labels,
      due_date: result.data.due_date || null,
      updated_at: new Date().toISOString(),
    })
    .eq("id", result.data.id);

  if (error) {
    return { error: error.message, success: false };
  }

  revalidateTag("tasks");
  return { success: true, error: null };
}

export async function deleteTask(prevState: ActionState | null, formData: FormData): Promise<ActionState> {
  const data = {
    id: formData.get("id"),
  };
  const result = DeleteTaskSchema.safeParse(data);
  if (!result.success) {
    return { error: result.error.issues[0].message, success: false };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("tasks").delete().eq("id", result.data.id);

  if (error) {
    return { error: error.message, success: false };
  }

  revalidateTag("tasks");
  return { success: true, error: null };
}

export async function toggleTaskStatus(prevState: ActionState | null, formData: FormData): Promise<ActionState> {
  const data = {
    id: formData.get("id"),
    status: formData.get("status"),
  };
  
  const result = ToggleStatusSchema.safeParse(data);
  if (!result.success) {
    return { error: result.error.issues[0].message, success: false };
  }

  const supabase = await createClient();
  const { error } = await supabase
    .from("tasks")
    .update({
      status: result.data.status,
      updated_at: new Date().toISOString(),
    })
    .eq("id", result.data.id);

  if (error) {
    return { error: error.message, success: false };
  }

  revalidateTag("tasks");
  return { success: true, error: null };
}
