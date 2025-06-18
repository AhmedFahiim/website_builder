"use client";

import React, { useEffect, useRef, useState } from "react";
import BuilderHeader from "./header";
import PreMadeSectionsSideSheet from "./pre-made-side-sheet";
import DesignArea from "./design-area";
import { useParams } from "next/navigation";
import { useUserProjects } from "@/hooks/use-user-projects";
import { useDesignLayout } from "@/hooks/use-layout";

export default function BuildProject() {
  const params = useParams();

  const { projects, setProjects } = useUserProjects();

  const { setLayout } = useDesignLayout();

  const [openSideSheet, setOpenSideSheet] = useState<boolean>(true);

  const designAreaRef = useRef<HTMLDivElement>(null);

  // get the project last design
  useEffect(() => {
    const activeProject = projects.find(
      (project) => project.slug === params?.id
    );

    setLayout(activeProject?.sections || []);
  }, [params, projects]);

  // get saved projects
  useEffect(() => {
    const savedProjectData = localStorage.getItem("website_builder_projects");

    if (savedProjectData) {
      const parsedData = JSON.parse(savedProjectData);

      setProjects(parsedData);
    }
  }, []);

  return (
    <section>
      <BuilderHeader
        isOpen={openSideSheet}
        setOpenSideSheet={setOpenSideSheet}
      />
      <div className="relative flex items-center h-[calc(100vh-72px)]">
        <PreMadeSectionsSideSheet
          isOpen={openSideSheet}
          designAreaRef={designAreaRef}
        />
        <DesignArea designAreaRef={designAreaRef} />
      </div>
    </section>
  );
}
