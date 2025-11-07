import { Input } from "@jamsrui/react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

export const RHFInput = <T extends FieldValues>(
  props: {
    name: Path<T>;
    label?: string;
  } & Input.Props
) => {
  const { name, label, ...inputProps } = props;
  const { control } = useFormContext<T>();
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { value, onChange, onBlur, name, ref, disabled },
        fieldState: { invalid, error },
      }) => {
        return (
          <Input
            name={name}
            value={value}
            onValueChange={onChange}
            onBlur={onBlur}
            isInvalid={invalid}
            data-invalid={invalid}
            errorMessage={error?.message}
            label={label}
            isDisabled={disabled}
            ref={ref}
            {...inputProps}
          />
        );
      }}
    />
  );
};
