import { Outlet } from "react-router-dom";
import "../../App.css";
import Navbar from "../Navbar-Footer/Navbar";
import Footer from "../Navbar-Footer/Footer";
import TopHeading from "../Navbar-Footer/TopHeading";

const HomeLayout = () => {
  return (
    <>
      <div className="flex flex-col flex-1 h-screen">
        <TopHeading />

        <Navbar />

        {/* <div className="h-screen"> */}
        <Outlet />
        {/* </div> */}

        <Footer />
      </div>
    </>
  );
};

export default HomeLayout;
