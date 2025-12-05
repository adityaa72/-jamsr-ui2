"use client";

import { DocsPage } from "@/components/docs-page";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Checkbox,
  Label,
  NumberField,
  OtpInput,
  Radio,
  RHFField,
  Select,
  Switch,
  TextField,
  toast,
} from "@jamsrui/react";
import { FormProvider, useForm } from "react-hook-form";
import z, { boolean, number, object, string } from "zod";

type FormValues = {
  username: string;
  bio: string;
  age: number;
  acceptedTerms: boolean;
  darkMode: boolean;
  gender: "male" | "female";
  otp: string;
  country: string;
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
  gender: z.enum(["male", "female"]),
  otp: string().length(6, "OTP is required"),
  country: string().min(1, "Country is required"),
});

const Page = () => {
  const defaultValues: FormValues = {
    username: "",
    bio: "",
    age: 0,
    acceptedTerms: false,
    darkMode: false,
    gender: "" as FormValues["gender"],
    otp: "",
    country: "",
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
          {/* Gender */}
          <RHFField<FormValues> name="gender">
            <RHFField.RadioGroup>
              <Label>Gender</Label>
              <Radio value="male">
                <Radio.Control />
                <Radio.Content>
                  <Label>Male</Label>
                </Radio.Content>
              </Radio>
              <Radio value="female">
                <Radio.Control />
                <Radio.Content>
                  <Label>Female</Label>
                </Radio.Content>
              </Radio>
            </RHFField.RadioGroup>
            <RHFField.FieldError />
          </RHFField>
          {/* OTP */}
          <RHFField<FormValues> name="otp">
            <RHFField.OtpInput maxLength={6}>
              <OtpInput.Group>
                <OtpInput.Slot index={0} />
                <OtpInput.Slot index={1} />
                <OtpInput.Slot index={2} />
              </OtpInput.Group>
              <OtpInput.Separator />
              <OtpInput.Group>
                <OtpInput.Slot index={3} />
                <OtpInput.Slot index={4} />
                <OtpInput.Slot index={5} />
              </OtpInput.Group>
            </RHFField.OtpInput>
            <RHFField.FieldError />
          </RHFField>
          {/* Country */}
          <RHFField<FormValues> name="country">
            <RHFField.Select placeholder="Select a country...">
              <Label>Country</Label>
              <Select.Trigger />
              <Select.Popover>
                <Select.Content>
                  <Select.Item value="us" textValue="United States">
                    United States
                    <Select.ItemIndicator />
                  </Select.Item>
                  <Select.Item value="ca" textValue="Canada">
                    Canada
                    <Select.ItemIndicator />
                  </Select.Item>
                  <Select.Item value="mx" textValue="Mexico">
                    Mexico
                    <Select.ItemIndicator />
                  </Select.Item>
                </Select.Content>
              </Select.Popover>
            </RHFField.Select>
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
