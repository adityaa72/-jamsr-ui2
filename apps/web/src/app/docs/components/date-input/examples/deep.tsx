import React, { useState, useRef, useEffect } from "react";
import { format, parse, isValid, set, getDaysInMonth, isDate } from "date-fns";

const DateInput = ({ value, onChange, min, max, ...props }) => {
  const [date, setDate] = useState(value || new Date());
  const [focusedSegment, setFocusedSegment] = useState(null);

  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  const segments = [
    { ref: dayRef, type: "day", value: format(date, "dd"), min: 1, max: 31 },
    {
      ref: monthRef,
      type: "month",
      value: format(date, "MM"),
      min: 1,
      max: 12,
    },
    {
      ref: yearRef,
      type: "year",
      value: format(date, "yyyy"),
      min: 1900,
      max: 2100,
    },
  ];

  // Update internal date when value prop changes
  useEffect(() => {
    if (value && isValid(value)) {
      setDate(value);
    }
  }, [value]);

  // Focus management
  useEffect(() => {
    if (focusedSegment !== null && segments[focusedSegment]?.ref.current) {
      segments[focusedSegment].ref.current.focus();
    }
  }, [focusedSegment]);

  const getMaxDay = (month, year) => {
    try {
      const tempDate = set(new Date(year, month - 1), { date: 1 });
      return getDaysInMonth(tempDate);
    } catch {
      return 31;
    }
  };

  const updateDate = (newDate) => {
    if (isValid(newDate)) {
      setDate(newDate);
      onChange?.(newDate);
    }
  };

  const handleSegmentChange = (segmentIndex, newValue) => {
    const segment = segments[segmentIndex];
    let numValue = parseInt(newValue, 10);

    if (isNaN(numValue)) return;

    // Clamp value within min/max range
    numValue = Math.max(segment.min, Math.min(segment.max, numValue));

    let newDate;

    try {
      switch (segment.type) {
        case "day":
          const currentMonth = parseInt(segments[1].value, 10);
          const currentYear = parseInt(segments[2].value, 10);
          const maxDay = getMaxDay(currentMonth, currentYear);
          numValue = Math.min(numValue, maxDay);
          newDate = set(date, { date: numValue });
          break;
        case "month":
          numValue = Math.min(12, Math.max(1, numValue));
          newDate = set(date, { month: numValue - 1 });

          // Adjust day if it exceeds max days in new month
          const maxDayInMonth = getMaxDay(
            numValue,
            parseInt(segments[2].value, 10)
          );
          const currentDay = parseInt(segments[0].value, 10);
          if (currentDay > maxDayInMonth) {
            newDate = set(newDate, { date: maxDayInMonth });
          }
          break;
        case "year":
          newDate = set(date, { year: numValue });

          // Adjust day if it exceeds max days in February for leap years
          const maxDayInYear = getMaxDay(
            parseInt(segments[1].value, 10),
            numValue
          );
          const currentDayInYear = parseInt(segments[0].value, 10);
          if (currentDayInYear > maxDayInYear) {
            newDate = set(newDate, { date: maxDayInYear });
          }
          break;
        default:
          return;
      }

      updateDate(newDate);
    } catch (error) {
      console.error("Error updating date:", error);
    }
  };

  const handleKeyDown = (segmentIndex, e) => {
    const segment = segments[segmentIndex];

    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        setFocusedSegment(Math.max(0, segmentIndex - 1));
        break;

      case "ArrowRight":
        e.preventDefault();
        setFocusedSegment(Math.min(2, segmentIndex + 1));
        break;

      case "ArrowUp":
        e.preventDefault();
        const currentValue = parseInt(segment.value, 10);
        const newValue = Math.min(segment.max, currentValue + 1);
        handleSegmentChange(segmentIndex, newValue.toString());
        break;

      case "ArrowDown":
        e.preventDefault();
        const currentVal = parseInt(segment.value, 10);
        const newVal = Math.max(segment.min, currentVal - 1);
        handleSegmentChange(segmentIndex, newVal.toString());
        break;

      case "Home":
        e.preventDefault();
        handleSegmentChange(segmentIndex, segment.min.toString());
        break;

      case "End":
        e.preventDefault();
        let maxValue = segment.max;
        if (segment.type === "day") {
          maxValue = getMaxDay(
            parseInt(segments[1].value, 10),
            parseInt(segments[2].value, 10)
          );
        }
        handleSegmentChange(segmentIndex, maxValue.toString());
        break;

      case "Backspace":
      case "Delete":
        e.preventDefault();
        // Clear the segment and keep focus
        const emptyValue = segment.type === "year" ? "" : "0";
        handleSegmentChange(segmentIndex, emptyValue);
        break;
    }

    // Handle number input
    if (e.key >= "0" && e.key <= "9") {
      e.preventDefault();

      const digit = e.key;
      let newValue;

      if (segment.type === "year") {
        // For year, append digits until we have 4
        newValue = (segment.value + digit).slice(-4);
        if (newValue.length === 4) {
          handleSegmentChange(segmentIndex, newValue);
          // Year is the last segment, no auto-advance
        } else {
          // Update display but don't commit yet
          const tempDate = new Date(date);
          switch (segment.type) {
            case "day":
              tempDate.setDate(parseInt(newValue.padStart(2, "0"), 10));
              break;
            case "month":
              tempDate.setMonth(parseInt(newValue.padStart(2, "0"), 10) - 1);
              break;
            case "year":
              tempDate.setFullYear(parseInt(newValue.padStart(4, "2000"), 10));
              break;
          }
          if (isValid(tempDate)) {
            setDate(tempDate);
          }
        }
      } else {
        // For day and month
        if (segment.value === "00" || segment.value.startsWith("0")) {
          newValue = digit;
        } else {
          newValue = segment.value.slice(-1) + digit;
        }

        const numValue = parseInt(newValue, 10);

        // Auto-advance logic
        if (segment.type === "day") {
          if (numValue > 3 || newValue.length === 2) {
            handleSegmentChange(segmentIndex, newValue);
            if (segmentIndex < 2) {
              setTimeout(() => setFocusedSegment(segmentIndex + 1), 10);
            }
          } else {
            handleSegmentChange(segmentIndex, newValue);
          }
        } else if (segment.type === "month") {
          const monthNum = parseInt(newValue, 10);
          if ((monthNum >= 3 && monthNum <= 9) || newValue.length === 2) {
            handleSegmentChange(segmentIndex, newValue);
            if (segmentIndex < 2) {
              setTimeout(() => setFocusedSegment(segmentIndex + 1), 10);
            }
          } else {
            handleSegmentChange(segmentIndex, newValue);
          }
        }
      }
    }
  };

  const handleFocus = (segmentIndex) => {
    setFocusedSegment(segmentIndex);
  };

  const handleBlur = () => {
    // Don't clear focusedSegment immediately to prevent flickering
    setTimeout(() => setFocusedSegment(null), 100);
  };

  return (
    <div
      role="group"
      aria-label="Date input"
      className="date-input"
      style={{
        display: "inline-flex",
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "4px 8px",
        gap: "2px",
        background: "white",
        minWidth: "120px",
      }}
      {...props}
    >
      {segments.map((segment, index) => (
        <React.Fragment key={segment.type}>
          <div
            ref={segment.ref}
            contentEditable
            suppressContentEditableWarning
            role="spinbutton"
            aria-label={segment.type}
            aria-valuenow={parseInt(segment.value, 10)}
            aria-valuemin={segment.min}
            aria-valuemax={
              segment.type === "day"
                ? getMaxDay(
                    parseInt(segments[1].value, 10),
                    parseInt(segments[2].value, 10)
                  )
                : segment.max
            }
            aria-valuetext={segment.value}
            tabIndex={focusedSegment === index ? 0 : -1}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onFocus={() => handleFocus(index)}
            onBlur={handleBlur}
            style={{
              minWidth: segment.type === "year" ? "40px" : "20px",
              outline: "none",
              background: focusedSegment === index ? "#e3f2fd" : "transparent",
              borderRadius: "2px",
              padding: "2px 4px",
              textAlign: "center",
              userSelect: "none",
              cursor: "text",
            }}
          >
            {segment.value}
          </div>
          {index < segments.length - 1 && (
            <span style={{ color: "#666" }}>/</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default DateInput;
