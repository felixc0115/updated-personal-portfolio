import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="relative px-4 sm:px-8 lg:px-12">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        In some ways, programming is like painting. You start with a blank
        canvas and certain basic raw materials. You use a combination of
        science, art, and craft to determine what to do with them.
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark: text-zinc-400">
        The culmination of my technical capabilities, life experiences,
        interests, and work experience have shaped the projects that I have
        built below.{" "}
      </p>
      <div className="mt-16 sm:mt-20">
        <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard />
        </ul>
      </div>
    </div>
  );
};

export default Projects;
