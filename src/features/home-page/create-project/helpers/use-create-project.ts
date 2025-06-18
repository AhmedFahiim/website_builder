import { useUserProjects } from "@/hooks/use-user-projects";
import { useCallback, useEffect, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

export const useCreateProject = () => {
  const { projects, setProjects } = useUserProjects();

  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);

  const form = useForm();

  const onSwitchModalState = () => setOpenCreateModal(!openCreateModal);

  const onSubmitProjectData = useCallback(
    (formData: FieldValues) => {
      const newProject: TProject = {
        title: formData.title,
        description: formData.description || "",
        createdAt: new Date(),
        lastUpdate: new Date(),
        slug: formData.title.replaceAll(" ", "-"),
        id: projects.length + 1,
        cover:
          "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1470&q=80",
        sections: [],
      };

      setProjects([...projects, newProject]);

      localStorage.setItem(
        "website_builder_projects",
        JSON.stringify([...projects, newProject])
      );

      setOpenCreateModal(false);
    },
    [projects, setProjects]
  );

  useEffect(() => {
    const savedProjectData = localStorage.getItem("website_builder_projects");

    if (savedProjectData) {
      const parsedData = JSON.parse(savedProjectData);

      setProjects(parsedData);
    }
  }, []);

  return {
    form,
    openCreateModal,
    onSwitchModalState,
    onSubmitProjectData,
    setOpenCreateModal,
  };
};
