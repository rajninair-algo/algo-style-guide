import { Link, useLocation } from "@remix-run/react";
import { ChevronFirst, ChevronLast, MoreVertical, User } from "lucide-react";
import { createContext, ReactNode, useState } from "react";
import { useSidebar } from "~/contexts/SidebarContext";
import NestedMenuItem from "./NestedMenuItem";

export interface SidebarContextType {
  expanded: boolean;
  setExpanded: (val: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);

interface SidebarProps {
  children: ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  // const [expanded, setExpanded] = useState(true);
  const { expanded, setExpanded } = useSidebar();
  const location = useLocation();
  return (
    <aside className="h-screen  flex flex-col bg-pink-500 border-r shadow-sm">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <Link to="/dashboard">
            <img
              src="https:/img.logoipsum.com/243.svg"
              alt="logo"
              className={`overflow-hidden transition-all ${
                expanded ? "w-32" : "w-0"
              }`}
            />
          </Link>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
        <hr />

        <hr />

        <div className="border-t flex p-3">
          {/* Avatar */}
          <div className="bg-blue-200 flex justify-center px-2 py-2 items-center rounded-lg">
            {/* Replace icon with user avatar */}
            <User />
          </div>
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            } `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">RN</h4>
              <span className="text-xs text-gray-600">
                rajninair@algorisys.com
              </span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};
export default Sidebar;
