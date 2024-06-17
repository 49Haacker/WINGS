import { useNavigate } from "react-router-dom";
import InfiniteScroller from "./InifiteScroller";

const PremiumHoodiesSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div
          className="flex w-full h-3/4 cursor-pointer mt-5"
          onClick={() => navigate("/shop")}
        >
          <img
            src="https://images.bewakoof.com/uploads/grid/app/thin-banner-desktop-sneakers-kakashi-1718372747.jpg"
            alt="DSC_7062.JPG"
            className="w-full h-[15rem]"
          />
        </div>

        <div className="flex flex-col w-full">
          <span className="text-black text-center my-4 text-2xl font-semibold">
            Shop by Category- Men
          </span>

          <InfiniteScroller />
        </div>
      </div>
    </>
  );
};

export default PremiumHoodiesSection;
