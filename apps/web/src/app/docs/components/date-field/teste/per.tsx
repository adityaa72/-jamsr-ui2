import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { getDaysInMonth } from "date-fns";

type ISODate = `${string}-${string}-${string}`;
type SegmentKey = "day" | "month" | "year";

type Segments = {
  day: string; // "01".."31"
  month: string; // "01".."12"
  year: string; // "0001".."9999"
};

type Props = {
  id?: string;
  name?: string;
  value?: ISODate;
  defaultValue?: ISODate;
  min?: ISODate;
  max?: ISODate;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
  onChange?: (value: ISODate | "") => void;
};

const clamp = (n: number, lo: number, hi: number) =>
  Math.min(Math.max(n, lo), hi);
const pad2 = (n: number) => n.toString().padStart(2, "0");
const padYear = (n: number) => n.toString().padStart(4, "0");

function parseISO(iso?: string): Segments | null {
  if (!iso) return null;
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return null;
  return { year: m[1]!, month: m[2]!, day: m[3]! };
}
const toISO = (s: Segments) => `${s.year}-${s.month}-${s.day}` as ISODate;
const isComplete = (s: Segments) =>
  s.year.length === 4 && s.month.length === 2 && s.day.length === 2;
const withinRange = (iso: ISODate, min?: ISODate, max?: ISODate) =>
  (!min || iso >= min) && (!max || iso <= max);

type SegmentProps = {
  label: string;
  valueText: string; // visible text (DD/MM/YYYY when empty)
  rawValue: string; // raw digits
  setRaw: (digits: string, opts?: { replace?: boolean }) => void;
  min: number;
  max: number;
  maxLen: number;
  step: (delta: number) => void;
  onMovePrev: () => void;
  onMoveNext: () => void;
  isActive: boolean;
  onActivate: () => void;
  disabled?: boolean;
  readOnly?: boolean;
};

// Reusable contenteditable spinbutton segment
const Segment = React.forwardRef<HTMLDivElement, SegmentProps>(function Segment(
  {
    label,
    valueText,
    rawValue,
    setRaw,
    min,
    max,
    maxLen,
    step,
    onMovePrev,
    onMoveNext,
    isActive,
    onActivate,
    disabled,
    readOnly,
  },
  ref
) {
  const divRef = useRef<HTMLDivElement>(null);
  React.useImperativeHandle(ref, () => divRef.current as HTMLDivElement);

  // Keep caret at end and mirror valueText
  useEffect(() => {
    const el = divRef.current;
    if (!el) return;
    if (el.textContent !== valueText) {
      el.textContent = valueText;
    }
    if (isActive) {
      const sel = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
  }, [valueText, isActive]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled || readOnly) return;
    const k = e.key;

    if (k === "ArrowLeft") {
      e.preventDefault();
      onMovePrev();
      return;
    }
    if (k === "ArrowRight") {
      e.preventDefault();
      onMoveNext();
      return;
    }
    if (k === "ArrowUp") {
      e.preventDefault();
      step(1);
      return;
    }
    if (k === "ArrowDown") {
      e.preventDefault();
      step(-1);
      return;
    }
    if (k === "Home") {
      e.preventDefault();
      setRaw(String(min).padStart(maxLen, "0"), { replace: true });
      return;
    }
    if (k === "End") {
      e.preventDefault();
      setRaw(String(max).padStart(maxLen, "0"), { replace: true });
      return;
    }

    // Digits via keydown: let beforeinput handle text insertion, but prevent default typing to avoid DOM mutations
    if (k.length === 1 && /\d/.test(k)) {
      e.preventDefault();
      const replace = rawValue.length >= maxLen; // overwrite when filled
      setRaw(k, { replace });
      return;
    }

    // Backspace/Delete: remove last digit
    if (k === "Backspace" || k === "Delete") {
      e.preventDefault();
      setRaw(rawValue.slice(0, Math.max(0, rawValue.length - 1)), {
        replace: true,
      });
      return;
    }
  };

  // Numeric-only text insertion and paste
  const onBeforeInput = (e: any) => {
    if (disabled || readOnly) return;
    // Some beforeinput are not cancelable across platforms; still attempt to own the edit pipeline
    const inputType = e.inputType as string;
    const data = (e.data ?? "") as string;

    if (inputType === "insertText") {
      if (!/^\d+$/.test(data)) {
        e.preventDefault();
        return;
      }
      e.preventDefault();
      const replace = rawValue.length >= maxLen;
      setRaw(data, { replace });
      return;
    }

    if (inputType === "insertFromPaste") {
      e.preventDefault();
      const text = (e.clipboardData?.getData("text") ?? "").replace(/\D+/g, "");
      if (!text) return;
      // Paste replaces current content
      setRaw(text, { replace: true });
    }
  };

  const onInput = (e: React.FormEvent<HTMLDivElement>) => {
    // Fallback: sanitize if the browser mutated DOM despite prevention
    const el = divRef.current;
    if (!el) return;
    const digits = (el.textContent ?? "").replace(/\D+/g, "");
    if (digits !== rawValue) {
      setRaw(digits, { replace: true });
    }
  };

  return (
    <div
      ref={divRef}
      role="spinbutton"
      aria-label={label}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={rawValue ? Number(rawValue) : undefined}
      aria-valuetext={valueText}
      contentEditable={!disabled && !readOnly}
      suppressContentEditableWarning
      tabIndex={isActive ? 0 : -1}
      inputMode="numeric"
      spellCheck={false}
      onFocus={onActivate}
      onKeyDown={onKeyDown}
      onBeforeInput={onBeforeInput}
      onInput={onInput}
      style={{
        display: "inline-block",
        minWidth: `${maxLen}ch`,
        textAlign: "right",
        outline: "none",
      }}
      className="focus:bg-primary text-primary-foreground"
    />
  );
});

export function SegmentedDateInput({
  id,
  name,
  value,
  defaultValue,
  min,
  max,
  required,
  disabled,
  readOnly,
  autoFocus,
  className,
  style,
  onChange,
  "aria-label": ariaLabel = "Date",
}: Props) {
  const controlled = value !== undefined;
  const init = parseISO(controlled ? value : defaultValue) ?? {
    day: "",
    month: "",
    year: "",
  };
  const [seg, setSeg] = useState<Segments>(init);
  const [active, setActive] = useState<SegmentKey>("day");

  const dayRef = useRef<HTMLDivElement>(null);
  const monthRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!controlled) return;
    const p = parseISO(value);
    if (p) setSeg(p);
  }, [controlled, value]);

  const yNum = seg.year ? parseInt(seg.year, 10) : 2000;
  const mNum = seg.month ? parseInt(seg.month, 10) : 1;
  const maxDay = useMemo(() => {
    try {
      return getDaysInMonth(new Date(yNum, mNum - 1, 1));
    } catch {
      return 31;
    }
  }, [yNum, mNum]);

  const emit = useCallback(
    (next: Segments) => {
      if (!onChange) return;
      if (isComplete(next)) {
        const iso = toISO(next);
        onChange(withinRange(iso, min, max) ? iso : "");
      } else {
        onChange("");
      }
    },
    [onChange, min, max]
  );

  const setAndEmit = (next: Segments) => {
    setSeg(next);
    emit(next);
  };

  const focusSeg = (key: SegmentKey) => {
    setActive(key);
    const el =
      key === "day"
        ? dayRef.current
        : key === "month"
          ? monthRef.current
          : yearRef.current;
    el?.focus();
  };

  useEffect(() => {
    if (autoFocus) focusSeg("day");
  }, [autoFocus]);

  // Shared setters with special rules
  const setDayRaw = (raw: string, opts?: { replace?: boolean }) => {
    // Keep only 2 digits
    const digits =
      (opts?.replace ? "" : seg.day).replace(/\D+/g, "") +
      raw.replace(/\D+/g, "");
    let dRaw = digits.slice(0, 2);

    // If one digit and it exceeds the tens max (e.g., "4" in Aug), commit immediately and move
    if (dRaw.length === 1) {
      const first = parseInt(dRaw, 10);
      const tensMax = Math.floor(maxDay / 10);
      if (first > tensMax) {
        const d = pad2(clamp(first, 1, maxDay));
        setAndEmit({ ...seg, day: d });
        focusSeg("month");
        return;
      }
      // Otherwise keep editing buffer
      setAndEmit({ ...seg, day: dRaw });
      return;
    }

    // Two digits -> clamp and move
    if (dRaw.length === 2) {
      const d = pad2(clamp(parseInt(dRaw, 10), 1, maxDay));
      setAndEmit({ ...seg, day: d });
      focusSeg("month");
      return;
    }

    setAndEmit({ ...seg, day: dRaw });
  };

  const setMonthRaw = (raw: string, opts?: { replace?: boolean }) => {
    const digits =
      (opts?.replace ? "" : seg.month).replace(/\D+/g, "") +
      raw.replace(/\D+/g, "");
    let mRaw = digits.slice(0, 2);

    if (mRaw.length === 1) {
      const first = parseInt(mRaw, 10);
      if (first >= 3 && first <= 9) {
        const m = pad2(clamp(first, 1, 12));
        // Adjust day for new month
        const mdays = getDaysInMonth(new Date(yNum, first - 1, 1));
        const d = seg.day
          ? pad2(clamp(parseInt(seg.day, 10), 1, mdays))
          : seg.day;
        setAndEmit({ ...seg, month: m, day: d ?? "" });
        focusSeg("year");
        return;
      }
      setAndEmit({ ...seg, month: mRaw });
      return;
    }

    if (mRaw.length === 2) {
      let val = parseInt(mRaw, 10);
      if (val === 0) val = 1;
      const m = pad2(clamp(val, 1, 12));
      const mdays = getDaysInMonth(new Date(yNum, val - 1, 1));
      const d = seg.day
        ? pad2(clamp(parseInt(seg.day, 10), 1, mdays))
        : seg.day;
      setAndEmit({ ...seg, month: m, day: d ?? "" });
      focusSeg("year");
      return;
    }

    setAndEmit({ ...seg, month: mRaw });
  };

  const setYearRaw = (raw: string, opts?: { replace?: boolean }) => {
    const digits =
      (opts?.replace ? "" : seg.year).replace(/\D+/g, "") +
      raw.replace(/\D+/g, "");
    let yRaw = digits.slice(0, 4);
    if (yRaw.length < 4) {
      setAndEmit({ ...seg, year: yRaw });
      return;
    }
    const y = padYear(clamp(parseInt(yRaw, 10), 1, 9999));
    const mdays = getDaysInMonth(
      new Date(
        parseInt(y, 10),
        (seg.month ? parseInt(seg.month, 10) : 1) - 1,
        1
      )
    );
    const d = seg.day ? pad2(clamp(parseInt(seg.day, 10), 1, mdays)) : seg.day;
    setAndEmit({ ...seg, year: y, day: d ?? "" });
  };

  const stepDay = (delta: number) => {
    const cur = seg.day ? parseInt(seg.day, 10) : 1;
    const next = pad2(clamp(cur + delta, 1, maxDay));
    setAndEmit({ ...seg, day: next });
  };
  const stepMonth = (delta: number) => {
    const cur = seg.month ? parseInt(seg.month, 10) : 1;
    const m = clamp(cur + delta, 1, 12);
    // clamp day for new month
    const mdays = getDaysInMonth(new Date(yNum, m - 1, 1));
    const d = seg.day ? pad2(clamp(parseInt(seg.day, 10), 1, mdays)) : seg.day;
    setAndEmit({ ...seg, month: pad2(m), day: d ?? "" });
  };
  const stepYear = (delta: number) => {
    const cur = seg.year ? parseInt(seg.year, 10) : 1;
    const y = clamp(cur + delta, 1, 9999);
    const mdays = getDaysInMonth(
      new Date(y, (seg.month ? parseInt(seg.month, 10) : 1) - 1, 1)
    );
    const d = seg.day ? pad2(clamp(parseInt(seg.day, 10), 1, mdays)) : seg.day;
    setAndEmit({ ...seg, year: padYear(y), day: d ?? "" });
  };

  const complete = isComplete(seg);
  const iso = complete ? toISO(seg) : "";
  const inRange = complete ? withinRange(iso as ISODate, min, max) : !required;
  const ariaInvalid = required
    ? !complete || !inRange
    : complete
      ? !inRange
      : false;

  const displayDay = seg.day || "DD";
  const displayMonth = seg.month || "MM";
  const displayYear = seg.year || "YYYY";

  return (
    <div
      id={id}
      role="group"
      aria-label={ariaLabel}
      aria-disabled={disabled || undefined}
      aria-readonly={readOnly || undefined}
      aria-required={required || undefined}
      aria-invalid={ariaInvalid || undefined}
      className={className}
      style={style}
    >
      {name ? (
        <input
          type="hidden"
          name={name}
          value={complete && inRange ? iso : ""}
          aria-hidden="true"
        />
      ) : null}

      <Segment
        ref={dayRef}
        label="Day"
        valueText={displayDay}
        rawValue={seg.day}
        setRaw={setDayRaw}
        min={1}
        max={maxDay}
        maxLen={2}
        step={stepDay}
        onMovePrev={() => {}}
        onMoveNext={() => focusSeg("month")}
        isActive={active === "day"}
        onActivate={() => setActive("day")}
        disabled={disabled}
        readOnly={readOnly}
      />
      <span aria-hidden="true">/</span>
      <Segment
        ref={monthRef}
        label="Month"
        valueText={displayMonth}
        rawValue={seg.month}
        setRaw={setMonthRaw}
        min={1}
        max={12}
        maxLen={2}
        step={stepMonth}
        onMovePrev={() => focusSeg("day")}
        onMoveNext={() => focusSeg("year")}
        isActive={active === "month"}
        onActivate={() => setActive("month")}
        disabled={disabled}
        readOnly={readOnly}
      />
      <span aria-hidden="true">/</span>
      <Segment
        ref={yearRef}
        label="Year"
        valueText={displayYear}
        rawValue={seg.year}
        setRaw={setYearRaw}
        min={1}
        max={9999}
        maxLen={4}
        step={stepYear}
        onMovePrev={() => focusSeg("month")}
        onMoveNext={() => {}}
        isActive={active === "year"}
        onActivate={() => setActive("year")}
        disabled={disabled}
        readOnly={readOnly}
      />
    </div>
  );
}
