"use client";

import { EyeClosedIcon, EyeOpenIcon } from "@jamsrui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@jamsrui/react";
import { useState } from "react";

export const InputPasswordToggle = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <TextField>
      <Label>Password</Label>
      <InputGroup>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your name"
        />
        <InputGroup.Suffix>
          <IconButton
            size="xs"
            radius="full"
            label="Toggle password"
            variant="light"
            onClick={handleTogglePassword}
          >
            {showPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
          </IconButton>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>
  );
};
