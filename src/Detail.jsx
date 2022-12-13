import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "./Rating";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Pagination, Navigation } from "swiper";
const Detail = () => {
  const { products ,addToCart,removeProduct} = useGlobalContext();
  const { id } = useParams();

  const newProduct = products.find((product) => product.id === Number(id));
  if (!newProduct) {
    return <div className="text-3xl bg-gray-50 flex justify-center">
              <h1 className="p-10 bg-white ">No product available !</h1>
          </div>;
  }

  return (
    <>
        <div className="relative">
            <div className="absolute px-24 w-full bg-white opacity-30 grid place-items-center  text-black top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <div className="grid place-items-center ">
                    <h1 className="text-5xl py-6 font-black ">{newProduct.title.toUpperCase()}</h1>
                    <h2 className="text-lg">{newProduct.brand.toUpperCase()}</h2>
                    <div className="h-0.5 my-1 bg-black w-10 mb-3"></div>
                    
                    <h1 className=" text-xl font-semibold pb-4">{newProduct.description}</h1>
                    {/* <h6 className="font-black mx-auto">"A brand is no longer what we tell the consumer it is—it's what consumers tell each other it is." — Scott Cook</h6> */}
                </div>
            </div>
            <div className="absolute z-30 my-8 text-base top-3/4 left-1/2 -translate-x-1/2 ">
                {/* <Link className=" bg-green-600 text-white rounded  font-bold mt-10  hover:scale-125 " to={"/shop"}>GO TO SHOP</Link> */}
            </div>
            <img className="w-full object-cover blur-sm h-100 brightness-50 z-20" src={newProduct.thumbnail} alt="" />
        </div>
        
        
          <div className="relative my-10">
          <Link to={"/shop"} class="group relative py-3 px-8  bg-white rounded">
                <div class="absolute inset-0 group-hover:w-3 bg-green-500 transition-all duration-[300ms] ease-out w-full"></div>
                <span class="relative text-white group-hover:text-black">Back to shop</span>
            </Link>
          </div>

          <div className="grid place-content-center mt-16 mb-10">
            <h1 className="text-2xl font-semibold">{newProduct.category.toUpperCase()}</h1>
            <div className="h-1 my-1 mx-auto bg-green-500 w-16"></div>
        </div>


        <Swiper pagination={{type: "fraction",}} navigation={true} modules={[Pagination, Navigation]}>
                {newProduct.images.map((image) => {
                  return (
                    <SwiperSlide>
                      <img className="m-auto " src={image} alt="" />
                    </SwiperSlide>);
                })}
        </Swiper>

          
        <div className="flex my-10">
          {newProduct.amount>=1?<button className="px-8 bg-gray-500  text-white py-3 mx-auto rounded " onClick={()=>removeProduct(newProduct.id)}> REMOVE FROM THE CART</button>:
          <button className="px-8 bg-green-500  text-white py-3 mx-auto rounded " onClick={() => addToCart(newProduct.id)}> ADD TO THE CART</button>}
        </div>
        <div className="h-px bg-gray-300 w-11/12 my-5 mx-auto"></div>
        <div className="flex justify-center items-center"> 
            <span className="font-bold text-gray-700 px-3">Rating | </span> <Rating rating={newProduct.rating} />
            <span className="font-bold text-gray-700 px-3">Price |</span> <p className="text-sm text-gray-600">${newProduct.price}</p>
        </div>

        <div className="h-px bg-gray-300 w-11/12 my-5 mx-auto"></div>

        <div className="my-10 py-5 ">
            
        </div>

  
    </>
  );
};

export default Detail;
