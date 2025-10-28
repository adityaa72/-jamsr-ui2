"use client";

import { AppLogo } from "@/components/app-logo";
import {
  Chip,
  Sidebar,
  SidebarBackdrop,
  SidebarBody,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuItemButton,
  SidebarToggle,
  Text,
} from "@jamsrui/react";
import { Route } from "next";
import Link from "next/link";

const data: { title: string; items: { title: string; url: Route }[] }[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Theme",
        url: "/docs/theme",
      },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Accordion", url: "/docs/components/accordion" },
      { title: "Alert", url: "/docs/components/alert" },
      { title: "Alert Dialog", url: "/docs/components/alert-dialog" },
      { title: "Alert Popover", url: "/docs/components/alert-popover" },
      { title: "Autocomplete", url: "/docs/components/autocomplete" },
      { title: "Avatar", url: "/docs/components/avatar" },
      { title: "Breadcrumb", url: "/docs/components/breadcrumb" },
      { title: "Button", url: "/docs/components/button" },
      { title: "Card", url: "/docs/components/card" },
      { title: "Charts", url: "/docs/components/charts" },
      { title: "Checkbox", url: "/docs/components/checkbox" },
      { title: "Chip", url: "/docs/components/chip" },
      { title: "Circular Progress", url: "/docs/components/circular-progress" },
      { title: "Clipboard", url: "/docs/components/clipboard" },
      { title: "Collapsible", url: "/docs/components/collapsible" },
      { title: "Context Menu", url: "/docs/components/context-menu" },
      { title: "Data Grid", url: "/docs/components/data-grid" },
      { title: "Date Input", url: "/docs/components/date-input" },
      { title: "Date Picker", url: "/docs/components/date-picker" },
      { title: "Dialog", url: "/docs/components/dialog" },
      { title: "Divider", url: "/docs/components/divider" },
      { title: "Drawer", url: "/docs/components/drawer" },
      { title: "Editor", url: "/docs/components/editor" },
      { title: "Header", url: "/docs/components/header" },
      { title: "Icon Button", url: "/docs/components/icon-button" },
      { title: "Input", url: "/docs/components/input" },
      { title: "Kbd", url: "/docs/components/kbd" },
      { title: "Linear Progress", url: "/docs/components/linear-progress" },
      { title: "Link", url: "/docs/components/link" },
      { title: "Menu", url: "/docs/components/menu" },
      { title: "Number Input", url: "/docs/components/number-input" },
      { title: "Otp Input", url: "/docs/components/otp-input" },
      { title: "Pagination", url: "/docs/components/pagination" },
      { title: "Popover", url: "/docs/components/popover" },
      { title: "Radio Group", url: "/docs/components/radio-group" },
      { title: "Rating", url: "/docs/components/rating" },
      { title: "Ripple", url: "/docs/components/ripple" },
      { title: "Scroll Area", url: "/docs/components/scroll-area" },
      { title: "Select", url: "/docs/components/select" },
      { title: "Sidebar", url: "/docs/components/sidebar" },
      { title: "Skeleton", url: "/docs/components/skeleton" },
      { title: "Slider", url: "/docs/components/slider" },
      { title: "Switch", url: "/docs/components/switch" },
      { title: "Table", url: "/docs/components/table" },
      { title: "Tabs", url: "/docs/components/tabs" },
      { title: "Tags Input", url: "/docs/components/tags-input" },
      { title: "Time Input", url: "/docs/components/time-input" },
      { title: "Text", url: "/docs/components/text" },
      { title: "Textarea", url: "/docs/components/textarea" },
      { title: "Toast", url: "/docs/components/toast" },
      { title: "Toggle", url: "/docs/components/toggle" },
      { title: "Tooltip", url: "/docs/components/tooltip" },
    ],
  },
];

export const AppSidebar = () => {
  return (
    <>
      <Sidebar width={250}>
        <SidebarBackdrop />
        <SidebarContent>
          <SidebarHeader className="flex justify-between border-b border-divider">
            <AppLogo />
            <SidebarToggle />
          </SidebarHeader>
          <SidebarBody>
            {data.map((item) => {
              const { items, title } = item;
              return (
                <SidebarGroup key={title}>
                  <SidebarGroupLabel>{title}</SidebarGroupLabel>
                  <SidebarMenu>
                    {items.map((item) => {
                      return (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuItemButton
                            render={<Link href={item.url} />}
                          >
                            {item.title}
                          </SidebarMenuItemButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroup>
              );
            })}
          </SidebarBody>
          <SidebarFooter className="flex gap-2 items-center">
            <Text>Version 0.2.0</Text>
            <Chip color="primary" size="xs">
              Beta
            </Chip>
          </SidebarFooter>
        </SidebarContent>
      </Sidebar>
    </>
  );
};
