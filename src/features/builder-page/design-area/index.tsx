import React from "react";
import HeaderOne from "@/components/pre-made/headers/header-1";
import HeaderTwo from "@/components/pre-made/headers/header-2";
import HeroOne from "@/components/pre-made/hero/hero-1";
import HeroTwo from "@/components/pre-made/hero/hero-2";
import FooterOne from "@/components/pre-made/footers/footer-1";
import FooterTwo from "@/components/pre-made/footers/footer-2";
import EmptyLayoutMessage from "../empty-layout-message";
import { cn } from "@/lib/utils";
import { useDesignLayout } from "@/hooks/use-layout";

export default function DesignArea({
  designAreaRef,
}: {
  designAreaRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { layout } = useDesignLayout();

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
          if (!Component) return null;

          return (
            <div key={idx}>
              {React.createElement(Component, {
                contentData: section.contentData,
              })}
            </div>
          );
        })
      ) : (
        <EmptyLayoutMessage />
      )}
    </section>
  );
}
