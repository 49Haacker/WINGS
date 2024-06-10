import { useNavigate } from "react-router-dom";

const PremiumHoodiesSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 w-full">
        <div
          className="relative w-full cursor-pointer"
          onClick={() => navigate("/shop")}
        >
          <img
            src="/assets/page-2/DSC_7062.JPG"
            alt="DSC_7062.JPG"
            className="w-full h-[33rem] object-cover"
          />

          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent flex justify-center items-center">
            <span className="text-white text-center text-4xl md:text-[8em] font-bold font-sans leading-[0.5em] sm:leading-[0em] tracking-tighter">
              Premium Hoodies
            </span>
            {/* <img
              src="/assets/page-2/Untitled-design.png"
              alt="Untitled-design.png"
              className="w-full"
            /> */}
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-2 w-full h-full cursor-pointer"
          onClick={() => navigate("/shop")}
        >
          <div className="w-full sm:w-1/2">
            <img
              src="/assets/page-2/page-2-left.png"
              alt="DSC_7062.JPG"
              className="w-full h-[15rem]"
            />
          </div>

          <div className="w-full sm:w-1/2">
            <img
              src="/assets/page-2/page-2-right.png"
              alt="DSC_7062.JPG"
              className="w-full h-[15rem] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumHoodiesSection;
