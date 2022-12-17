import { SiShopify } from 'react-icons/si';
import logo1 from  "../images/logo.png"
import { useGlobalContext } from "../hooks/context"
import { MdAddShoppingCart,MdDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";


const AboutCard = ({eachData}) => {
    const {colors,darkMode}=useGlobalContext()
    return ( 
    <div className={`${colors.color2} col-span-1  rounded-md m-2 mx-3 py-3 md:py-5 md:px-6 flex items-center`}>
        <img className="basis-1/4 w-1 rounded-t-full px-5" src={eachData.image} alt={eachData.title}/>
        <div className={`${darkMode?"text-gray-350":"text-gray-900"} basis-3/4 `}>
        <h1 className="font-bold py-2">{eachData.title}</h1>
        <p>{eachData.description}</p>
        </div>
    </div>
   );
}

const HomeCard = ({eachData}) => {
    console.log(eachData,"in the home");
    const {colors,darkMode}=useGlobalContext()
    return ( 
    <div className={`${colors.color2} sm:m-3 my-3 shadow relative hover:shadow-lg rounded`}>
        <div className={`${darkMode?"bg-gray-700":"bg-white"} absolute -top-3 border shadow -left-3 bg-white rounded-full w-8 h-8 m-1 flex items-center justify-center `}>
            <SiShopify className="text-green-500"/>
        </div>
        <img className="w-16 bg-gray-800 px-1 border-white border-4 rounded-full h-16 object-contain absolute top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 " 
            src={logo1} alt="" />

        <img className="h-40 w-full object-cover rounded-b-md" src={eachData.image} alt="" />
        <div className="my-10 px-2">
        <p className={`${darkMode?"text-gray-350":"text-gray-600"} px-1`}>{eachData.description}</p>

        </div>
    </div> );
}



const Product = ({ product }) => {
    const { removeProduct, addToCart, darkMode } = useGlobalContext();
    return (
      <div className={`${darkMode? " text-gray-400 bg-neutral-850 ":" text-gray-600  bg-white"}  mx-3  my-2 rounded flex justify-between shadow-sm hover:shadow-lg flex-col p-4 py-2`}>
        <div>
          <div className="flex justify-between space-x-2 text-2xl mb-3">
            {product.amount ? (
              <div className="flex space-x-4 items-center">
                <h4 className="text-gray-400 text-sm ">Added to the cart</h4> 
                <MdDeleteSweep className=" text-lg text-red-500" onClick={()=>removeProduct(product.id)} />
              </div>
            ) : <div></div>}
            <MdAddShoppingCart
              className=" flex justify-center text-2xl text-blue-400"
              onClick={() => addToCart(product.id)}
            />
          </div>
          <Link to={"/products/" + product.id}>
            <img
              className="h-40 w-full hover:brightness-50  object-cover"
              src={product.thumbnail}
              alt={product.title}
            />
          </Link>
          <h2 className="font-bold py-1">{product.title}</h2>
          <p className=" text-sm">{product.description}</p>
        </div>
  
        <div className="">
          <div className="py-3 flex justify-between items-center">
            <Rating rating={product.rating} />
            <p className=" text-xs"> Stoke | {product.stock}</p>
          </div>
          <div className={`${darkMode? "border-gray-700" : "border-gray-200"} flex justify-between border-t pt-3 items-center`}>
            <h5 className="text-base text-green-400 font-bold ">
              <span className="text-gray-600 text-sm">Price: </span> 
            ${product.price}</h5>
            <Link to={"/products/" + product.id}>
              <button className="text-blue-500">See Detail</button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
 


 
export {AboutCard,HomeCard,Product} ;