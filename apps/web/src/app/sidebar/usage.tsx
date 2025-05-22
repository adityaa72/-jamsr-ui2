import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuItemButton,
} from "@jamsr-ui/sidebar";
import { SVGProps } from "react";

const EmailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    color="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m2 6 6.913 3.917c2.549 1.444 3.625 1.444 6.174 0L22 6"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.016 13.476c.065 3.065.098 4.598 1.229 5.733 1.131 1.136 2.705 1.175 5.854 1.254 1.94.05 3.862.05 5.802 0 3.149-.079 4.723-.118 5.854-1.254 1.131-1.135 1.164-2.668 1.23-5.733.02-.986.02-1.966 0-2.952-.066-3.065-.099-4.598-1.23-5.733-1.131-1.136-2.705-1.175-5.854-1.254a115.11 115.11 0 0 0-5.802 0c-3.149.079-4.723.118-5.854 1.254-1.131 1.135-1.164 2.668-1.23 5.733a69.066 69.066 0 0 0 0 2.952Z"
    />
  </svg>
);

const data = [
  {
    title: "Platform",
    items: [
      {
        title: "Playground",
        icon: <EmailIcon />,
        isActive: true,
      },
      {
        title: "Models",
        icon: <EmailIcon />,
      },
      {
        title: "Documentation",
        icon: <EmailIcon />,
      },
      {
        title: "Settings",
        icon: <EmailIcon />,
      },
    ],
  },
  {
    title: "Projects",
    items: [
      {
        title: "Design Engineering",
        url: "#",
        icon: <EmailIcon />,
      },
      {
        title: "Sales & Marketing",
        url: "#",
        icon: <EmailIcon />,
      },
      {
        title: "Travel",
        url: "#",
        icon: <EmailIcon />,
      },
    ],
  },
];

export const SidebarUsage = () => {
  return (
    <Sidebar className="max-w-[250px]">
      <SidebarContent>
        {data.map((item) => {
          const { items, title } = item;
          return (
            <SidebarGroup key={title}>
              <SidebarGroupLabel>{title}</SidebarGroupLabel>
              <SidebarMenu>
                {items.map((item) => {
                  return (
                    <SidebarMenuItem
                      key={item.title}
                      className="group/collapsible"
                    >
                      <SidebarMenuItemButton>
                        {item.icon && item.icon}
                        {item.title}
                      </SidebarMenuItemButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
};
