"use client";
import { useRef, useState } from "react";

export const useCopyToClipboard = (props: useCopyToClipboard.Props) => {
  const [isCopied, setIsCopied] = useState(false);
  const {
    text,
    onCopyError: onError,
    onCopySuccess: onSuccess,
    ctx,
    message,
    timeout = 1000,
  } = props;
  const timeoutRef = useRef<number>(null);
  const context = {
    message,
    ctx,
    text,
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      onSuccess?.(context);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsCopied(false);
      }, timeout);
    } catch (err: unknown) {
      console.log(" err:->", err)
      onError?.(context);
    }
  };

  return {
    isCopied,
    onCopy,
  };
};

export namespace useCopyToClipboard {
  type Context = { message?: string; ctx?: unknown; text: string };
  export interface Props {
    text: string;
    message?: string;
    onCopySuccess?: (ctx: Context) => void;
    onCopyError?: (ctx: Context) => void;
    ctx?: unknown;
    timeout?: number;
  }
}
