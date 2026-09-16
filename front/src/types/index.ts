export type Status = "todo" | "in_progress" | "done";
export type Priority = "low" | "medium" | "high";

export interface Task {
    id: number,
    title: string,
    description?: string,
    status: Status,
    priority: Priority,
    assignee?: string,
    dueDate?: string
}

