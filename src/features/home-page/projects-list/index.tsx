import React from "react";
import CreateNewProject from "../create-project";
import ProjectsList from "./projects-list";

export default function ProjectsListPage() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <section className="flex justify-between items-start mb-6">
          <div className="max-w-xl">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              See what you&apos;ve recently done
            </h3>
            <p className="mt-3 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
              est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum
              magna lorem, euismod volutpat arcu volutpat et.
            </p>
          </div>
          <CreateNewProject />
        </section>
        <ProjectsList />
      </div>
    </section>
  );
}
