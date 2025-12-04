"use client";

import { DocsPage } from "@/components/docs-page";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Checkbox,
  Label,
  NumberField,
  RHFField,
  Switch,
  TextField,
  toast,
} from "@jamsrui/react";
import { FormProvider, useForm } from "react-hook-form";
import { boolean, number, object, string } from "zod";

type FormValues = {
  username: string;
  bio: string;
  age: number;
  acceptedTerms: boolean;
  darkMode: boolean;
};

const schema = object({
  username: string().min(1, "Username is required"),
  bio: string().min(1, "Bio is required"),
  age: number().min(1, "Age is required"),
  acceptedTerms: boolean().refine((val) => val === true, {
    message: "You must accept the terms",
  }),
  darkMode: boolean().refine((val) => val === true, {
    message: "Dark mode is required",
  }),
});

const Page = () => {
  const defaultValues: FormValues = {
    username: "",
    bio: "",
    age: 0,
    acceptedTerms: false,
    darkMode: false,
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
          {/* Username */}
          <RHFField<FormValues> name="username">
            <TextField>
              <Label>Username</Label>
              <RHFField.Input />
              <RHFField.FieldError />
            </TextField>
          </RHFField>
          {/* Bio */}
          <RHFField<FormValues> name="bio">
            <TextField>
              <Label>Bio</Label>
              <RHFField.Textarea />
              <RHFField.FieldError />
            </TextField>
          </RHFField>
          {/* Age */}
          <RHFField<FormValues> name="age">
            <RHFField.NumberField>
              <Label>Age</Label>
              <NumberField.Group>
                <NumberField.Input />
              </NumberField.Group>
            </RHFField.NumberField>
            <RHFField.FieldError />
          </RHFField>
          {/* Accepted Terms */}
          <RHFField<FormValues> name="acceptedTerms">
            <RHFField.Checkbox>
              <Checkbox.Control />
              <Checkbox.Content>
                <Label>Accept Terms and Conditions</Label>
              </Checkbox.Content>
            </RHFField.Checkbox>
            <RHFField.FieldError />
          </RHFField>
          {/* Dark Mode */}
          <RHFField<FormValues> name="darkMode">
            <RHFField.Switch>
              <Switch.Track />
              <Switch.Content>
                <Label>Dark Mode</Label>
              </Switch.Content>
            </RHFField.Switch>
            <RHFField.FieldError />
          </RHFField>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </form>
      </FormProvider>
    </DocsPage>
  );
};

export default Page;
