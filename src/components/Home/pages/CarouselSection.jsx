import { Link } from "react-router-dom";
import "../../../App.css";
import { useEffect, useState } from "react";

const CarouselSection = () => {
  const carouselItems = [
    {
      url: "/assets/page-1/WINGS-Home-image-1.png",
      alt: "wings-home-1",
    },
    {
      url: "/assets/page-1/WINGS-Home-image-2.png",
      alt: "wings-home-2",
    },
    {
      url: "/assets/page-1/WINGS-Home-image-1.png",
      alt: "wings-home-1",
    },
    {
      url: "/assets/page-1/WINGS-Home-image-2.png",
      alt: "wings-home-2",
    },
  ];

  const productsImage = [
    {
      imageurl: "/assets/page-1/DSC_6930.JPG",
      altText: "DSC_6963.JPG",
      productName: "Hoodies",
      herf: "/hoodies",
    },
    {
      imageurl: "/assets/page-1/DSC_6963.JPG",
      altText: "DSC_6963.JPG",
      productName: "Zipper",
      herf: "/zippers",
    },
    {
      imageurl: "/assets/page-1/DSC_6972.JPG",
      altText: "DSC_6963.JPG",
      productName: "Rounded Neck T-shirt",
      herf: "/rounded-Tshirts",
    },
    {
      imageurl: "/assets/page-1/DSC_7028.JPG",
      altText: "DSC_6963.JPG",
      productName: "Rounded Neck T-shirt",
      herf: "/rounded-Tshirts",
    },
    {
      imageurl: "/assets/page-1/DSC_7062.jpg",
      altText: "DSC_6963.JPG",
      productName: "Polos",
      herf: "/polos",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  //   const prevSlide = () => {
  //     setCurrentIndex(
  //       (prevIndex) =>
  //         (prevIndex - 1 + carouselItems.length) % carouselItems.length
  //     );
  //   };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full bg-yellow-300">
        <div className="relative w-full md:w-[88%]">
          {/* Carousel wrapper */}
          <div className="relative h-[33rem] overflow-hidden rounded-lg">
            {/* Carousel items */}
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  visibility: index === currentIndex ? "visible" : "hidden",
                }}
              >
                <img
                  src={item.url}
                  className="block w-full h-full object-cover"
                  alt={item.alt}
                />
              </div>
            ))}
          </div>

          {/* Slider indicators */}
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slider controls */}
          {/* <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button> */}
        </div>

        <div className="snap-x flex justify-center items-center overflow-x-scroll scroll-smooth snap-mandatory gap-4 w-full my-12 hide-scrollbar">
          {productsImage.map((item, index) => (
            <Link
              key={index}
              to={item.herf}
              className="snap-center flex-shrink-0 relative cursor-pointer w-[80%] sm:w-[60%] md:w-[30%] lg:w-[15%] h-[24rem] sm:h-[20rem]"
            >
              <img
                className="w-full h-full rounded-3xl"
                src={item.imageurl}
                alt={item.altText}
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent rounded-b-3xl flex justify-center items-end pb-4">
                <span className="text-white text-center">
                  {item.productName}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarouselSection;
