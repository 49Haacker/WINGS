import { Link } from "react-router-dom";
import "./infiniteScroll.css";
import { useEffect, useRef } from "react";

const initialImages = [
  {
    id: 1,
    imageurl: "/assets/page-1/product-1-1.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Hoodies",
    herf: "/hoodies",
  },
  {
    id: 2,
    imageurl: "/assets/page-1/product-9-2.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Zipper",
    herf: "/zippers",
  },
  {
    id: 3,
    imageurl: "/assets/page-1/product-6-2.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Round Neck Tees",
    herf: "/rounded-Tshirts",
  },
  {
    id: 4,
    imageurl: "/assets/page-1/product-3-1.jpeg",
    altText: "DSC_6963.JPG",
    productName: "White Polo Tees",
    herf: "/polo",
  },
  {
    id: 5,
    imageurl: "/assets/page-1/product-4-1.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Round Neck Tees",
    herf: "/rounded-Tshirts",
  },
  {
    id: 1,
    imageurl: "/assets/page-1/product-1-1.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Hoodies",
    herf: "/hoodies",
  },
  {
    id: 2,
    imageurl: "/assets/page-1/product-9-2.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Zipper",
    herf: "/zippers",
  },
  {
    id: 3,
    imageurl: "/assets/page-1/product-6-2.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Round Neck Tees",
    herf: "/rounded-Tshirts",
  },
  {
    id: 4,
    imageurl: "/assets/page-1/product-3-1.jpeg",
    altText: "DSC_6963.JPG",
    productName: "White Polo Tees",
    herf: "/polo",
  },
  {
    id: 5,
    imageurl: "/assets/page-1/product-4-1.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Round Neck Tees",
    herf: "/rounded-Tshirts",
  },
  {
    id: 1,
    imageurl: "/assets/page-1/product-1-1.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Hoodies",
    herf: "/hoodies",
  },
  {
    id: 2,
    imageurl: "/assets/page-1/product-9-2.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Zipper",
    herf: "/zippers",
  },
  {
    id: 3,
    imageurl: "/assets/page-1/product-6-2.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Round Neck Tees",
    herf: "/rounded-Tshirts",
  },
  {
    id: 4,
    imageurl: "/assets/page-1/product-3-1.jpeg",
    altText: "DSC_6963.JPG",
    productName: "White Polo Tees",
    herf: "/polo",
  },
  {
    id: 5,
    imageurl: "/assets/page-1/product-4-1.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Round Neck Tees",
    herf: "/rounded-Tshirts",
  },
  {
    id: 1,
    imageurl: "/assets/page-1/product-1-1.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Hoodies",
    herf: "/hoodies",
  },
  {
    id: 2,
    imageurl: "/assets/page-1/product-9-2.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Zipper",
    herf: "/zippers",
  },
  {
    id: 3,
    imageurl: "/assets/page-1/product-6-2.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Round Neck Tees",
    herf: "/rounded-Tshirts",
  },
  {
    id: 4,
    imageurl: "/assets/page-1/product-3-1.jpeg",
    altText: "DSC_6963.JPG",
    productName: "White Polo Tees",
    herf: "/polo",
  },
  {
    id: 5,
    imageurl: "/assets/page-1/product-4-1.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Round Neck Tees",
    herf: "/rounded-Tshirts",
  },
  {
    id: 1,
    imageurl: "/assets/page-1/product-1-1.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Hoodies",
    herf: "/hoodies",
  },
  {
    id: 2,
    imageurl: "/assets/page-1/product-9-2.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Zipper",
    herf: "/zippers",
  },
  {
    id: 3,
    imageurl: "/assets/page-1/product-6-2.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Round Neck Tees",
    herf: "/rounded-Tshirts",
  },
  {
    id: 4,
    imageurl: "/assets/page-1/product-3-1.jpeg",
    altText: "DSC_6963.JPG",
    productName: "White Polo Tees",
    herf: "/polo",
  },
  {
    id: 5,
    imageurl: "/assets/page-1/product-4-1.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Round Neck Tees",
    herf: "/rounded-Tshirts",
  },
  {
    id: 1,
    imageurl: "/assets/page-1/product-1-1.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Hoodies",
    herf: "/hoodies",
  },
  {
    id: 2,
    imageurl: "/assets/page-1/product-9-2.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Zipper",
    herf: "/zippers",
  },
  {
    id: 3,
    imageurl: "/assets/page-1/product-6-2.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Round Neck Tees",
    herf: "/rounded-Tshirts",
  },
  {
    id: 4,
    imageurl: "/assets/page-1/product-3-1.jpeg",
    altText: "DSC_6963.JPG",
    productName: "White Polo Tees",
    herf: "/polo",
  },
  {
    id: 5,
    imageurl: "/assets/page-1/product-4-1.jpeg",
    altText: "DSC_6963.JPG",
    productName: "Round Neck Tees",
    herf: "/rounded-Tshirts",
  },
];

const InfiniteScroller = () => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;

    const handleMouseEnter = () => {
      scroller.style.animationPlayState = "paused";
    };

    const handleMouseLeave = () => {
      scroller.style.animationPlayState = "running";
    };

    scroller.addEventListener("mouseenter", handleMouseEnter);
    scroller.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      scroller.removeEventListener("mouseenter", handleMouseEnter);
      scroller.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="flex justify-center items-center w-full relative overflow-hidden">
        <div ref={scrollerRef} className="scroller">
          {[...initialImages, ...initialImages].map((item, index) => (
            <Link
              key={index}
              to={item.herf}
              className="relative cursor-pointer w-[15rem] h-[24rem] sm:h-[20rem]"
            >
              <img
                className="w-full h-full object-cover"
                src={item.imageurl}
                alt={item.altText}
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent flex justify-center items-end pb-4">
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

export default InfiniteScroller;
