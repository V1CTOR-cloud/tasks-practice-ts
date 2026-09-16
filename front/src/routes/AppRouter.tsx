import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import TaskDetail from "../pages/TaskDetail";
import CreateTask from "../pages/CreateTask";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
            <Route path="*" element={<Home />} />
            <Route path="tasks/:task_id" element={<TaskDetail />} />
            <Route path="/create" element={<CreateTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
