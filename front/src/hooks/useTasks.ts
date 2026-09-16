import { useState } from "react";
import type { Task } from "../types";
import { tasksData } from "../db/mockDB.json";

const tasks: Task[] = tasksData as Task[];

export function useTasks() {
    const [tasksState, setTasks] = useState<Task[]>(tasks);

    return { tasks: tasksState, setTasks };
}   