"use client";

import { Button } from "@jamsrui/react";
import { Ripple } from "@jamsrui/ripple";

const Page = () => {
  return (
    <div>
      This is ripple Page
      <Button >
        Click me
        <Ripple />
      </Button>
    </div>
  );
};

export default Page;
