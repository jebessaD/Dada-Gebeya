import AddedProduct from "./AddedProduct";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
import Modal from "./Modal";



const Cart = () => {
  const { products,amount,total } = useGlobalContext();
  return (
    <div className="relative" >
      <div>
          <div >
            <h1 className="text-3xl font-semibold mt-5 text-center py-2">CART</h1>
            <div className="h-0.5 mx-auto bg-green-500 w-8 "></div>

          </div>
          <Link to={"/shop"} class="group relative py-2 px-6 bg-white rounded">
                <div class="absolute inset-0 group-hover:w-3 bg-green-500 transition-all duration-[300ms] ease-out w-full"></div>
                <span class="relative text-white group-hover:text-black">Back to shop</span>
            </Link>
            {/* <Modal/> */}
      { amount?
      <div className='flex border-b  md:sticky md:top-0 bg-gray-50 text-start py-3 md:py-6 my-4 justify-between md:mx-36'>
        <div className='basis-1/12 font-semibold'>
            Image
        </div>
        <h1 className='basis-3/12 font-semibold'>
            Title
        </h1>
        <h2 className='basis-1/12 text-center font-semibold'>
            Category
        </h2>
        <h2 className='basis-2/12 text-center font-semibold'>
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

      <div className='flex border-b text-start py-3 md:py-6 my-4 justify-between md:mx-44'>      
        <div>
          <h1 className="font-semibold text-lg">Total : </h1>
          <h1>
            
            {amount === 0
              ? "No product in the cart!"
              : amount == 1
              ? `${amount} Product`
              : `${amount} Products`}
          </h1>
        </div>
        <div>
          {amount?
          <div className="flex md:space-x-16 md:mr-2">
            <h2 className="text-lg "> $ {total.toFixed(2)}</h2>
             {/* <button className="px-3 rounded text-white bg-green-500">Pay Now</button> */}
             <Modal/>
          </div>:
          <></>}
        </div>
      </div>
    </div>
  );
};

export default Cart;
