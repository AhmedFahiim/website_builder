import React from "react";
import Image from "next/image";
import { preMadeSections } from "@/components/pre-made/pre-made-sections-data";
import { useSelectSection } from "../helpers/use-select-section";

export default function PreMadeSection({
  designAreaRef,
}: {
  designAreaRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { onSelectWithFly } = useSelectSection(designAreaRef);

  return (
    <section ref={designAreaRef} className="my-8 space-y-8">
      {preMadeSections.map((sectionType) => {
        return (
          <section key={sectionType.blockName}>
            <h2 className="text-indigo-500 font-semibold mb-2">
              {sectionType.blockName}
            </h2>
            <div className="flex flex-col lg:flex-row gap-4">
              {sectionType.sections.map((section) => (
                <button
                  key={section.componentKey}
                  className="flex flex-col gap-2 items-center cursor-pointer md:basis-1/2 hover:scale-95 duration-200"
                  onClick={(e) => onSelectWithFly(section, e)}
                >
                  <Image
                    width={1200}
                    height={1200}
                    src={section.previewImage}
                    alt={`${section.name} preview image`}
                    className="size-auto h-full object-contain  border border-gray-200 rounded-2xl"
                  />
                  <span className="text-sm">{section.name}</span>
                </button>
              ))}
            </div>
          </section>
        );
      })}
    </section>
  );
}
