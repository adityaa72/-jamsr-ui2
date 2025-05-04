import { AccordionTest1 } from "./components/test1";
import { AccordionTest2 } from "./components/test2";

const Page = () => {
  return (
    <div className="grid gap-4">
      <AccordionTest1 />
      <AccordionTest2 />
    </div>
  );
};

export default Page;
