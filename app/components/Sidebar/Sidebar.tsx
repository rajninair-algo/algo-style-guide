import { Link, useLocation } from "@remix-run/react";
import { ChevronFirst, ChevronLast, MoreVertical, User } from "lucide-react";
import { createContext, ReactNode, useState } from "react";
import { useSidebar } from "~/contexts/SidebarContext";

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
    <aside className="h-screen flex flex-col bg-secondary border-r shadow-sm">
      <nav className="h-full flex flex-col  border-r shadow-sm">
        {/* Logo */}
        <div className="p-4 pb-2 flex justify-between items-center relative">
          <Link to="/dashboard">
            {/* <h3
              className={`overflow-hidden transition-all ${
                expanded ? "w-32" : "w-0"
              }`}
            >
              ALGORISYS
            </h3> */}
            {expanded && (
              <h3 className="font-bold text-2xl text-primary">ALGORISYS</h3>
            )}
            {!expanded && (
              <h3 className="font-bold text-2xl text-primary">A</h3>
            )}

            {/* <img
              src="https:/img.logoipsum.com/243.svg"
              alt="logo"
              className={`overflow-hidden transition-all ${
                expanded ? "w-32" : "w-0"
              }`}
            /> */}
          </Link>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className={`p-1.5 rounded-lg bg-white border  text-primary hover:bg-accent hover:text-white relative ${
              !expanded &&
              "rounded-l-0 rounded-r-lg -right-[3.5rem] -top-[.5rem] z-30"
            } `}
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        {/* Menu list */}
        <SidebarContext.Provider value={{ expanded, setExpanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        {/* Footer Details */}
        <div className="border-t border-muted-light flex p-3">
          {/* Avatar */}
          <div className="bg-primary text-white flex justify-center px-2 py-2 items-center rounded-lg">
            <User />
          </div>
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            } `}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-text">RN</h4>
              <span className="text-xs text-muted-foreground">
                rajninair@algorisys.com
              </span>
            </div>
            <MoreVertical size={20} className="text-muted-foreground" />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
