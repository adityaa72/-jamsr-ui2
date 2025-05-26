import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuItemButton,
  SidebarProvider,
  SidebarToggle,
} from "@jamsr-ui/sidebar";
import { Route } from "next";
import Link from "next/link";

const data: { title: string; items: { title: string; url: Route }[] }[] = [
  {
    title: "Components",
    items: [
      { title: "Accordion", url: "/docs/components/accordion" },
      { title: "Alert", url: "/docs/components/alert" },
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
      { title: "Confirmation", url: "/docs/components/confirmation" },
      { title: "Data Table", url: "/docs/components/data-table" },
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
      { title: "Radio", url: "/docs/components/radio" },
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
    <div>
      <SidebarProvider>
        <SidebarToggle />
        <Sidebar width={250}>
          <SidebarToggle />
          <SidebarContent>
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
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    </div>
  );
};
