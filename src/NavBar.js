import { Link, NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useGlobalContext } from "./context";
import logo from "./images/logo.png";
const NavBar = () => {
  const { amount } = useGlobalContext();
  return (
    <div className="flex justify-between md:px-16 py-5 items-center shadow-sm w-auto relative z-20 bg-white">
      {/* <div className="text-green-500 font-bold text-2xl ">DADA SHOP</div> */}
      <Link to={"/"}>
        <img className="h-8" src={logo} alt="Dada Gebeya logo" />
      </Link>
      <div className="">
        <ul className=" space-x-3 hidden sm:flex ">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-green-500" : "not-active-class"}
            to={"/"}>Home</NavLink>

          <NavLink
            className={({ isActive }) =>
            isActive ? "text-green-500" : "not-active-class"}
            to={"/shop"}>Shop</NavLink>

          <NavLink
            className={({ isActive }) =>
            isActive ? "text-green-500" : "not-active-class"}
            to={"/about"}>About</NavLink>

          <NavLink
            className={({ isActive }) =>
            isActive ? "text-green-500" : "not-active-class"}
            to={"/contact"}>Contact</NavLink>

          <NavLink className={({ isActive }) =>
            isActive ? "relative flex text-green-500" : "relative flex text-gray-500"} to={"/cart"} >
            
            <BsFillCartFill className=" text-xl" />
            <p className="absolute -right-5 -top-4 bg-green-200 flex rounded-full w-6 mx-auto font-bold justify-center">
              {amount>=1?amount:""}
            </p>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
