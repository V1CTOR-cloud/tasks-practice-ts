import { CirclePlus, Origami } from "lucide-react";
import Button from "./Button";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className="px-12 py-2 flex items-center justify-between">
      <Link to={"/"} className="flex gap-2 bg-slate-100 px-4 py-3 rounded">
        <Origami />
        <h2>Airflow</h2>
      </Link>
      <Button>
        <CirclePlus />
        Add Task
      </Button>
    </header>
  );
}
