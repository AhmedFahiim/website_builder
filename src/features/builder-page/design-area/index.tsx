import React, { useCallback } from "react";
import HeaderOne from "@/components/pre-made/headers/header-1";
import HeaderTwo from "@/components/pre-made/headers/header-2";
import HeroOne from "@/components/pre-made/hero/hero-1";
import HeroTwo from "@/components/pre-made/hero/hero-2";
import FooterOne from "@/components/pre-made/footers/footer-1";
import FooterTwo from "@/components/pre-made/footers/footer-2";
import EmptyLayoutMessage from "../empty-layout-message";
import { cn } from "@/lib/utils";
import { useLayoutActions } from "../helpers/use-layout-actions";
import EditSectionModal from "../edit-section";
import { transformContentData } from "@/utils/format-section-content";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "@/components/common/sortable-item";
import SectionActions from "../section-actions";

export default function DesignArea({
  designAreaRef,
}: {
  designAreaRef: React.RefObject<HTMLDivElement | null>;
}) {
  const {
    layout,
    editControl,
    setLayout,
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

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const onDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (active.id !== over?.id) {
        const oldIndex = layout.findIndex(
          (item) => item.componentKey === active.id
        );
        const newIndex = over
          ? layout.findIndex((item) => item.componentKey === over.id)
          : -1;

        const newItems = arrayMove(layout, oldIndex, newIndex).map(
          (item, index) => ({
            ...item,
            order: index + 1,
          })
        );
        setLayout(newItems);
      }
    },
    [layout]
  );

  return (
    <section
      className={cn(
        "flex flex-col justify-between overflow-auto flex-1 h-full p-4 space-y-6"
      )}
      ref={designAreaRef}
    >
      {layout.length > 0 ? (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={onDragEnd}
        >
          <SortableContext
            items={layout.map((item) => item.componentKey)}
            strategy={verticalListSortingStrategy}
          >
            {layout?.map((section: TSection, idx: number) => {
              const Component = componentMap[section.componentKey];

              return (
                <SortableItem
                  key={idx}
                  item={section}
                  className="relative border border-transparent duration-300 hover:border-gray-200"
                >
                  {React.createElement(Component, {
                    ...transformContentData(section.contentData),
                  })}

                  <SectionActions
                    onEditSection={() => onEditSection(section)}
                    onDeleteSectionWithFly={() =>
                      designAreaRef.current &&
                      onDeleteSectionWithFly(section, designAreaRef)
                    }
                  />
                </SortableItem>
              );
            })}
          </SortableContext>
        </DndContext>
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
