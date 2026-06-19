export type Category = "bugs" | "adjust" | "findings";

export type Status = "ongoing" | "done";

export interface Task {
  id: string;
  title: string;
  description: string | null;
  category: "bugs" | "adjust" | "findings";
  status: "ongoing" | "done";
  priority: "low" | "medium" | "high";
  labels: string[];
  due_date: string | null;
  created_at: string;
  updated_at: string;
}
