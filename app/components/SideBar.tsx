import React from "react";
import {
  Sidebar,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenuItem,
  SidebarContent,
  SidebarMenu,
  SidebarFooter,
} from "./shared/ui/sidebar";
import Link from "next/link";
import { Calendar, Bed, Hotel, Users, BarChart3 } from "lucide-react";

const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    subtitle: "Overview & Analytics",
    url: "/",
    icon: BarChart3,
  },
  {
    id: 2,
    title: "Bookings",
    subtitle: "Manage Reservations",
    url: "Bookings",
    icon: Calendar,
  },
  {
    id: 3,
    title: "Rooms",
    subtitle: "Room Management",
    url: "Rooms",
    icon: Bed,
  },

  {
    id: 4,
    title: "Guests",
    subtitle: "Guest Management",
    url: "Guests",
    icon: Users,
  },
];

const SideBar = () => {
  return (
    <Sidebar className="border-r border-gray-200 bg-white ">
      <SidebarHeader className="border-b border-gray-200 p-6">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Hotel className="size-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">HotelDash</h2>
            <p className="text-sm text-gray-500">Management Suite</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarGroup>
          <div className="mb-4">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider px-3">Navigation</p>
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    asChild
                    className="h-auto p-3 hover:bg-blue-50 data-[active=true]:bg-blue-50 data-[active=true]:border-r-2 data-[active=true]:border-blue-600 rounded-lg"
                  >
                    <Link href={`/${item.url}`} className="flex items-center gap-3">
                      <div className="flex size-8 items-center justify-center rounded-lg bg-gray-100">
                        <item.icon className="size-4 text-gray-600" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-medium text-gray-900">{item?.title}</div>
                        <div className="text-xs text-gray-500">{item.subtitle}</div>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-gray-200 p-4">
        <div className="text-xs text-gray-400">Welcome back, Admin</div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SideBar;
