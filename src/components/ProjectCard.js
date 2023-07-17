const ProjectCard = ({ project }) => {
  return (
    <li className="group relative flex flex-col items-start">
      <div className="m-h-1">
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
        <p className="text-lg">{project.projectDescription}</p>
      </div>
    </li>
  );
};

export default ProjectCard;
