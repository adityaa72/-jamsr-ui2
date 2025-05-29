import { TableBordered } from "./bordered";
import { TableUsage } from "./usage";

const Page = () => {
  return (
    <div className="grid gap-4">
      <TableUsage />
      <TableBordered />
    </div>
  );
};

export default Page;
