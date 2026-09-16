import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
        <main className="container mx-auto mt-10">
            <Outlet />
        </main>
    </div>
  )
}
