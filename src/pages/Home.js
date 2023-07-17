const Home = ({ personalInfo }) => {
  return (
    <div className="hero base-100 mt-32">
      <div className="hero-content flex-col lg:flex-row-reverse mb-32">
        <img
          src={require("../data/IMG_1469.jpg")}
          alt="personal"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="mt-32">
          <h1 className="text-6xl font-bold">{personalInfo.homeTitle}</h1>
          <p className="py-6 text-xl">{personalInfo.homeParagraph}</p>
        </div>
      </div>
    </div>
  );
};
export default Home;
