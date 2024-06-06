import { TiShoppingCart } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "POLO", href: "/polos" },
  { name: "HOODIES", href: "/hoodies" },
  { name: "ZIPPERS", href: "/zippers" },
  { name: "ROUND NECK T-SHIRTS", href: "/rounded-Tshirts" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      {/* desktop navbar */}
      <nav className="flex items-center justify-between bg-yellow-300 py-4">
        <div></div>

        <div className="hidden md:flex items-center gap-4">
          {navigation.map((items, index) => (
            <Link
              key={index}
              to={items.href}
              className={`text-lg font-semibold border-2 px-2 rounded-md hover:animate-pulse transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${
                location.pathname === items.href
                  ? "text-gray-500/100 border-gray-500/100"
                  : "text-black border-black"
              }`}
            >
              {items.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex pr-4">
          <TiShoppingCart className="text-4xl text-black cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
