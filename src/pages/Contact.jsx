import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail ,MdAttachEmail,MdOutlineSubject} from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { BiMessageSquareDetail } from 'react-icons/bi';
import Footer from "../components/Footer";

import {RiTelegramLine,RiInstagramLine,RiLinkedinBoxFill,RiFacebookCircleLine,RiTwitterLine} from "react-icons/ri"
import { useGlobalContext } from "../hooks/context";


const Contact = () => {
    const {colors,darkMode}=useGlobalContext()
    return ( 
    <>
    <div className="grid md:grid-cols-6 sm:p-8">
        <div className={`${darkMode?"text-gray-100":"text-gray-700 bg-white"} md:col-span-6 text-center sm:m-4 py-10 px-2 my-4 mx-2 sm:p-10 `}>
                <h2 className="text-3xl  ">Love to hear from you,</h2>
                <h1 className="text-5xl py-4 font-semibold ">GET <span className="text-green-500">IN </span> TOUCH</h1>
                <p className={`${darkMode?"text-neutral-400":"text-gray-500 "} text-sm text-center pt-4 `}>If you have any suggestion, question or even you want to say Hello. Please fill out the form below and we will reply you shortly.</p>
        </div>
        
        <div className={`${darkMode?"text-gray-50 bg-neutral-850 ":"text-gray-700 bg-white "} py-4  flex flex-col md:col-span-2  sm:m-4 p-2 m-2 sm:p-10`}>
            <h1 className=" text-2xl mx-auto font-semibold mt-6">OUR ADDRESS</h1>
            {/* <div className="h-1 my-1 mx-auto bg-green-500 w-16"></div> */}
            <div className="sm:p-3 mx-auto ">
            {/* <p><span className="text-lg pr-4"><HiLocationMarker/></span>6kilo Addis Ababa, Ethiopia </Link> */}
            <p className="flex items-center my-3 "><span className={`${darkMode?"text-gray-200":"text-gray-800"} text-lg pr-4`}><AiFillPhone/></span>+251 945 818 635 </p>
            <p className="flex items-center my-3 "><span className={`${darkMode?"text-gray-200":"text-gray-800"} text-lg pr-4`}><MdEmail/></span> dadagebeya@gmail.com </p>
            <p className="flex items-center my-3 "><span className={`${darkMode?"text-gray-200":"text-gray-800"} text-lg pr-4`}><HiLocationMarker/></span>6kilo Addis Ababa, Ethiopia </p>
            <div className="h-px bg-gray-300 w-11/12 my-9 mb-1 mx-auto"></div>
                <div className="flex flex-col my-4 mb-2">
                    <h1 className="text-lg mx-auto font-semibold ">SOCIAL PROFILES</h1>
                </div>
                <div className="flex  text-2xl mx-auto justify-center">
                    <a href={"https://t.me/jeba_Deju" } target="_blank" rel="noreferrer" className="mr-5 group  "><RiTelegramLine className="group-hover:-translate-y-1 group-hover:text-green-500 transition-all duration-[400ms] ease-out" /></a>
                    <a href={"https://www.instagram.com/jeb_deju/"} target="_blank" rel="noreferrer" className="mr-5 group"><RiInstagramLine className="transition-all duration-[400ms] ease-out group-hover:-translate-y-1  group-hover:text-green-500" /></a>
                    <a href={"https://www.linkedin.com/in/jebessa-dejene-74a674221"}target="_blank" rel="noreferrer" className="mr-5 group"><RiLinkedinBoxFill className="transition-all duration-[400ms] ease-out group-hover:-translate-y-1  group-hover:text-green-500" /></a>
                    <a href={"https://www.facebook.com/jeb.deju/"} target="_blank" rel="noreferrer" className="mr-5 group"><RiFacebookCircleLine className="transition-all duration-[400ms] ease-out group-hover:-translate-y-1  group-hover:text-green-500" /></a>
                    <a href={"https://www.linkedin.com/in/jebessa-dejene-74a674221/"} target="_blank" rel="noreferrer" className=" group"><RiTwitterLine className="transition-all duration-[400ms] ease-out group-hover:-translate-y-1  group-hover:text-green-500" /></a>

                </div>
            </div>
            
        </div>

        <div className={`${colors.color2} md:col-span-4 py-4  sm:m-4 p-8 px-4 m-2 sm:p-8`}>
            {/* <div className="h-px bg-gray-300 w-11/12 my-9 mb-1 mx-auto"></div> */}

            <form  className={` ${darkMode?"text-neutral-200":"text-gray-600"} grid grid-cols-2 gap-3 mt-1 `}>
                
                <div className="flex my-2 col-span-2 sm:col-span-1 items-center space-x-2">
                    <label className="text-lg" htmlFor="name"><FaUserAlt/></label>
                    <input  className={` ${darkMode?"bg-neutral-900 placeholder:text-neutral-600 border-neutral-900 hover:bg-neutral-850 focus:border-neutral-800 ":"hover:bg-gray-50 focus:border-gray-400"} p-2 outline-none  rounded border w-full`} placeholder="Name" type="text"  id="name" />
                </div>
                <div className="flex my-2 col-span-2 sm:col-span-1 items-center space-x-2">
                    <label className="text-lg" htmlFor="email"><MdAttachEmail/></label>
                    <input  className={` ${darkMode?"bg-neutral-900 placeholder:text-neutral-600 border-neutral-900 hover:bg-neutral-850 focus:border-neutral-800 ":"hover:bg-gray-50 focus:border-gray-400"} p-2 outline-none  rounded border w-full`} placeholder="Email" type="email"  id="name" />
                </div>
                <div className="flex my-2 col-span-2 items-center space-x-2">
                    <label className="text-lg" htmlFor="subject"><MdOutlineSubject/></label>
                    <input  className={` ${darkMode?"bg-neutral-900 placeholder:text-neutral-600 border-neutral-900 hover:bg-neutral-850 focus:border-neutral-800 ":"hover:bg-gray-50 focus:border-gray-400"} p-2 outline-none  rounded border w-full`} placeholder="Subject" type="text"  id="name" />
                </div>
                <div className="flex my-2 col-span-2 items-center space-x-2">
                    <label className="text-lg" htmlFor="message"><BiMessageSquareDetail/></label>
                    <textarea id="message" className={` ${darkMode?"bg-neutral-900 placeholder:text-neutral-600 border-neutral-900 hover:bg-neutral-850 focus:border-neutral-800 ":"hover:bg-gray-50 focus:border-gray-400"} p-2 outline-none  rounded border w-full`}></textarea>
                </div>

                <button type="submit" className="py-1 col-span-2 rounded bg-green-500 w-24 text-white text-lg ml-auto">Send</button>


            </form>

        </div>  

    </div>
    <Footer />
    </> );
}
 
export default Contact;