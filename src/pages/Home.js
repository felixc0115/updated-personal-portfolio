const Home = ({ personalInfo }) => {
  return (
    <div className="hero base-100 mt-32">
      <div className="hero-content flex-col lg:flex-row-reverse mb-32">
        <img
          src={require("../data/IMG_1469.jpg")}
          alt="personal"
          className="max-w-xs sm:max-w-sm rounded-lg shadow-2xl"
        />
        <div className="mt-32 mx-auto">
          <h1 className="text-3xl md:text-6xl font-bold">
            {personalInfo.homeTitle}
          </h1>
          <p className="text-lg sm:text-xl py-6 ">
            {personalInfo.homeParagraph}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
