import { useEffect, useState } from "react";
import { useHoodiesCart } from "../../hooks/HoodiesCartContext";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

const HoodiesCart = () => {
  const [storeCartData, setStoreCartData] = useState([]);
  const { cartItems } = useHoodiesCart();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Load cart data from localStorage when the component mounts
  useEffect(() => {
    const savedCartData = localStorage.getItem("storeCartData");
    if (savedCartData) {
      setStoreCartData(JSON.parse(savedCartData));
    }
  }, []);

  // Update storeCartData when cartItems changes
  useEffect(() => {
    if (cartItems.length > 0) {
      setStoreCartData((prevData) => {
        const newItems = cartItems.filter(
          (item) => !prevData.some((prevItem) => prevItem.id === item.id)
        );
        return [...prevData, ...newItems];
      });
    }
  }, [cartItems]);

  // Save cart data to localStorage whenever it changes
  useEffect(() => {
    if (storeCartData.length > 0) {
      localStorage.setItem("storeCartData", JSON.stringify(storeCartData));
    }
  }, [storeCartData]);

  const handleRemove = (id) => {
    const updatedCartData = storeCartData.filter((item) => item.id !== id);
    // console.log(updatedCartData);

    setStoreCartData(updatedCartData);
    localStorage.setItem("storeCartData", JSON.stringify(updatedCartData));
    toast("Removed from cart successfully!");
  };

  const handleWishlist = () => {
    console.log("Add to wishlist");

    toast("Add to wishlist successfully!");
  };

  //   console.log(storeCartData);

  return (
    <>
      <div className="flex flex-col py-8 px-4">
        <div className="">
          <h1 className="text-2xl font-semibold text-green-900">My Cart</h1>
        </div>

        <ToastContainer />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {storeCartData.map((items, index) => (
            <div
              key={index}
              className="flex flex-col w-full shadow-xl rounded-xl my-2"
            >
              <div className="flex flex-col md:flex-row gap-4 py-3 px-4 w-full">
                <div className="flex flex-col gap-2 w-full md:w-1/3">
                  <img
                    src={items.image}
                    alt={items.alt}
                    className="h-[20rem] md:h-[15rem] w-full object-cover hover:scale-105 rounded-lg cursor-pointer"
                  />

                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        onClick={toggleDropdown}
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                      >
                        Options
                        <TiArrowSortedDown />
                      </button>
                    </div>

                    {isOpen && (
                      <div
                        className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none opacity-100 z-50"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex="-1"
                      >
                        <div className="py-1" role="none">
                          <span
                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                            tabIndex="-1"
                          >
                            1
                          </span>
                          <span
                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                            tabIndex="-1"
                          >
                            2
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-start w-full">
                  <h1 className="text-xl font-semibold text-black">
                    Dark Gray Solid Custom Twill Shirt form Men
                  </h1>
                  <span className="text-base font-semibold text-slate-500">
                    urben shirt
                  </span>

                  <div className="flex flex-col my-4">
                    <span className="flex items-center text-base font-semibold text-black">
                      <MdOutlineCurrencyRupee />
                      1399
                      <span className="flex items-center text-slate-500 pl-2">
                        <MdOutlineCurrencyRupee />
                        2999 <span className="text-green-500">(53% Off)</span>
                      </span>
                    </span>

                    <span className="flex items-center text-base font-semibold text-black">
                      You Save
                      <span className="flex items-center text-green-500 pl-2">
                        <MdOutlineCurrencyRupee />
                        1600.00
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center gap-14 w-full">
                    <span className="text-base font-semibold text-slate-500">
                      Color : <span className="text-black">Dark Gray</span>
                    </span>

                    <span className="text-base font-semibold text-slate-500">
                      Size: <span className="text-black">L</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full border border-b-2 border-t-0 py-1"></div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full py-1 px-4">
                <button
                  className="hover:scale-110 bg-black hover:bg-black/80 rounded-lg text-lg font-semibold text-white w-full md:w-1/4 p-2"
                  onClick={() => handleRemove(items.id)}
                >
                  Remove
                </button>

                <button
                  className="hover:scale-110 bg-blue-700 hover:bg-blue-600 rounded-lg text-lg font-semibold text-white w-full md:w-3/4 p-2"
                  onClick={handleWishlist}
                >
                  Move To Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center w-full mt-14 mb-8">
          <button className="hover:scale-110 bg-green-700 hover:bg-green-600 rounded-lg text-2xl font-bold text-white w-full sm:w-1/5 p-2">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default HoodiesCart;
