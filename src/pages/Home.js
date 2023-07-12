const Home = ({ personalInfo }) => {
  return (
    <div className="hero min-h-screen base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={require("../data/IMG_1469.jpg")}
          alt="personal"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{personalInfo.homeTitle}</h1>
          <p className="py-6">{personalInfo.homeParagraph}</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
