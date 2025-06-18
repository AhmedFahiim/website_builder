"use client";

import React, { useRef, useState } from "react";
import BuilderHeader from "./header";
import PreMadeSectionsSideSheet from "./pre-made-side-sheet";
import DesignArea from "./design-area";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function BuildProject() {
  const [openSideSheet, setOpenSideSheet] = useState<boolean>(true);

  const designAreaRef = useRef<HTMLDivElement>(null);

  return (
    <section>
      <BuilderHeader
        isOpen={openSideSheet}
        setOpenSideSheet={setOpenSideSheet}
      />
      <DndProvider backend={HTML5Backend}>
        <div className="flex items-center h-[calc(100vh-72px)]">
          <PreMadeSectionsSideSheet
            isOpen={openSideSheet}
            designAreaRef={designAreaRef}
          />
          <DesignArea designAreaRef={designAreaRef} />
        </div>
      </DndProvider>
    </section>
  );
}
