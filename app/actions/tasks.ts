"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const CategorySchema = z.enum(["bugs", "adjust", "findings"]);
const StatusSchema = z.enum(["ongoing", "done"]);

const CreateTaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional().nullable(),
  category: CategorySchema,
});

const UpdateTaskSchema = z.object({
  id: z.string().uuid("Invalid ID"),
  title: z.string().min(1, "Title is required"),
  description: z.string().optional().nullable(),
  category: CategorySchema,
});

const ToggleStatusSchema = z.object({
  id: z.string().uuid("Invalid ID"),
  status: StatusSchema,
});

export async function createTask(data: z.infer<typeof CreateTaskSchema>) {
  const result = CreateTaskSchema.safeParse(data);
  if (!result.success) {
    return { error: result.error.issues[0].message };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("tasks").insert({
    title: result.data.title,
    description: result.data.description,
    category: result.data.category,
    status: "ongoing",
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/");
  return { success: true };
}

export async function updateTask(data: z.infer<typeof UpdateTaskSchema>) {
  const result = UpdateTaskSchema.safeParse(data);
  if (!result.success) {
    return { error: result.error.issues[0].message };
  }

  const supabase = await createClient();
  const { error } = await supabase
    .from("tasks")
    .update({
      title: result.data.title,
      description: result.data.description,
      category: result.data.category,
      updated_at: new Date().toISOString(),
    })
    .eq("id", result.data.id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/");
  return { success: true };
}

export async function deleteTask(id: string) {
  if (!id) return { error: "ID is required" };

  const supabase = await createClient();
  const { error } = await supabase.from("tasks").delete().eq("id", id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/");
  return { success: true };
}

export async function toggleTaskStatus(data: z.infer<typeof ToggleStatusSchema>) {
  const result = ToggleStatusSchema.safeParse(data);
  if (!result.success) {
    return { error: result.error.issues[0].message };
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
    return { error: error.message };
  }

  revalidatePath("/");
  return { success: true };
}
