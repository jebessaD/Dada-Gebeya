import { Link, NavLink } from "react-router-dom";
import { BsFillCartFill,BsMoonStarsFill,BsBrightnessHigh } from "react-icons/bs";
import { RiMenu3Fill} from "react-icons/ri";
import { CgPlayListRemove} from "react-icons/cg";
import { useGlobalContext } from "../hooks/context";
import logo from "../images/logo.png";
import { useEffect, useState } from "react";
const NavBar = () => {
  const { amount,changeDarkMode,darkMode,colors } = useGlobalContext();
  const [menu,setMenu]= useState(false)

  useEffect(()=>{
    setMenu(false)
  },[])
  
  return (
    <div className="relative ">
    <div className={`${darkMode?"bg-neutral-950 text-gray-50":"bg-neutral-50 text-gray-900"} fixed w-full  flex justify-between md:px-16 p-3 sm:py-5 items-center shadow-sm sm:w-auto relative z-20`}>
      
      <Link to={"/"}>
        <img className="sm:h-8 h-6" src={logo} alt="Dada Gebeya logo" />
      </Link>


      <div className="flex space-x-6 items-center">
        <ul className=" space-x-3 hidden sm:flex ">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-green-500" : ""}
            to={"/"}>Home</NavLink>

          <NavLink
            className={({ isActive }) =>
            isActive ? "text-green-500" : ""}
            to={"/shop"}>Shop</NavLink>

          <NavLink
            className={({ isActive }) =>
            isActive ? "text-green-500" : ""}
            to={"/about"}>About</NavLink>

          <NavLink
            className={({ isActive }) =>
            isActive ? "text-green-500" : ""}
            to={"/contact"}>Contact</NavLink>

          <NavLink className={({ isActive }) =>
            isActive ? "relative flex text-green-500" : "relative flex "} to={"/cart"} >
            
            <BsFillCartFill className=" text-xl" />
            <p className="absolute -right-3 -top-3 bg-green-400 text-black flex rounded-full w-4 text-xs mx-auto font-bold justify-center">
              {amount>=1?amount:""}
            </p>
          </NavLink>
        </ul>
       

        <button  className="text-xl text-gray-600" onClick={changeDarkMode}>{darkMode?<BsBrightnessHigh className="text-white font-bold"/>:<BsMoonStarsFill/>}</button>
         <div className=" sm:hidden flex flex-col ">
            <button onClick={()=>setMenu(!menu)}>
              {menu?<CgPlayListRemove className="text-xl"/>:
                            
              <> 
              <RiMenu3Fill className="text-xl"/>
              <p className="absolute right-0 top-3 bg-green-400 text-black flex rounded-full w-4 text-xs mx-auto font-bold justify-center">
                            {amount>=1?amount:""}
                          </p>
              </>
             
              
              }</button>
         </div>

      </div>
      
    </div>
    <div className={`${darkMode?"bg-neutral-950 text-gray-50":"bg-neutral-50 border-b text-gray-900"}  ${menu?"translate-y-0 ":"-translate-y-56"} z-10 absolute flex flex-col sm:hidden duration-500 ease-out transition-all `}>
        <div className=" w-screen text-center p-5 flex flex-col space-y-2">
          <NavLink
              className={({ isActive }) =>
                isActive ? "text-green-500" : ""}
              to={"/"}>Home</NavLink>

            <NavLink
              className={({ isActive }) =>
              isActive ? "text-green-500" : ""}
              to={"/shop"}>Shop</NavLink>

            <NavLink
              className={({ isActive }) =>
              isActive ? "text-green-500" : ""}
              to={"/about"}>About</NavLink>

            <NavLink
              className={({ isActive }) =>
              isActive ? "text-green-500" : ""}
              to={"/contact"}>Contact</NavLink>

            <NavLink
              className={({ isActive }) =>
              isActive ? "text-green-500" : ""}
              to={"/cart"}>
                <div className="flex items-center space-x-1 justify-center">
                  <p>My cart</p>
                  <p className="  bg-green-400 text-black flex rounded-full w-4 h-4 text-xs  font-bold justify-center">
                  {amount>=1?amount:""}
                  </p>
                </div>
                
                </NavLink>
            {/* <NavLink className={({ isActive }) =>
              isActive ? "relative  text-green-500" : "relative flex "} to={"/cart"} >
              mycart
              <BsFillCartFill className=" text-xl mx-auto" />
              <p className="absolute -right-3 -top-3 bg-green-400 text-black flex rounded-full w-4 text-xs mx-auto font-bold justify-center">
                {amount>=1?amount:""}
              </p>
            </NavLink> */}
        </div>

      </div>
    </div>
  );
};

export default NavBar;
