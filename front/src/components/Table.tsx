import type { Task } from "../types";

interface TableProps {
  tasks: Array<Task>;
}

function EmptyState() {
  return <h1>Nothing</h1>;
}

export default function Table({ tasks }: TableProps) {
  if (!tasks) {
    return <EmptyState />;
  }

  return <div>Table</div>;
}
