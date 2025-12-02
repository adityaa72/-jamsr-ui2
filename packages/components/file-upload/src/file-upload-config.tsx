"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";
import { FileUpload } from "./file-upload";

export const [FileUploadConfig, useFileUploadConfig] = createConfigContext({
  displayName: "FileUploadConfig",
});

export namespace FileUploadConfig {
  export interface Props
    extends FileUpload.Props,
      GlobalConfigProps<FileUpload.Props> {}
}
