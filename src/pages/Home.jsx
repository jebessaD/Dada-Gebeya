import heroImage from "../images/img4.png";
import image1 from "../images/img1.png";
import image2 from "../images/img2.png";
import image3 from "../images/img3.png";
import image5 from "../images/img5.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/context";
import {HomeCard} from "../components/CardComponent";
const homeCardData = [
  {
    image: image1,
    title: "DELIVERY",
    description:
      "Dada gebeya is a market that houses all types of materials in one location. Laptops, fragrances, skin care, smartphones, home decoration, and groceries are all available online.  ",
  },
  {
    image: image2,
    title: "REFUND",
    description:
      "If you are unhappy with our product, please contact us as soon as possible and we will return your money. We are confident that our customers are always satisfied with our services.",
  },
  {
    image: image3,
    title: "USER FRIENDLY",
    description:
      "If you require our assistance, we are available at all times. We are confident that our website is user-friendly, however,if you require assistance, please let us know.",
  },
  {
    image: image5,
    title: "DISCOUNT",
    description:
      "As an extra-special thank you for being a loyal customer, here's $50 on us. Use it toward any of your favorite products.",
  },
];

const Home = () => {
  const { darkMode } = useGlobalContext();
  return (
    <>
      <div className="relative mb-10">
        <div
          className={`absolute md:px-24 w-full bg-white opacity-30 grid place-items-center  text-black top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2  `}
        >
          <div className="grid place-items-center ">
            <h1 className="text-green-900 text-4xl sm:text-6xl py-6 font-black ">
              DADA GEBEYA
            </h1>
            <h1 className=" text-2xl font-semibold self-center pb-4 text-center md:px-14">
              "A brand is no longer what we tell the consumer it is—it's what
              consumers tell each other it is." —Scott Cooke
            </h1>
          </div>
        </div>
        <div className="absolute sm:z-30 my-8 text-base top-3/4 left-1/2 -translate-x-1/2 ">
          <Link
            to={"/shop"}
            className={`${
              darkMode ? "bg-neutral-800 text-white" : "bg-white"
            } group relative py-3 px-8  rounded`}
          >
            <div className="absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative  group-hover:text-white">GO TO SHOP</span>
          </Link>
        </div>
        {!darkMode ? (
          <img
            className="w-full h-120 md:h-screen object-cover brightness-50 z-20"
            src={heroImage}
            alt=""
          />
        ) : (
          <img
            className="w-full h-120 md:h-screen grayscale contrast-150 object-cover brightness-50 z-20"
            src={heroImage}
            alt=""
          />
        )}
      </div>

      <div className="grid place-content-center mt-20 mb-10">
        <h1 className="text-2xl font-semibold">OUR SERVICE</h1>
        <div className="h-1 my-1 mx-auto bg-green-500 w-16"></div>
      </div>

      <div className=" grid lg:grid-cols-4 sm:grid-cols-2 px-2 sm:px-10">
        {homeCardData.map((eachData,index) => {
          return <HomeCard eachData={eachData} key={index} />;
        })}
      </div>

      <Footer />
    </>
  );
};

export default Home;
