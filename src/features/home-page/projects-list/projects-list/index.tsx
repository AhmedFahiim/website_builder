"use client";

import React from "react";
import ProjectCard from "../project-card";
import { useUserProjects } from "@/hooks/use-user-projects";
import EmptyProjectMessage from "../empty-projects-message";

export default function ProjectsList() {
  const { projects } = useUserProjects();

  return (
    <section>
      {projects.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects?.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      ) : (
        <EmptyProjectMessage />
      )}
    </section>
  );
}
