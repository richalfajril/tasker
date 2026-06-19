export type Category = "bugs" | "adjust" | "findings";

export type Status = "ongoing" | "done";

export interface Task {
  id: string;
  title: string;
  description: string | null;
  category: Category;
  status: Status;
  created_at: string;
  updated_at: string;
}
