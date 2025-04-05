import { LucideIcon } from "lucide-react";
import { useContext } from "react";
import { Link, useLocation } from "@remix-run/react";
import { SidebarContext } from "./Sidebar";

interface ISidebarItemProps {
  icon: LucideIcon;
  text: string;
  to: string;
  alert?: boolean;
}

const SidebarItem = ({
  icon: Icon,
  text,
  to,
  alert = false,
}: ISidebarItemProps) => {
  const { expanded } = useContext(SidebarContext)!;
  const location = useLocation();
  const active = location.pathname.endsWith(to);

  return (
    <Link to={to}>
      <li
        className={`relative flex items-center py-3 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "bg-indigo-50 text-gray-600"
        }`}
      >
        <Icon size={20} />
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-2" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}
        {!expanded && (
          <div
            className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
          >
            {text}
          </div>
        )}
      </li>
    </Link>
  );
};

export default SidebarItem;
