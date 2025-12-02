"use client";

import { cn, type UIProps } from "@jamsrui/utils";
import { useState } from "react";
import { useFileUpload } from "./use-file-upload";

type UploadProgress = {
  fileId: string;
  progress: number;
  completed: boolean;
};

export const FileUpload = (props: FileUpload.Props) => {
  // State to track upload progress for each file
  const [uploadProgress, setUploadProgress] = useState<UploadProgress[]>([]);

  const { getInputProps, isDragging, files, removeFile } = useFileUpload({
    onFilesAdded(files) {
      setUploadProgress((prev) => [
        ...prev,
        ...files.map((file) => ({
          fileId: file.id,
          progress: 0,
          completed: false,
        })),
      ]);
    },
  });

  return (
    <div>
      <input
        className={cn(
          "w-full h-24 border",
          isDragging && "border-dashed border-primary"
        )}
        multiple
        {...getInputProps({})}
      />
      {files.length > 0 && (
        <ul className="flex gap-4 py-4">
          {files.map((file) => {
            const progress = uploadProgress.find(
              (progress) => progress.fileId === file.id
            );
            return (
              <li key={file.id} className="flex flex-col gap-4">
                <img
                  className="size-20"
                  src={file.preview}
                  alt={file.file.name}
                />
                <p>{file.file.name}</p>
                <button onClick={() => removeFile(file.id)}>Remove</button>
                {progress && <div></div>}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );

  // const { render, ...elementProps } = props;
  // const renderElement = useRenderElement("div", {
  //   props: elementProps,
  // });
  // return renderElement;
};

export namespace FileUpload {
  export interface Props extends UIProps<"div"> {}
}
