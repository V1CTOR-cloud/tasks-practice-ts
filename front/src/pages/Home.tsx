import Search from "../components/Search";
import Table from "../components/Table";
import { useTasks } from "../hooks/useTasks";

export default function Home() {
  const { tasks } = useTasks();

  return (
    <div className="">
      <Search />
      <Table tasks={tasks} />
    </div>
  );
}
