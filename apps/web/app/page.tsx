import { AccordionTest1 } from "./test1";
import { AccordionTest2 } from "./test2";

const Page = () => {
  return (
    <div className="bg-black text-white size-full h-screen">
      <h1 className="text-fuchsia-50">Hey there</h1>
      <div className="grid gap-4">
        <AccordionTest1 />
        <AccordionTest2 />
      </div>
    </div>
  );
};

export default Page;
