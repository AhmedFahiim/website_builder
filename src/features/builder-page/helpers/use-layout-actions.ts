import { useDesignLayout } from "@/hooks/use-layout";
import { useUserProjects } from "@/hooks/use-user-projects";
import { useParams } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "sonner";

export const useLayoutActions = () => {
  const params = useParams();

  const { layout, setLayout } = useDesignLayout();

  const { projects, setProjects } = useUserProjects();

  /* --------- on delete section -------- */
  const onDeleteSection = useCallback(
    (componentKey: string) => {
      setLayout((prev) =>
        prev.filter((section) => section.componentKey !== componentKey)
      );

      const updatedProjects = projects.map((project: TProject) =>
        project.slug === params.id
          ? {
              ...project,
              lastUpdate: new Date(),
              sections:
                project.sections?.filter(
                  (section: TSection) => section.componentKey !== componentKey
                ) || [],
            }
          : project
      );

      setProjects(updatedProjects);

      toast.success("The section removed from the workflow");
    },
    [projects, params.id, setProjects]
  );

  const onDeleteSectionWithFly = (
    section: TSection,
    containerRef: React.RefObject<HTMLDivElement | null>
  ) => {
    const container = containerRef.current;
    if (!container) {
      onDeleteSection(section.componentKey);
      return;
    }

    const rect = container.getBoundingClientRect();
    const clone = container.cloneNode(true) as HTMLDivElement;

    Object.assign(clone.style, {
      position: "fixed",
      zIndex: "9999",
      left: `${rect.left}px`,
      top: `${rect.top}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      transition: "all 0.5s ease-in-out",
      pointerEvents: "none",
    });

    document.body.appendChild(clone);

    requestAnimationFrame(() => {
      clone.style.opacity = "0";
      clone.style.transform = "translateY(-100px) scale(0.95)";
    });

    setTimeout(() => {
      clone.remove();
      onDeleteSection(section.componentKey);
    }, 500);
  };
  /* --------- on edit section -------- */
  const [editControl, setEditControl] = useState<TSection | null>(null);

  const onEditSection = useCallback((section: TSection) => {
    setEditControl(section);
  }, []);

  const onUpdateSectionData = useCallback(
    (values: TSection["contentData"]) => {
      if (!editControl) return;

      const updatedSection = { ...editControl, contentData: values };

      // Update layout
      setLayout((prev) =>
        prev.map((section) =>
          section.componentKey === editControl.componentKey
            ? updatedSection
            : section
        )
      );

      // Update projects
      const updatedProjects = projects.map((project: TProject) =>
        project.slug === params.id
          ? {
              ...project,
              lastUpdate: new Date(),
              sections:
                project.sections?.length === 0
                  ? [updatedSection]
                  : project.sections?.map((section: TSection) =>
                      section.componentKey === editControl.componentKey
                        ? updatedSection
                        : section
                    ) || [],
            }
          : project
      );

      setProjects(updatedProjects);

      setEditControl(null);
    },
    [editControl, params.id, projects, setProjects]
  );

  return {
    layout,
    editControl,
    onEditSection,
    setEditControl,
    onUpdateSectionData,
    onDeleteSectionWithFly,
  };
};
