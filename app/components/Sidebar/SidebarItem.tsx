import React, { useContext, useState, useEffect, ReactNode } from "react";
import { Link, useLocation } from "@remix-run/react";
import { SidebarContext } from "./Sidebar";
import { LucideIcon, ChevronDown, ChevronRight } from "lucide-react";

interface ISidebarItemProps {
  icon: LucideIcon | (() => JSX.Element);
  text: string;
  to?: string;
  alert?: boolean;
  children?: ReactNode;
}

const SidebarItem = ({
  icon: Icon,
  text,
  to,
  alert = false,
  children,
}: ISidebarItemProps) => {
  const { expanded } = useContext(SidebarContext)!;
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const hasChildren = React.Children.count(children) > 0;
  const active = to ? location.pathname.endsWith(to) : false;

  useEffect(() => {
    if (hasChildren) {
      const anyChildActive = React.Children.toArray(children).some(
        (child: any) =>
          child?.props?.to && location.pathname.includes(child.props.to)
      );
      if (anyChildActive) setOpen(true);
    }
  }, [location.pathname, children]);

  const baseClasses = `relative flex items-center py-3 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
    active
      ? "bg-accent text-white"
      : "bg-secondary text-muted hover:bg-primary-light hover:text-primary-dark"
  }`;

  const content = (
    <>
      <Icon className={active ? "text-white" : "text-muted"} />
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-2" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded-full bg-accent ${
            expanded ? "" : "top-2"
          }`}
        />
      )}
      {hasChildren && expanded && (
        <span className={`ml-auto ${active ? "text-white" : "text-muted"}`}>
          {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </span>
      )}
    </>
  );

  return (
    <>
      {hasChildren ? (
        <li className={baseClasses} onClick={() => setOpen(!open)}>
          {content}
        </li>
      ) : (
        <Link to={`/${to}`}>
          <li className={baseClasses}>{content}</li>
        </Link>
      )}

      {hasChildren && (
        <ul
          className={`transition-all duration-300 pl-10 text-sm text-muted space-y-1 ${
            open && expanded
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {children}
        </ul>
      )}
    </>
  );
};

export default SidebarItem;
