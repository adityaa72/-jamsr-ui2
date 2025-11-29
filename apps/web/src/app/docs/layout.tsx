import { Sidebar } from "@jamsrui/react";
import { AppSidebar } from "./sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex">
      <Sidebar.Wrapper>
        <div className="w-(--width) group-data-[state=collapsed]/sidebar-wrapper:w-0 duration-200 ease-linear transition-[width]">
          {/* <div className="w-(--width) group-data-[state=collapsed]:w-0" /> */}
          <AppSidebar />
        </div>
        <Sidebar.Inset>{children}</Sidebar.Inset>
      </Sidebar.Wrapper>
    </div>
  );
};

export default Layout;
