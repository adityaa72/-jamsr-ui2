"use client";
export class NumberParser {
  locale: string;
  formatOptions: Intl.NumberFormatOptions;

  constructor(locale: string, formatOptions: Intl.NumberFormatOptions) {
    this.locale = locale;
    this.formatOptions = formatOptions;
  }

  parse(value: string) {
    let cleanValue = value.trim();

    if (cleanValue.length === 0) {
      return NaN;
    }

    const nf = new Intl.NumberFormat(this.locale, this.formatOptions);
    const parts = nf.formatToParts(-123456.78);

    // 1. Extract separators
    const group = parts.find((part) => part.type === "group")?.value!;
    const decimal = parts.find((part) => part.type === "decimal")?.value!;

    const others = parts.filter(
      (part) => !["group", "decimal", "integer", "fraction"].includes(part.type)
    );

    // 2. Extract minus sign (locale specific)
    const minus = parts.find((p) => p.type === "minusSign")?.value ?? "";

    // 3. Build numeral map
    const numerals = [
      ...new Intl.NumberFormat(this.locale, { useGrouping: false }).format(
        9876543210
      ),
    ].reverse();
    const numeralsMap = new Map(numerals.map((n, i) => [n, i.toString()]));

    let isNegative = false;

    // check for values like ($1,234,567.89)
    if (this.formatOptions.currencySign === "accounting") {
      // 4. Check if this locale actually uses parentheses for accounting format
      const usesParentheses = parts.find(
        (p) => p.type === "literal" && (p.value === "(" || p.value === ")")
      );
      // Check if accounting format is being used (parentheses for negative)
      if (usesParentheses) {
        // Match parentheses patterns: ($123), (123), etc.
        const parenMatch = cleanValue.match(/^\s*\((.+)\)\s*$/);
        if (parenMatch && parenMatch[1]) {
          isNegative = true;
          cleanValue = parenMatch[1]; // Extract content inside parentheses
        }
      }
    }

    const numeralRe = new RegExp(`[${numerals.join("")}]`, "g");
    const groupRe = new RegExp(`[${group}]`, "g");
    const decimalRe = new RegExp(`[${decimal}]`, "g");
    const minusRe = new RegExp(`[${minus}]`, "g");

    cleanValue = cleanValue
      .replace(groupRe, "")
      .replace(decimalRe, ".")
      .replace(numeralRe, (match) => numeralsMap.get(match)?.toString()!)
      .replace(minusRe, "-")
      .replace(/[\u200E\u200F\u061C\u202A-\u202E]/g, "");

    for (const other of others) {
      cleanValue = cleanValue.replace(other.value, "");
    }

    // Apply negative sign if accounting format parentheses were detected
    let parsedValue = cleanValue ? +cleanValue : NaN;

    // for percentage
    if (this.formatOptions.style === "percent") {
      parsedValue = parsedValue / 100;
    }

    return isNegative ? -Math.abs(parsedValue) : parsedValue;
  }
}
