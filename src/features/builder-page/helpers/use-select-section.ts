import { useDesignLayout } from "@/hooks/use-layout";
import { useUserProjects } from "@/hooks/use-user-projects";
import { useParams } from "next/navigation";
import { useCallback } from "react";
import { toast } from "sonner";

export const useSelectSection = (
  designAreaRef: React.RefObject<HTMLDivElement | null>
) => {
  const params = useParams();
  const { layout, setLayout } = useDesignLayout();
  const { projects, setProjects } = useUserProjects();

  const onSelectSection = useCallback(
    (section: TSection) => {
      const droppedSectionType: TSectionType = section.type;

      const ONE_TIME_SECTIONS = ["header", "footer"];

      const isOneTimeSection = ONE_TIME_SECTIONS.includes(droppedSectionType);

      const order =
        droppedSectionType === "header"
          ? 1
          : droppedSectionType === "footer"
          ? 99
          : 2;

      const sectionWithOrder = { ...section, order };

      setLayout((prev) => {
        const isTypeExistBefore = prev.some(
          (prevSection) => prevSection.type === droppedSectionType
        );

        if (isOneTimeSection && isTypeExistBefore) {
          const replaceSection = prev.map((prevSection) =>
            prevSection.type === droppedSectionType
              ? sectionWithOrder
              : prevSection
          );

          return replaceSection;
        }

        return [...prev, sectionWithOrder].sort(
          (a, b) => (a?.order ?? 0) - (b?.order ?? 0)
        );
      });

      // Update projects
      const updatedProjects = projects.map((project: TProject) =>
        project.slug === params.id
          ? {
              ...project,
              lastUpdate: new Date(),
              sections: (() => {
                const existingSections = project.sections || [];
                const isTypeExistInProject = existingSections.some(
                  (projectSection) => projectSection.type === droppedSectionType
                );

                if (isOneTimeSection && isTypeExistInProject) {
                  return existingSections.map((projectSection) =>
                    projectSection.type === droppedSectionType
                      ? sectionWithOrder
                      : projectSection
                  );
                } else {
                  return [...existingSections, sectionWithOrder].sort(
                    (a, b) => (a?.order ?? 0) - (b?.order ?? 0)
                  );
                }
              })(),
            }
          : project
      );

      setProjects(updatedProjects);

      toast.success("The section added to the workflow");
    },
    [setLayout, projects, params.id, setProjects]
  );

  const onSelectWithFly = (
    section: TSection,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const image = (event.currentTarget as HTMLElement).querySelector("img");

    if (!image || !designAreaRef?.current) {
      onSelectSection(section);
      return;
    }

    const imageRect = image.getBoundingClientRect();
    const targetRect = designAreaRef.current.getBoundingClientRect();

    const flyImage = image.cloneNode(true) as HTMLImageElement;
    Object.assign(flyImage.style, {
      position: "fixed",
      zIndex: "9999",
      left: `${imageRect.left}px`,
      top: `${imageRect.top}px`,
      width: `${imageRect.width}px`,
      height: `${imageRect.height}px`,
      transition: "all 0.8s ease-in-out",
      pointerEvents: "none",
    });

    document.body.appendChild(flyImage);

    let targetTop = targetRect.top + targetRect.height / 2;
    if (section.name.toLowerCase().includes("header")) {
      targetTop = targetRect.top + 40;
    } else if (section.name.toLowerCase().includes("footer")) {
      targetTop = targetRect.bottom - 100;
    }

    const targetLeft = targetRect.left + targetRect.width / 2 - 100;

    requestAnimationFrame(() => {
      flyImage.style.left = `${targetLeft}px`;
      flyImage.style.top = `${targetTop}px`;
      flyImage.style.width = `200px`;
      flyImage.style.opacity = "0.5";
    });

    setTimeout(() => {
      flyImage.remove();
      onSelectSection(section);
    }, 500);
  };

  return { layout, onSelectWithFly };
};
