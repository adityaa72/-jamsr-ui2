import { mkdirSync, writeFileSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const items = [
  "alert",
  "autocomplete",
  "avatar",
  "breadcrumb",
  "button",
  "card",
  "charts",
  "checkbox",
  "chip",
  "circular-progress",
  "clipboard",
  "collapsible",
  "confirmation",
  "data-table",
  "date-picker",
  "dialog",
  "divider",
  "drawer",
  "editor",
  "header",
  "icon-button",
  "input",
  "kbd",
  "linear-progress",
  "link",
  "menu",
  "number-input",
  "otp-input",
  "pagination",
  "popover",
  "radio",
  "rating",
  "ripple",
  "scroll-area",
  "select",
  "sidebar",
  "skeleton",
  "slider",
  "switch",
  "table",
  "tabs",
  "tags-input",
  "text",
  "textarea",
  "toast",
  "toggle",
  "tooltip",
];

for (const item of items) {
  const basePath = dirname(fileURLToPath(import.meta.url));
  const fullPath = `${basePath}/${item}`;

  mkdirSync(fullPath);
  mkdirSync(`${fullPath}/examples`);
  writeFileSync(`${fullPath}/page.tsx`, "", "utf-8");

  console.log(" fullPath:->", fullPath);
}
