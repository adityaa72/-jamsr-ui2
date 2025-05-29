"use client";

import React, { useRef, useState } from "react";

interface SliderProps {
  min: number;
  max: number;
  step: number;
  values: number[];
  onChange: (values: number[]) => void;
}

export const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step,
  values,
  onChange,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  const handleMouseDown = (index: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    setDraggingIndex(index);

    const onMouseMove = (e: MouseEvent) => {
      if (trackRef.current) {
        const trackRect = trackRef.current.getBoundingClientRect();
        const clickX = e.clientX - trackRect.left;
        const percentage = Math.max(0, Math.min(1, clickX / trackRect.width));
        const rawValue = min + percentage * (max - min);
        const snappedValue = Math.round((rawValue - min) / step) * step + min;
        let clampedValue = Math.max(min, Math.min(max, snappedValue));

        // Prevent thumbs from crossing adjacent thumbs
        if (index > 0 && clampedValue < values[index - 1]) {
          clampedValue = values[index - 1];
        }
        if (index < values.length - 1 && clampedValue > values[index + 1]) {
          clampedValue = values[index + 1];
        }

        const newValues = [...values];
        newValues[index] = clampedValue;
        onChange(newValues);
      }
    };

    const onMouseUp = () => {
      setDraggingIndex(null);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const handleTrackMouseDown = (e: React.MouseEvent) => {
    if (e.target !== trackRef.current || !trackRef.current) return;

    const trackRect = trackRef.current.getBoundingClientRect();
    const clickX = e.clientX - trackRect.left;
    const percentage = Math.max(0, Math.min(1, clickX / trackRect.width));
    const clickedValue = min + percentage * (max - min);
    const snappedValue = Math.round((clickedValue - min) / step) * step + min;
    const clampedValue = Math.max(min, Math.min(max, snappedValue));

    // Find the closest thumb
    let closestIndex = 0;
    let minDistance = Math.abs(values[0] - clampedValue);
    for (let i = 1; i < values.length; i++) {
      const distance = Math.abs(values[i] - clampedValue);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }

    // Move the closest thumb to the clicked position
    const newValues = [...values];
    newValues[closestIndex] = clampedValue;

    // Ensure the new position respects adjacent thumbs
    if (
      closestIndex > 0 &&
      newValues[closestIndex] < newValues[closestIndex - 1]
    ) {
      newValues[closestIndex] = newValues[closestIndex - 1];
    }
    if (
      closestIndex < values.length - 1 &&
      newValues[closestIndex] > newValues[closestIndex + 1]
    ) {
      newValues[closestIndex] = newValues[closestIndex + 1];
    }

    onChange(newValues);
  };

  const percentage = (value: number) => ((value - min) / (max - min)) * 100;

  // Highlight from the smallest to the largest thumb value
  const sortedValues = [...values].sort((a, b) => a - b);
  const highlightLeft = percentage(sortedValues[0]);
  const highlightWidth =
    percentage(sortedValues[sortedValues.length - 1]) - highlightLeft;

  return (
    <div
      ref={trackRef}
      onMouseDown={handleTrackMouseDown}
      className="relative w-full h-4 bg-gray-200 rounded-full cursor-pointer"
    >
      <div
        className="absolute h-full bg-blue-500 rounded"
        style={{
          left: `${highlightLeft}%`,
          width: `${highlightWidth}%`,
        }}
      />
      {values.map((value, index) => (
        <div
          key={index}
          className={`absolute w-5 h-5 bg-white border-2 border-blue-500 rounded-full shadow-md transform -translate-y-1/2 ${
            draggingIndex === index ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            left: `${percentage(value)}%`,
            top: "50%",
          }}
          onMouseDown={handleMouseDown(index)}
        />
      ))}
    </div>
  );
};
