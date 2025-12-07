import { FileUpload as FileUploadRoot } from "./file-upload";
import { FileUploadConfig, useFileUploadConfig } from "./file-upload-config";

export { FileUploadConfig, useFileUploadConfig } from "./file-upload-config";
export { useFileUpload } from "./use-file-upload";
export { formatBytes } from "./utils";

export const FileUpload = Object.assign(FileUploadRoot, {});

export namespace FileUpload {
  export interface Props extends FileUploadRoot.Props {}
  export interface Config extends FileUploadConfig.Props {}
}
