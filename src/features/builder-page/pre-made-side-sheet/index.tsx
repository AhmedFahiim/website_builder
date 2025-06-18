import PreMadeSections from "@/features/builder-page/pre-made-side-sheet/list";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  isOpen: boolean;
  designAreaRef: React.RefObject<HTMLDivElement | null>;
}

export default function PreMadeSectionsSideSheet({
  isOpen,
  designAreaRef,
}: Props) {
  return (
    <aside
      className={cn(
        "h-full lg:w-0 overflow-hidden p-4 border border-gray-200 duration-300 -translate-x-10",
        {
          "lg:w-[350px] bg-gray-50 translate-x-0": isOpen,
        }
      )}
    >
      <div className="text-center">
        <h1 className="font-medium"> Builder Toolbox</h1>

        <p className="text-gray-500 text-sm">
          Drag and drop components into the design area to start building your
          layout.
        </p>
      </div>

      <PreMadeSections designAreaRef={designAreaRef} />
    </aside>
  );
}
