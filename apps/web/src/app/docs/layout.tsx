import { AppSidebar } from "./sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="grid grid-cols-4 gap-24">
      <AppSidebar />
      {children}
    </div>
  );
};

export default Layout;
