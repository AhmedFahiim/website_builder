import React from "react";
import ProjectCard from "./project-card";

const dummyProjects: TProject[] = [
  {
    id: 1,
    slug: "project-1",
    title: "AI Research Dashboard",
    description:
      "This project provides a comprehensive dashboard for visualizing and managing machine learning experiments. It includes interactive charts, model performance tracking, dataset versioning, and collaboration features for research teams. The goal is to simplify the workflow for data scientists and streamline experimentation at scale.",

    cover:
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1470&q=80",
    lastUpdate: new Date("2025-06-15T14:23:00Z"),
    createdAt: new Date("2025-05-10T09:00:00Z"),
    sections: [],
  },
  {
    id: 2,
    slug: "project-2",
    title: "E-Commerce Website",
    description:
      "A robust full-stack web application designed for modern online shopping experiences. It includes user authentication, product browsing with filters, a dynamic shopping cart, secure payment gateway integration, and an admin dashboard for managing inventory and orders. The UI is responsive and optimized for all devices.",
    cover:
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1470&q=80",
    lastUpdate: new Date("2025-06-12T10:00:00Z"),
    createdAt: new Date("2025-04-22T08:00:00Z"),
    sections: [],
  },
  {
    id: 3,
    slug: "project-3",
    title: "Portfolio Website",
    description:
      "This project is a personal portfolio website designed to present professional skills, work history, and completed projects. It includes an interactive resume section, filterable project gallery, contact form with email integration, and optional blog posts. The design emphasizes simplicity, accessibility, and mobile-first responsiveness.",
    cover:
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1470&q=80",
    lastUpdate: new Date("2025-06-10T18:45:00Z"),
    createdAt: new Date("2025-03-15T12:30:00Z"),
    sections: [],
  },
];

export default function ProjectsList() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <section className="mb-6">
          <div className="max-w-xl">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              See what you&apos;ve done recently
            </h3>
            <p className="mt-3 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
              est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum
              magna lorem, euismod volutpat arcu volutpat et.
            </p>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dummyProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </section>
      </div>
    </section>
  );
}
