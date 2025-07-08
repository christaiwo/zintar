import Sidebar from "@/components/layouts/sidebar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="w-full h-screen flex flex-row ">
        <div className="w-[80%] h-full flex flex-col justify-between p-2">
          <div>
            <Outlet />
          </div>
          <footer className="mt-6 text-xs text-indigo-200 text-center">
            Powered by Zintar — v1.0
          </footer>
        </div>
        <div className="w-[20%] h-full border-l ">
          <Sidebar />
        </div>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
