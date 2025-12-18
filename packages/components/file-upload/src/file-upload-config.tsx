"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";
import { FileUpload } from "./file-upload";

export const [FileUploadConfig, useFileUploadConfig] = createConfigContext({
  displayName: "FileUploadConfig",
});

export namespace FileUploadConfig {
  export interface Props extends WithGlobalConfig<FileUpload.Props> {}
}
