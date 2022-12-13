import { MdAddShoppingCart,MdDeleteSweep,MdOutlineDeleteOutline } from "react-icons/md";
// import {MdDeleteSweep} from "react-icons/"
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import Rating from "./Rating";
const Product = ({ product }) => {
  const { removeProduct, addToCart, RemoveFromCart } = useGlobalContext();

  return (
    <div className="mx-3 bg-white my-2 rounded flex justify-between shadow-sm hover:shadow-lg flex-col p-4 py-2">
      <div>
        <div className="flex justify-between space-x-2 text-2xl mb-3">
          {product.amount ? (
            <div className="flex space-x-4 items-center">
              <h4 className="text-gray-400 text-sm ">Added to the cart</h4> 
              <MdDeleteSweep className=" text-lg text-red-500" onClick={()=>removeProduct(product.id)} />
            </div>
          ) : (
            <h1></h1>
          )}
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
        <h2 className="font-bold">{product.title}</h2>
        <p className="text-gray-500 text-sm">{product.description}</p>
      </div>

      <div className="">
        <div className="py-3 flex justify-between items-center">
          <Rating rating={product.rating} />
          <p className="text-gray-500 text-xs"> Stoke | {product.stock}</p>
        </div>
        <div className="flex justify-between border-t pt-3 items-center">
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

export default Product;
