import { EmailIcon } from "@jamsrui/icons";
import { Sidebar } from "@jamsrui/react";

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

export const AppSidebar = () => {
  return (
    <Sidebar>
      <Sidebar.Container>
        <Sidebar.Content>
          {data.map((item) => {
            const { items, title } = item;
            return (
              <Sidebar.Group key={title}>
                <Sidebar.GroupLabel>{title}</Sidebar.GroupLabel>
                <Sidebar.Menu>
                  {items.map((item) => {
                    return (
                      <Sidebar.MenuItem
                        key={item.title}
                        className="group/collapsible"
                      >
                        <Sidebar.MenuItemButton>
                          {item.icon && item.icon}
                          {item.title}
                        </Sidebar.MenuItemButton>
                      </Sidebar.MenuItem>
                    );
                  })}
                </Sidebar.Menu>
              </Sidebar.Group>
            );
          })}
        </Sidebar.Content>
      </Sidebar.Container>
    </Sidebar>
  );
};
