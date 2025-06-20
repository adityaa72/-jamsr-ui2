import { SidebarProvider } from "@jamsrui/react";
import { AppSidebar } from "./sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex">
      <SidebarProvider>
        <AppSidebar />
        {children}
      </SidebarProvider>
    </div>
  );
};

export default Layout;
