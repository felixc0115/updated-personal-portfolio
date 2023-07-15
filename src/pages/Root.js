import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <div className="h-min">
      <NavBar />
      <main className="h-min">
        <div className="sm:px-8 mt-10 sm:mt-24">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RootPage;
