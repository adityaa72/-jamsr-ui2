"use client";

import { DocsPage } from "@/components/docs-page";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, toast } from "@jamsrui/react";
import { FormProvider, useForm } from "react-hook-form";
import { object, string } from "zod";
import { RHFInput } from "./components/rhf-input";

type FormValues = {
  username: string;
  firstName: string;
};

const schema = object({
  username: string().min(1, "Username is required"),
  firstName: string().min(1, "firstName is required"),
});

const Page = () => {
  const defaultValues: FormValues = {
    username: "",
    firstName: "",
  };
  const form = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
    toast.success(JSON.stringify(values));
  });

  return (
    <DocsPage title="React Hook Form" description="">
      Page
      <FormProvider {...form}>
        <form onSubmit={onSubmit} className="flex flex-col gap-4 max-w-md">
          <RHFInput name="text2" label="Username" />
          <RHFInput name="username" label="Username" />
          <RHFInput name="text" label="Username" />
          <RHFInput name="firstName" label="firstName" />
          <Button type="submit" color="primary">
            Submit
          </Button>
        </form>
      </FormProvider>
    </DocsPage>
  );
};

export default Page;
