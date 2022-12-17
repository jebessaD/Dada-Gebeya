import AddedProduct from "../components/AddedProduct";
import  { useState } from 'react';

import { useGlobalContext } from "../hooks/context";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";




const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const { products,amount,total,darkMode } = useGlobalContext();
  return (
    <div className="relative" >
      <div>
          <div >
            <h1 className="text-3xl font-semibold mt-5 text-center py-2">CART</h1>
            <div className="h-0.5 mx-auto bg-green-500 w-8 "></div>

          </div>
          <Link to={"/shop"} className="group hidden sm:inline relative py-2 px-6 bg-white rounded">
                <div className="absolute inset-0 group-hover:w-3 bg-green-500 transition-all duration-[300ms] ease-out w-full"></div>
                <span className="relative text-white group-hover:text-black">Back to shop</span>
          </Link>

          <Link to={"/shop"} className="flex sm:hidden">
              <div className="bg-green-500 px-3 py-1 mx-auto my-3">Back to shop</div>
                
          </Link>

      { amount?
      <div className={`${darkMode?"bg-neutral-900 border-neutral-700":"bg-neutral-50"}  ml-3  flex border-b  md:sticky md:top-0 text-start py-3 md:py-6 my-4 justify-between md:mx-36`}>
        <div className=' hidden md:block basis-1/12 font-semibold'>
            Image
        </div>
        <h1 className='basis-3/12 font-semibold'>
            Title
        </h1>
        <h2 className=' hidden md:block basis-1/12 text-center font-semibold'>
            Category
        </h2>
        <h2 className=' hidden md:block basis-2/12 text-center font-semibold'>
            Brand
        </h2>
        <h2 className='baisi-1/12 font-semibold'>Price</h2>
        <h2 className='basis-3/12 text-center font-semibold'>Quantity</h2>
        <div className="basis-1/12"></div>
      </div> :<></>}

        {products.map((product) => {
          return <AddedProduct key={product.id} product={product} />;
        })}
      </div>

      <div className={`${darkMode?"border-neutral-700":""} flex border-b text-start py-3  mx-3  md:py-6 my-4 justify-between md:mx-44`}>      
        <div>
          <h1 className="font-semibold text-lg">Total : </h1>
          <h1>
            
            {amount === 0
              ? "No product in the cart!"
              : amount === 1
              ? `${amount} Product`
              : `${amount} Products`}
          </h1>
        </div>
        <div>
          {amount?
          <div className="flex space-x-2 md:space-x-16 ">
            <h2 className="text-lg md:mr-2"> $ {total.toFixed(2)}</h2>

            <button
              className="px-3 rounded text-white bg-green-500"
              type="button"
              onClick={() => setShowModal(true)}>
              Pay Now
            </button>
            {
              showModal?<Modal setShowModal={setShowModal}/>:<></>
            }
             
          </div>:
          <></>}
        </div>
      </div>
    </div>
  );
};

export default Cart;
