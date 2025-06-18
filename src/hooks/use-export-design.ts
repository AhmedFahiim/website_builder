import { useParams } from "next/navigation";
import { useDesignLayout } from "./use-layout";
import { useUserProjects } from "./use-user-projects";

export const useExportDesign = () => {
  const params = useParams();
  const { layout } = useDesignLayout();

  const { projects } = useUserProjects();

  const activeProject = projects.find((project) => project.slug === params?.id);

  const onExportDesign = () => {
    const json = JSON.stringify(layout);

    const blob = new Blob([json], { type: "application/json" });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = `${activeProject?.title}_design.json`;

    link.click();

    URL.revokeObjectURL(url);
  };

  return onExportDesign;
};
