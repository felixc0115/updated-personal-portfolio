const ProjectCard = ({ project }) => {
  return (
    <li className=" transition group-hover:fill-blue-500 group relative flex flex-col items-start hover:">
      <div className=" transition group-hover:fill-blue-500">
        <img
          className="border-double border-8 border-stone-800 max-w-xs max-h-25"
          src={require(`../data/${project.projectPic}.png`)}
          alt="app preview"
        />
      </div>
      <div className="card-body p-1">
        <h2 className="card-title">
          {project.title}
          <div className="badge badge-secondary">{project.projectStatus}</div>
        </h2>
        <div className="card-actions justify-start">
          {project.technologies.map((technology) => (
            <div className="badge badge-outline">{technology}</div>
          ))}
        </div>
        <p className="text-lg">
          {project.projectDescription}{" "}
          <a className="link" href={project.projectLink}>
            view website
          </a>
        </p>
      </div>
    </li>
  );
};

export default ProjectCard;
