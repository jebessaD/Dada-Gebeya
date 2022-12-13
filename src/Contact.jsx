import { Link } from "react-router-dom";
import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail ,MdAttachEmail,MdOutlineSubject} from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { BiMessageSquareDetail } from 'react-icons/bi';

import {RiTelegramLine,RiInstagramLine,RiLinkedinBoxFill,RiFacebookCircleLine,RiTwitterLine} from "react-icons/ri"


const Contact = () => {
    return ( 
    <div className="grid md:grid-cols-6 sm:p-8">
        <div className=" bg-white md:col-span-6 text-center m-4 p-10 ">
                <h2 className="text-3xl  text-gray-600">Love to hear form you,</h2>
                <h1 className="text-5xl py-4 font-semibold text-gray-700">GET <span className="text-green-500">IN </span> TOUCH</h1>
                <p className="text-sm text-center pt-4 text-gray-500">If you have any suggestion, question or even you want to say Hello. Please fill out the form below and we will reply you shortly.</p>
        </div>
        
        <div className="py-4 bg-white flex flex-col md:col-span-2  m-4 p-10">
            <h1 className="text-2xl mx-auto font-semibold mt-6">OUR ADDRESS</h1>
            {/* <div className="h-1 my-1 mx-auto bg-green-500 w-16"></div> */}
            <div className="p-3 ">
            {/* <p><span className="text-lg pr-4"><HiLocationMarker/></span>6kilo Addis Ababa, Ethiopia </Link> */}
            <p className="flex items-center my-3 text-gray-700"><span className="text-gray-800 text-lg pr-4"><AiFillPhone/></span>+251 945 818 635 </p>
            <p className="flex items-center my-3 text-gray-700"><span className="text-gray-800 text-lg pr-4"><MdEmail/></span> dadagebeya@gmail.com </p>
            <p className="flex items-center my-3 text-gray-700"><span className="text-gray-800 text-lg pr-4"><HiLocationMarker/></span>6kilo Addis Ababa, Ethiopia </p>
            <div className="h-px bg-gray-300 w-11/12 my-9 mb-1 mx-auto"></div>
                <div className="flex flex-col my-4 mb-2">
                    <h1 className="text-lg mx-auto font-semibold ">SOCIAL PROFILES</h1>
                </div>
                <div className="flex  text-2xl text-gray-700 justify-center">
                    <Link to={{ pathname: "https://google.com/" }} className="mr-5 group  "><RiTelegramLine className="group-hover:-translate-y-1 group-hover:text-green-500 transition-all duration-[400ms] ease-out" /></Link>
                    <Link to={{ pathname: "https://herewecode.io/" }} className="mr-5 group"><RiInstagramLine className="transition-all duration-[400ms] ease-out group-hover:-translate-y-1  group-hover:text-green-500" /></Link>
                    <Link to={{ pathname: "https://herewecode.io/" }} className="mr-5 group"><RiLinkedinBoxFill className="transition-all duration-[400ms] ease-out group-hover:-translate-y-1  group-hover:text-green-500" /></Link>
                    <Link to={{ pathname: "https://herewecode.io/" }} className="mr-5 group"><RiFacebookCircleLine className="transition-all duration-[400ms] ease-out group-hover:-translate-y-1  group-hover:text-green-500" /></Link>
                    <Link to={{ pathname: "https://herewecode.io/" }} className="mr-5 group"><RiTwitterLine className="transition-all duration-[400ms] ease-out group-hover:-translate-y-1  group-hover:text-green-500" /></Link>

                </div>
            </div>
            
        </div>

        <div className="md:col-span-4 py-4 bg-white  m-4 p-8">
            {/* <div className="h-px bg-gray-300 w-11/12 my-9 mb-1 mx-auto"></div> */}

            <form  className="grid grid-cols-2 mt-1 text-gray-600">
                
                <div className="flex my-4  items-center pr-4 space-x-2">
                    <label htmlFor="name"><FaUserAlt/></label>
                    <input  className="p-2 outline-none hover:bg-gray-50 focus:border-gray-400 rounded border w-full" placeholder="Name" type="text"  id="name" />
                </div>
                <div className="flex my-4 items-center space-x-2">
                    <label className="text-lg" htmlFor="email"><MdAttachEmail/></label>
                    <input  className="p-2 outline-none hover:bg-gray-50 focus:border-gray-400 rounded border w-full" placeholder="Email" type="email"  id="name" />
                </div>
                <div className="flex my-4 col-span-2 items-center space-x-2">
                    <label className="text-lg" htmlFor="subject"><MdOutlineSubject/></label>
                    <input  className="p-2 outline-none hover:bg-gray-50 focus:border-gray-400 rounded border w-full" placeholder="Subject" type="text"  id="name" />
                </div>
                <div className="flex my-4 col-span-2 items-center space-x-2">
                    <label className="text-lg" htmlFor="message"><BiMessageSquareDetail/></label>
                    <textarea id="message" class="resize-y p-2 w-full h-24 rounded-md border outline-none hover:bg-gray-50 focus:border-gray-400"></textarea>
                </div>

                <button type="submit" className="py-1 col-span-2 rounded bg-green-500 w-24 text-white text-lg ml-auto">Send</button>


            </form>

        </div>  

    </div> );
}
 
export default Contact;