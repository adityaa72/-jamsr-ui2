"use client";

import { useCallback, useId, useMemo, useState } from "react";

export const useFieldA11y = () => {
  const labelId = useId();
  const descriptionId = useId();
  const inputId = useId();
  const fieldErrorId = useId();

  const [hasLabel, setHasLabel] = useState(false);
  const [hasDescription, setHasDescription] = useState(false);
  const [hasFieldError, setHasFieldError] = useState(false);

  // Ref callbacks that track mount/unmount
  const setLabelRef = useCallback((node: HTMLLabelElement | null) => {
    setHasLabel(node !== null);
  }, []);

  const setDescriptionRef = useCallback((node: HTMLElement | null) => {
    setHasDescription(node !== null);
  }, []);

  const setFieldErrorRef = useCallback((node: HTMLElement | null) => {
    setHasFieldError(node !== null);
  }, []);

  const describedByIds = useMemo(() => {
    const ids = [];
    if (hasDescription) {
      ids.push(descriptionId);
    }
    if (hasFieldError) {
      ids.push(fieldErrorId);
    }
    return ids.length === 0 ? undefined : ids.filter(Boolean).join(" ");
  }, [descriptionId, fieldErrorId, hasDescription, hasFieldError]);

  const getLabelProps = useCallback(() => {
    return {
      id: labelId,
      htmlFor: inputId,
    };
  }, [labelId, inputId]);

  const getDescriptionProps = useCallback(() => {
    return {
      id: descriptionId,
    };
  }, [descriptionId]);

  const getFieldErrorProps = useCallback(() => {
    return {
      id: fieldErrorId,
    };
  }, [fieldErrorId]);

  const getInputProps = useCallback(() => {
    return {
      id: inputId,
      "aria-describedby": describedByIds,
      "aria-labelledby": labelId,
    };
  }, [describedByIds, labelId, inputId]);

  return useMemo(() => {
    return {
      getLabelProps,
      getDescriptionProps,
      getInputProps,
      getFieldErrorProps,
      setLabelRef,
      setDescriptionRef,
      setFieldErrorRef,
      hasLabel,
      hasDescription,
      hasFieldError,
      labelId,
      descriptionId,
      inputId,
      fieldErrorId,
    };
  }, [
    getLabelProps,
    getDescriptionProps,
    getInputProps,
    getFieldErrorProps,
    setLabelRef,
    setDescriptionRef,
    setFieldErrorRef,
    hasLabel,
    hasDescription,
    hasFieldError,
    labelId,
    descriptionId,
    inputId,
    fieldErrorId,
  ]);
};
