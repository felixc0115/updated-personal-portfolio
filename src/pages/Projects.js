import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/customizablelnfo";
import { useState } from "react";

const Projects = () => {
  return (
    <div className="mx-auto max-w-7xl lg:px-8">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <header className="max-w-4xl">
            <figure>
              <blockquote className="text-4xl font-bold tracking-tight sm:text-5xl">
                In some ways, programming is like painting. You start with a
                blank canvas and certain basic raw materials. You use a
                combination of science, art, and craft to determine what to do
                with them.
              </blockquote>
              <figcaption>- Andrew Hunt</figcaption>
            </figure>
            <p className="mt-7 text-xl">
              The culmination of my technical capabilities, life experiences,
              interests, and work experience have shaped the projects that I
              have built below. I am always trying to improve so I would love
              any constructive feedback!
            </p>
          </header>
          <div className="mt-16 sm:mt-20">
            <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard project={project} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
