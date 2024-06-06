import { useNavigate } from "react-router-dom";
import hoodies from "../../../json/hoodies.json";

const Hoodies = () => {
  const navigate = useNavigate();

  const handleUserClick = (hoodies) => {
    // console.log("send the correct data from the users", hoodies);
    navigate("/single-hoodies", { state: { hoodiesSingleData: hoodies } });
    // navigate("/user-profile");
  };
  // console.log(hoodies);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-3 w-full bg-white px-5 py-8">
        {hoodies.map((itmes, index) => (
          // sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5
          <div
            key={index}
            className="flex flex-col w-full min-[399px]:w-[70%] sm:w-full m-auto cursor-pointer"
            onClick={() => handleUserClick(itmes)}
          >
            {/* <div className="h-[12rem]"> */}
            <img
              src={itmes.image}
              alt={itmes.alt}
              className="rounded-2xl h-[25rem] transform transition-transform delay-150 duration-150 ease-in-out hover:scale-105"
            />
            {/* </div> */}

            <div className="flex flex-col px-2">
              <h1 className="text-black font-semibold">
                Premium Black Hoodies
              </h1>
              <p className="text-gray-600/80 font-semibold">
                Premium Black Hoodies for men
              </p>

              <span className="text-green-600 font-semibold">
                949 /- <span>1999/-</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hoodies;
