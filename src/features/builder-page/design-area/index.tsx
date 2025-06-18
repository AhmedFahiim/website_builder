import React from "react";
import HeaderOne from "@/components/pre-made/headers/header-1";
import HeaderTwo from "@/components/pre-made/headers/header-2";
import HeroOne from "@/components/pre-made/hero/hero-1";
import HeroTwo from "@/components/pre-made/hero/hero-2";
import FooterOne from "@/components/pre-made/footers/footer-1";
import FooterTwo from "@/components/pre-made/footers/footer-2";
import EmptyLayoutMessage from "../empty-layout-message";
import { cn } from "@/lib/utils";
import { useLayoutActions } from "../helpers/use-layout-actions";
import { Edit2, Trash } from "lucide-react";
import EditSectionModal from "../edit-section";
import { transformContentData } from "@/utils/format-section-content";

export default function DesignArea({
  designAreaRef,
}: {
  designAreaRef: React.RefObject<HTMLDivElement | null>;
}) {
  const {
    layout,
    editControl,
    onEditSection,
    setEditControl,
    onUpdateSectionData,
    onDeleteSectionWithFly,
  } = useLayoutActions();

  const componentMap: Record<string, React.ElementType> = {
    header_one: HeaderOne,
    header_two: HeaderTwo,
    hero_one: HeroOne,
    hero_two: HeroTwo,
    footer_one: FooterOne,
    footer_two: FooterTwo,
  };

  return (
    <section
      className={cn(
        "flex flex-col justify-between overflow-auto flex-1 h-full p-4 space-y-6"
      )}
      ref={designAreaRef}
    >
      {layout.length > 0 ? (
        layout?.map((section: TSection, idx: number) => {
          const Component = componentMap[section.componentKey];

          return (
            <div
              key={idx}
              className="relative border border-transparent duration-300 hover:border-gray-200"
            >
              {React.createElement(Component, {
                ...transformContentData(section.contentData),
              })}

              <div className="flex items-center gap-2 absolute -top-2 -left-2 z-[10]">
                <button
                  className="size-6 rounded-full border border-gray-200 text-red-400 hover:bg-red-400 hover:text-white duration-300 cursor-pointer grid place-items-center"
                  onClick={() =>
                    designAreaRef.current &&
                    onDeleteSectionWithFly(section, designAreaRef)
                  }
                >
                  <Trash size={16} />
                </button>

                <button
                  className="size-6 rounded-full border border-gray-200 hover:bg-gray-300 duration-300 cursor-pointer grid place-items-center"
                  onClick={() => onEditSection(section)}
                >
                  <Edit2 className="text-indigo-500" size={16} />
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <EmptyLayoutMessage />
      )}

      {/* edit section */}
      {editControl && (
        <EditSectionModal
          editControl={editControl}
          setEditControl={setEditControl}
          onUpdateSectionData={onUpdateSectionData}
        />
      )}
    </section>
  );
}
