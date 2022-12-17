import { Link } from "react-router-dom";
import {AiFillHeart} from "react-icons/ai"
import {RiTelegramLine,RiInstagramLine,RiLinkedinBoxFill,RiFacebookCircleLine,RiTwitterLine} from "react-icons/ri"
import { useGlobalContext } from "../hooks/context";


const Footer = () => {
    const {darkMode}=useGlobalContext()
    return ( <>    
<div className={`${darkMode?"bg-neutral-950":"bg-gray-800"}  pt-10 mt-10 flex flex-col justify-center`}>
    <div className="mx-auto flex text-white text-xl bg-green-500 rounded-full p-1">
       
        <a href={"https://t.me/jeb_Deju" } target="_blank" rel="noreferrer" className="mr-5 group  "><RiTelegramLine className="group-hover:-translate-y-1 group-hover:text-gray-100 transition-all duration-[400ms] ease-out" /></a>
        <a href={"https://www.instagram.com/jeba_deju/"} target="_blank" rel="noreferrer" className="mr-5 group"><RiInstagramLine className="transition-all duration-[400ms] ease-out group-hover:-translate-y-1  group-hover:text-gray-100" /></a>
        <a href={"https://www.linkedin.com/in/jebessa-dejene-74a674221/"}  target="_blank" rel="noreferrer" className="mr-5 group"><RiTwitterLine className="transition-all duration-[400ms] ease-out group-hover:-translate-y-1  group-hover:text-gray-100" /></a>
        <a href={"https://www.linkedin.com/in/jebessa-dejene-74a674221"} target="_blank" rel="noreferrer" className="mr-5 group"><RiLinkedinBoxFill className="transition-all duration-[400ms] ease-out group-hover:-translate-y-1  group-hover:text-gray-100" /></a>
        <a href={"https://www.facebook.com/jeb.deju/"} target="_blank" rel="noreferrer" className="group"><RiFacebookCircleLine className="transition-all duration-[400ms] ease-out group-hover:-translate-y-1  group-hover:text-gray-100" /></a>

    </div>
    <div className="mx-auto flex justify-center text-xs sm:space-x-3 space-x-1 text-gray-200 my-5 items-center font-semibold uppercase">
        <Link className="hover:text-neutral-400" to={"/"}>HOME<span className="sm:ml-3 ml-1 ">|</span></Link>
        <Link className="hover:text-neutral-400" to={"/shop"}>SHOP<span className="sm:ml-3 ml-1 ">|</span></Link>
        <Link className="hover:text-neutral-400" to={"/about"}>ABOUT<span className="sm:ml-3 ml-1 ">|</span></Link>
        <Link className="hover:text-neutral-400" to={"/contact"}>CONTACT<span className="sm:ml-3 ml-1 ">|</span></Link>
        <Link className="hover:text-neutral-400" to={"/cart"}>CART</Link>
    </div>
    <div className={` ${darkMode?"bg-neutral-850":" bg-gray-700"} h-px  mx-32`}></div>
    <div className="mx-auto text-white font-bold mt-3 flex items-center space-x-2">
        <h2>DADA GEBEYA</h2> 
        <AiFillHeart/>
        <h2>WITH MUCH LOVE</h2>
    </div>
    <p className="mx-auto text-xs text-gray-400 py-2">+251945818635 | dadagebeya@gmail.com</p>
    <p className={` ${darkMode?"bg-neutral-850":"bg-green-500"} mx-auto text-xs text-center text-white  py-1 w-full`}>2022 | All right reserved </p>

</div></> );
}
 
export default Footer;