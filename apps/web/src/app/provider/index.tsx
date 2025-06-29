"use client";

import { Toaster } from "@jamsrui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const Providers = (props: Props) => {
  const { children } = props;
  const [queryClient] = useState(new QueryClient());
  return (
    <>
      <Toaster position="bottom-center" richColors theme="dark" />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
};
