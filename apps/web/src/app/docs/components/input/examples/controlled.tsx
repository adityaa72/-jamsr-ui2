"use client";

import { CloseIcon } from "@jamsrui/icons";
import {
  Description,
  IconButton,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@jamsrui/react";
import { useState } from "react";

export const InputControlled = () => {
  const [value, setValue] = useState("");
  const onClear = () => setValue("");
  const hasValue = value.length > 0;
  return (
    <TextField className="max-w-62 w-full">
      <Label>Name</Label>
      <InputGroup>
        <Input value={value} onValueChange={setValue} />
        {hasValue && (
          <InputGroup.Suffix>
            <IconButton
              variant="light"
              radius="full"
              size="xs"
              label="Clear"
              onClick={onClear}
            >
              <CloseIcon className="size-4 text-foreground-secondary" />
            </IconButton>
          </InputGroup.Suffix>
        )}
      </InputGroup>
      <Description>Your name is: {value}</Description>
    </TextField>
  );
};
