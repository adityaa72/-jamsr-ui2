"use client";

import { Clipboard } from "@jamsrui/react";

export const ClipboardSoundEffect = () => {
  const onSuccess = () => {
    // Play sound effect
    const audio = new Audio("/copy.mp3");
    void audio.play();

    alert("Copied to clipboard");
  };

  const onError = () => {
    alert("Failed to copy to clipboard");
  };
  return (
    <Clipboard
      text="Hello world!"
      onCopySuccess={onSuccess}
      onCopyError={onError}
    >
      Click me to copy text with sound
    </Clipboard>
  );
};
