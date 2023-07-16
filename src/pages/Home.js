import { NavLink } from "react-router-dom";

const Home = ({ personalInfo }) => {
  return (
    <div className="hero base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={require("../data/IMG_1469.jpg")}
          alt="personal"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-6xl font-bold">{personalInfo.homeTitle}</h1>
          <p className="py-6 text-xl">{personalInfo.homeParagraph}</p>
          {/* <ul class="text-2xl flex justify-between">
            <li class="fa-brands fa-square-js"></li>
            <li className="mr-0" class="fa-brands fa-react"></li>
            <li class="fa-solid fa-leaf"></li>
            <li class="fa-brands fa-node-js"></li>
            <li class="fa-brands fa-html5"></li>
            <li class="fa-brands fa-css3-alt"></li>
            <li class="fa-brands fa-git-alt"></li>
            <li class="fa-brands fa-github"></li>
          </ul> */}
          {/* <NavLink to="/projects" className="btn btn-primary mt-8">
            View Projects
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
