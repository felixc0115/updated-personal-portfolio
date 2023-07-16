const ProjectCard = ({ project }) => {
  return (
    <li className="group relative flex flex-col items-start">
      <figure>
        <img
          width="600"
          height="360"
          className="border-double border-8 border-stone-800"
          src={require(`../data/${project.projectPic}.png`)}
          alt="app preview"
        />
      </figure>
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
        <p className="text-xl">{project.projectDescription}</p>
      </div>
    </li>
  );
};

export default ProjectCard;
