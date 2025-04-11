import { Outlet } from "@remix-run/react";
import {
  BarChart3,
  Boxes,
  LayoutTemplateIcon,
  LifeBuoy,
  Link,
  LucideIcon,
  Settings,
  Table,
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
    {
      icon: BarChart3,
      text: "Layouts",
      children: [
        { text: "Font & Theme Colors", to: "dashboard/theme-colors" },
        { text: "Layout One", to: "dashboard/layout1" },
        { text: "Layout Two", to: "dashboard/layout2" },
      ],
    },
    // { icon: BarChart3, text: "Form Elements", to: "dashboard/form-elements" },
    {
      icon: UserCircle,
      text: "Table",
      children: [
        { text: "Simple Table", to: "dashboard/simple-table" },
        {
          text: "Table with No filters",
          to: "dashboard/dynamic-table-without-filters",
        },
        {
          text: "Table with filters",
          to: "dashboard/dynamic-table-with-filters",
        },
        {
          text: "Pagination Styles",
          to: "dashboard/pagination-styles",
        },
      ],
    },

    {
      icon: UserCircle,
      text: "Form Elements",
      children: [
        {
          text: "Buttons",
          to: "dashboard/button-options",
        },

        {
          text: "Checkboxes",
          to: "dashboard/checkboxes",
        },
        {
          text: "Radio Buttons",
          to: "dashboard/radio-buttons",
        },
        {
          text: "File Upload",
          to: "dashboard/fileupload",
        },
        { text: "Form Fields", to: "dashboard/form-elements" },
        { text: "Form Templates", to: "dashboard/form-templates" },
      ],
    },

    { icon: Settings, text: "Dropdown", to: "dashboard/settings" },
    { icon: LifeBuoy, text: "Checkbox", to: "dashboard/dynamic-checkboxes" },
    { icon: LifeBuoy, text: "RadioButtons", to: "dashboard/help" },
  ];

  return (
    <div className="flex">
      <SidebarProvider>
        <Sidebar>
          {menus.map((item, index) => {
            const Icon = item.icon;

            return item.children ? (
              <SidebarItem key={index} icon={Icon} text={item.text}>
                {item.children.map((child, idx) => (
                  <SidebarItem
                    key={idx}
                    icon={() => (
                      <span className="w-2 h-2 rounded-full bg-gray-400" />
                    )}
                    text={child.text}
                    to={child.to}
                  />
                ))}
              </SidebarItem>
            ) : (
              <SidebarItem
                key={index}
                icon={Icon}
                text={item.text}
                to={item.to}
              />
            );
          })}
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
