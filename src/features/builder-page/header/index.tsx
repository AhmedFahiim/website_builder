"use client";

import { Button } from "@/components/common/button";
import Link from "@/components/common/link";
import { useExportDesign } from "@/hooks/use-export-design";
import { useImportDesign } from "@/hooks/use-import-design";
import { useDesignLayout } from "@/hooks/use-layout";
import { useUserProjects } from "@/hooks/use-user-projects";
import { useParams } from "next/navigation";
import React, { useRef } from "react";
import { toast } from "sonner";

interface Props {
  isOpen: boolean;
  setOpenSideSheet: React.Dispatch<React.SetStateAction<boolean>>;
}

const BuilderHeader = React.memo(function BuilderHeader({
  isOpen,
  setOpenSideSheet,
}: Props) {
  const params = useParams();

  const { layout } = useDesignLayout();

  const { projects, setProjects } = useUserProjects();

  const inputRef = useRef<HTMLInputElement>(null);

  const onImportDesign = useImportDesign();

  const onExportDesign = useExportDesign();

  const onSaveDesign = () => {
    const updatedProjects = projects.map((project: TProject) =>
      project.slug === params.id
        ? {
            ...project,
            lastUpdate: new Date(),
            sections: layout,
          }
        : project
    );

    setProjects(updatedProjects);

    localStorage.setItem(
      "website_builder_projects",
      JSON.stringify(updatedProjects)
    );

    toast.success("Your design saved successfully");
  };

  return (
    <header
      className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0 p-4"
      style={{
        background:
          "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
      }}
    >
      <div className="flex items-center gap-4">
        <Button
          variant={"outline"}
          className="px-2"
          onClick={() => setOpenSideSheet(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </Button>

        <Link href={"/"} variant={"text"} className="text-sm">
          Back Home
        </Link>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button variant="outline" onClick={() => inputRef.current?.click()}>
          Import Design
        </Button>

        <Button variant="outline" onClick={onExportDesign}>
          Export Design
        </Button>

        <Button variant="default" onClick={onSaveDesign}>
          Save Design
        </Button>

        <input type="file" hidden onChange={onImportDesign} ref={inputRef} />
      </div>
    </header>
  );
});

export default BuilderHeader;
