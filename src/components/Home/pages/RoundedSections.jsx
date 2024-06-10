import { useNavigate } from "react-router-dom";

const RoundedSections = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 w-full mb-8">
        <div
          className="relative w-full cursor-pointer"
          onClick={() => navigate("/shop")}
        >
          <div className="flex flex-col sm:flex-row gap-2">
            <img
              src="/assets/page-3/DSC_6971-copy.jpeg"
              alt="DSC_7062.JPG"
              className="w-full sm:w-1/2 h-[33rem] object-cover"
            />
            <img
              src="/assets/page-3/DSC_6963.jpeg"
              alt="DSC_7062.JPG"
              className="w-full sm:w-1/2 h-[33rem] object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent flex justify-center items-center">
            <span className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-[8em] font-bold font-sans tracking-tighter">
              Rounded Neck T-Shirts
            </span>
            {/* <img
              src="/assets/page-2/Untitled-design.png"
              alt="Untitled-design.png"
              className="w-full"
            /> */}
          </div>
        </div>

        <div
          className="relative w-full cursor-pointer"
          onClick={() => navigate("/shop")}
        >
          <div className="flex flex-col sm:flex-row gap-2">
            <img
              src="/assets/page-3/DSC_7028.jpeg"
              alt="DSC_7062.JPG"
              className="w-full sm:w-1/2 h-[33rem] object-cover"
            />
            <img
              src="/assets/page-3/DSC_7029.jpeg"
              alt="DSC_7062.JPG"
              className="w-full sm:w-1/2 h-[33rem] object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent flex justify-center items-center">
            <span className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-[8em] font-bold font-sans tracking-tighter">
              PREMIUM ZIPPERS
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoundedSections;
