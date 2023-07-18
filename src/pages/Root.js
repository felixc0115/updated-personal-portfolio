import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <div className="">
      <NavBar />
      <main className="">
        <div className="sm:px-8 mt-10 sm:mt-18">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RootPage;
