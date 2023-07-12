import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="relative px-4 sm:px-8 lg:px-12">
      <h1 className="text-4xl">
        In some ways, programming is like painting. You start with a blank
        canvas and certain basic raw materials. You use a combination of
        science, art, and craft to determine what to do with them.
      </h1>
      <p>
        The culmination of my technical capabilities, life experiences,
        interests, and work experience have shaped the projects that I have
        built below.{" "}
      </p>
      <ProjectCard />
    </div>
  );
};

export default Projects;
