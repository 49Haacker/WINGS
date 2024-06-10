import PropTypes from "prop-types";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "SHOP", href: "/shop" },
  { name: "CONTACT-US", href: "#" },
  // { name: "HOODIES", href: "/hoodies" },
  // { name: "ZIPPERS", href: "/zippers" },
  // { name: "ROUND NECK T-SHIRTS", href: "/rounded-Tshirts" },
];

const SideNavbar = ({ toggleSideNav }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50"
      onClick={toggleSideNav}
    >
      <div
        className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-start p-4">
          {navigation.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="text-lg font-semibold py-2"
              onClick={toggleSideNav}
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-4">
            <TiShoppingCart className="text-4xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

SideNavbar.propTypes = {
  toggleSideNav: PropTypes.func.isRequired,
};

export default SideNavbar;
