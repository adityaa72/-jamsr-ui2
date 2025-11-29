import { Sidebar } from "@jamsrui/react";
import { AppSidebar } from "./sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <Sidebar.Wrapper>
      <AppSidebar />
      <Sidebar.Inset>{children}</Sidebar.Inset>
    </Sidebar.Wrapper>
  );
};

export default Layout;
