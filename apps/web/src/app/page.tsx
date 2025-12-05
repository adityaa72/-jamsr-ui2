import { Button, ButtonConfig } from "@jamsrui/react";
import Link from "next/link";
import { CustomLoading } from "./page-custom";

const Page = () => {
  return (
    <div className="">
      <Link href="/docs/components/accordion">Go to docs</Link>
      <ButtonConfig slots={{ loading: CustomLoading }}>
        <Button color="primary" isLoading>
          <Button.Loading>Saving...</Button.Loading>
        </Button>
      </ButtonConfig>
    </div>
  );
};

export default Page;
