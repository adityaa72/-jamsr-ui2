import { ScrollArea } from "@jamsrui/react";

export default function ScrollbarUsage() {
  return (
    <ScrollArea className="h-[200px] w-[350px] rounded-2xl border border-neutral-200 p-4 dark:border-neutral-700">
      <ScrollArea.Viewport>
        <div className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          <p className="mb-4">
            Vernacular architecture is building done outside any academic
            tradition, and without professional guidance. It is not a particular
            architectural movement or style, but rather a broad category,
            encompassing a wide range and variety of building types, with
            differing methods of construction, from around the world, both
            historical and extant and classical and modern.
          </p>
          <p>
            This type of architecture usually serves immediate, local needs, is
            constrained by the materials available in its particular region and
            reflects local traditions and cultural practices. The study of
            vernacular architecture does not examine formally schooled
            architects, but instead that of the design skills and tradition of
            local builders, who were rarely given any attribution for the work.
          </p>
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea>
  );
}
