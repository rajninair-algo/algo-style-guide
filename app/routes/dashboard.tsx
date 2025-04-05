import { Outlet } from "@remix-run/react";
import {
  BarChart3,
  Boxes,
  LayoutTemplateIcon,
  LifeBuoy,
  LucideIcon,
  Settings,
  TagsIcon,
  UserCircle,
} from "lucide-react";
import Header from "~/components/Header";
import Title from "~/components/Title";
import Sidebar from "~/components/Sidebar/Sidebar";
import SidebarItem from "~/components/Sidebar/SidebarItem";
import { SidebarProvider } from "~/contexts/SidebarContext";

const Dashboard = () => {
  const menus = [
    { icon: BarChart3, text: "Layouts", to: "statistics" },
    { icon: BarChart3, text: "Form Elements", to: "statistics" },
    {
      icon: UserCircle,
      text: "Table",
      children: [
        { text: "Normal Table", to: "tables/normal" },
        { text: "DataTable", to: "tables/datatable" },
        { text: "DataTable with Filters", to: "tables/filters" },
      ],
    },
    { icon: Boxes, text: "Buttons", to: "tasks" },
    { icon: Settings, text: "Dropdown", to: "settings" },
    { icon: LifeBuoy, text: "Checkbox", to: "help" },
    { icon: LifeBuoy, text: "RadioButtons", to: "help" },
    { icon: LayoutTemplateIcon, text: "Templates", to: "templates" },
  ];

  return (
    <div className="flex">
      <SidebarProvider>
        <Sidebar>
          {menus.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              text={item.text}
              to={item.to}
              alert={item.alert}
            />
          ))}
        </Sidebar>
      </SidebarProvider>

      <main className=" h-screen overflow-scroll flex-1">
        <Header />
        <section className="p-6">
          {/* <Title title="Dashboard" /> */}
          <div className="content-area">
            <Outlet />
          </div>
        </section>
      </main>
    </div>
  );
};
export default Dashboard;
