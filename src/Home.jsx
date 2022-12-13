import heroImage from "./images/img4.png"
import image1 from "./images/img1.png"
import image2 from "./images/img2.png"
import image3 from "./images/img3.png"
import image5 from "./images/img5.png"
import { SiShopify } from 'react-icons/si';
import logo1 from  "./images/logo.png"
import { Link } from "react-router-dom";
const Home = () => {
    return ( 
    <>
        <div className="relative mb-10">
            <div className="absolute md:px-24 w-full bg-white opacity-30 grid place-items-center  text-black top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <div className="grid place-items-center ">
                    <h1 className="text-green-900 text-4xl sm:text-6xl py-6 font-black ">DADA GEBEYA</h1>
                    <h1 className=" text-2xl font-semibold self-center pb-4 text-center md:px-14">"A brand is no longer what we tell the consumer it is—it's what consumers tell each other it is." — Scott Cook</h1>
                    {/* <h6 className="font-black mx-auto">"A brand is no longer what we tell the consumer it is—it's what consumers tell each other it is." — Scott Cook</h6> */}
                </div>
            </div>
            <div className="absolute z-30 my-8 text-base top-3/4 left-1/2 -translate-x-1/2 ">
            <Link to={"/shop"} class="group relative py-3 px-8  bg-white rounded">
                <div class="absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span class="relative text-black group-hover:text-white">GO TO SHOP</span>
            </Link>
                {/* <Link className=" bg-green-600 text-white rounded  font-bold mt-10  hover:scale-125 " to={"/shop"}>GO TO SHOP</Link> */}
            </div>
            <img className="w-full h-120 md:h-screen object-cover brightness-50 z-20" src={heroImage} alt="" />
        </div>

        <div className="grid place-content-center mt-20 mb-10">
            <h1 className="text-2xl font-semibold">OUR SERVICE</h1>
            <div className="h-1 my-1 mx-auto bg-green-500 w-16"></div>
        </div>


        <div className=" grid lg:grid-cols-4 sm:grid-cols-2  px-10 ">
            <div className="bg-white m-3 shadow-md relative hover:shadow-lg">
                <div className="absolute -top-3 border shadow -left-3 bg-white rounded-full w-8 h-8 m-1 flex items-center justify-center ">
                    <SiShopify className="text-green-500"/>
                </div>
                <img className="w-16 bg-gray-800 px-1 border-white border-4 rounded-full h-16 object-contain absolute top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 " 
                    src={logo1} alt="" />

                <img className="h-40 w-full object-cover rounded-b-md" src={image1} alt="" />
                <div className="my-10 px-2">
                <p className="text-gray-600">Lorem ipsum, dolor sit amet conse adipisicing elit. Sed mollitia fuga corrupti.</p>

                </div>
            </div>
            <div className="bg-white m-3 shadow-md relative hover:shadow-lg">
                <div className="absolute -top-3 border shadow -left-3 bg-white rounded-full w-8 h-8 m-1 flex items-center justify-center ">
                    <SiShopify className="text-green-500"/>
                </div>
                <img className="w-16 bg-gray-800 px-1 border-white border-4 rounded-full h-16 object-contain absolute top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 " 
                    src={logo1} alt="" />

                <img className="h-40 w-full object-cover rounded-b-md" src={image2} alt="" />
                <div className="my-10 px-2">
                <p className="text-gray-600">Lorem ipsum, dolor sit amet conse adipisicing elit. Sed mollitia fuga corrupti.</p>

                </div>
            </div>

            <div className="bg-white m-3 shadow-md relative hover:shadow-lg">
                <div className="absolute -top-3 border shadow -left-3 bg-white rounded-full w-8 h-8 m-1 flex items-center justify-center ">
                    <SiShopify className="text-green-500"/>
                </div>
                <img className="w-16 bg-gray-800 px-1 border-white border-4 rounded-full h-16 object-contain absolute top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 " 
                    src={logo1} alt="" />

                <img className="h-40 w-full object-cover rounded-b-md" src={image3} alt="" />
                <div className="my-10 px-2">
                <p className="text-gray-600">Lorem ipsum, dolor sit amet conse adipisicing elit. Sed mollitia fuga corrupti.</p>

                </div>
            </div>

            <div className="bg-white m-3 shadow-md relative hover:shadow-lg">
                <div className="absolute -top-3 border shadow -left-3 bg-white rounded-full w-8 h-8 m-1 flex items-center justify-center ">
                    <SiShopify className="text-green-500"/>
                </div>
                <img className="w-16 bg-gray-800 px-1 border-white border-4 rounded-full h-16 object-contain absolute top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 " 
                    src={logo1} alt="" />

                <img className="h-40 w-full object-cover rounded-b-md" src={image5} alt="" />
                <div className="my-10 px-2">
                <p className="text-gray-600">Lorem ipsum, dolor sit amet conse adipisicing elit. Sed mollitia fuga corrupti.</p>

                </div>
            </div>

        </div>

        <div className="py-10 my-10 flex bg-black">
            <h2 className="text-white mx-auto">Footer here</h2>
        </div>
        
    </>
     );

}
 
export default Home;