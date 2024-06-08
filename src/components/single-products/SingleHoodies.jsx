import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHoodiesCart } from "../../hooks/HoodiesCartContext";

const SingleHoodies = () => {
  const [selectImage, setSelectImage] = useState();
  const [rating, setRating] = useState(0);

  const { addToCart } = useHoodiesCart();

  const location = useLocation();
  const { hoodiesSingleData } = location.state;

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

  const handleClickImage = (currentImage) => {
    console.log(currentImage);
    setSelectImage(currentImage);
  };

  const handleStarClick = (value) => {
    setRating(value);
    // console.log("start click value was ", value);
  };

  const handleAddtoCart = (cartData) => {
    addToCart(cartData);
  };
  //   console.log(hoodiesSingleData);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-2 w-full px-4 my-4">
        <div className="snap-x flex flex-row md:flex-col justify-start items-center overflow-y-scroll scroll-smooth snap-mandatory gap-4 my-2 sm:my-12 hide-scrollbar md:h-[33rem] w-full md:w-1/2">
          {productsImage.map((item, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 relative cursor-pointer w-[75%] sm:w-[65%] md:w-full h-[24rem]"
            >
              <img
                className="w-full h-full rounded-3xl"
                src={item.imageurl}
                alt={item.altText}
                onClick={() => handleClickImage(item.imageurl)}
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent rounded-b-3xl flex justify-center items-end pb-4">
                <span className="text-white text-center">
                  {item.productName}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full">
          <img
            src={selectImage ? selectImage : "/assets/page-1/DSC_6930.JPG"}
            alt=""
            className="w-full h-[33rem] rounded-2xl object-cover"
          />
        </div>

        <ToastContainer />

        <div className="flex flex-col justify-between w-full h-[33rem] rounded-2xl mb-8">
          <div className="flex flex-col gap-4 px-7 pt-6">
            <h1 className="text-black font-bold text-2xl">
              Premium Black Hoodies
            </h1>

            <p className="text-black/100 font-bold text-base">
              {hoodiesSingleData.product_para}
            </p>

            <span className="text-green-700 font-bold text-3xl">
              {hoodiesSingleData.product_new_price} /-
            </span>
          </div>

          <div className="flex flex-col px-7 pt-4">
            <h1 className="text-black/100 font-bold text-2xl">
              Rate this Project
            </h1>

            {/* rating */}
            <div className="my-4 flex gap-5">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <span
                    key={index}
                    className="star"
                    onClick={() => handleStarClick(starValue)}
                  >
                    {starValue <= rating ? (
                      <FaStar className="text-3xl text-yellow-400 cursor-pointer" />
                    ) : (
                      <FaRegStar className="text-3xl text-yellow-400 cursor-pointer" />
                    )}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full px-7 py-4">
            <button
              className="hover:scale-110 bg-green-800 hover:bg-green-600 text-white font-bold text-lg p-2 rounded-lg w-full"
              onClick={() => handleAddtoCart(hoodiesSingleData)}
            >
              Add to Cart
            </button>

            <button className="hover:scale-110 bg-black hover:bg-black/80 text-white font-bold text-lg p-2 rounded-lg w-full">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleHoodies;
