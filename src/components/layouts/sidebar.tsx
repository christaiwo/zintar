import { Link, useMatchRoute } from "@tanstack/react-router";
import { ChartBarBigIcon, List, Luggage, Send, Settings } from "lucide-react";
import type { FC } from "react";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const matchRoute = useMatchRoute();

  const isActive = (to: string) => matchRoute({ to, fuzzy: false });

  return (
    <aside className="w-full h-full bg-white border-r border-gray-200 shadow-sm flex flex-col items-center justify-between py-4 space-y-8">
      <div className="border-b w-full h-[25%] flex flex-col items-center justify-center ">
        <Link
          to="/"
          className={`flex flex-col items-center space-y-1 ${
            isActive("/") ? "text-blue-500 font-semibold" : "text-gray-600"
          }`}
        >
          <ChartBarBigIcon className="w-5 h-5" />
          <span className="text-[10px]">Dashboard</span>
        </Link>
      </div>
      <div className="flex flex-col items-center h-[50%] justify-between">
        <Link
          to="/jobs"
          className={`flex flex-col items-center space-y-1 ${
            isActive("/jobs") ? "text-blue-500 font-semibold" : "text-gray-600"
          }`}
        >
          <Luggage className="w-5 h-5" />
          <span className="text-[10px]">Job feed</span>
        </Link>
        <Link
          to="/proposals"
          className={`flex flex-col items-center space-y-1 ${
            isActive("/proposals")
              ? "text-blue-500 font-semibold"
              : "text-gray-600"
          }`}
        >
          <Send className="w-5 h-5" />
          <span className="text-[10px]">Proposals</span>
        </Link>
        <Link
          to="/templates"
          className={`flex flex-col items-center space-y-1 ${
            isActive("/templates")
              ? "text-blue-500 font-semibold"
              : "text-gray-600"
          }`}
        >
          <List className="w-5 h-5" />
          <span className="text-[10px]">Templates</span>
        </Link>
      </div>
      <div className="border-t w-full h-[25%] flex flex-col items-center justify-center ">
        <Link
          to="/settings"
          className={`flex flex-col items-center space-y-1 ${
            isActive("/settings")
              ? "text-blue-500 font-semibold"
              : "text-gray-600"
          }`}
        >
          <Settings className="w-5 h-5" />
          <span className="text-[10px]">Settings</span>
        </Link>
      </div>
    </aside>
  );
};
export default Sidebar;
