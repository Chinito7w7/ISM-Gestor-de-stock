import { Outlet } from "react-router";
import { AppSidebar } from "../components/dashboard/AppSideBar";
import { Topbar } from "../components/dashboard/Topbar";



export function DashboardLayout() {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <Topbar />
        <main className="flex-1 p-6">
            <Outlet/>
        </main>
      </div>
    </div>
  );
}
