class NumberParser {
  locale: string;
  formatOptions: Intl.NumberFormatOptions;

  constructor(locale: string, formatOptions: Intl.NumberFormatOptions) {
    this.locale = locale;
    this.formatOptions = formatOptions;
  }

  parse(value: string) {
    let cleanValue = value.trim();

    const nf = new Intl.NumberFormat(this.locale, this.formatOptions);
    const parts = nf.formatToParts(-123456.78);

    // 1. Extract separators
    const group = parts.find((part) => part.type === "group")?.value!;
    const decimal = parts.find((part) => part.type === "decimal")?.value!;

    // 2. Extract minus sign (locale specific)
    const minus = parts.find((p) => p.type === "minusSign")?.value ?? "";

    // 3. Build numeral map
    const numerals = [
      ...new Intl.NumberFormat(this.locale, { useGrouping: false }).format(
        9876543210
      ),
    ].reverse();
    const numeralsMap = new Map(numerals.map((n, i) => [n, i.toString()]));

    const currency = parts.find((part) => part.type === "currency")?.value;

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
        if (parenMatch) {
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
      .replace(currency ?? "", "")
      .replace(minusRe, "-")
      .replace(/[^\d.\-,]/g, "");
    console.log("Clean value:", cleanValue);

    // Apply negative sign if accounting format parentheses were detected
    const parsed = cleanValue ? +cleanValue : NaN;
    return isNegative ? -Math.abs(parsed) : parsed;
  }
}

const options: Intl.NumberFormatOptions = {
  style: "currency",
  currency: "USD",
  // currencyDisplay: "name",
  currencySign: "accounting",
};
// const locale = "de-GB";
const locale = "en-US";
// const locale = "ar-EG";
// const locale = "fa-AF";

const formatter = new Intl.NumberFormat(locale, options);
const parser = new NumberParser(locale, options);

const value = formatter.format(-1_234_567.89);
console.log(value);
// console.log(parser.parse(value));

console.log(parser.parse("-$1,567.89"));
console.log(parser.parse("-$1,234,567.89"));
console.log(parser.parse("(($1,234,567.89))"));
