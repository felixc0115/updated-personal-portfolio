const ProjectCard = () => {
  return (
    <li className="card w-96 bg-base-100 group relative flex flex-col items-start">
      <figure>
        <img
          className="border-8 border-indigo-600"
          src={require("../data/train-together-preview.png")}
          alt="app preview"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">
          Train Together
          <div className="badge badge-secondary">Deployed</div>
        </h2>
        <p>
          The TrainTogether application is a a full-stack web app aimed to
          improve one's physical well being through stretches and other
          modalities. The app allows a user to upload, explore, and save various
          exercise programs.{" "}
        </p>
        <div className="card-actions justify-start">
          <div className="badge badge-outline">React</div>
          <div className="badge badge-outline">Express</div>
          <div className="badge badge-outline">MongoDB</div>
          <div className="badge badge-outline">Redux</div>
          <div className="badge badge-outline">Tailwind</div>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
