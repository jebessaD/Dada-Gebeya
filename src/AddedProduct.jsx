import { IoIosAdd } from 'react-icons/io';
import { HiOutlineMinusSm } from 'react-icons/hi';
import {MdClear} from 'react-icons/md';
import {useGlobalContext} from "./context"
const AddedProducts = ({product}) => {
  // console.log(product,"in product page");
  const {removeProduct,addToCart,removeFromCart,increaseAmount}=useGlobalContext()

  return ( 
  <div>
 {product.amount?
    <div className='flex border-b text-start text-gray-700 items-center py-3 md:py-6 my-4 justify-between md:mx-36'>
        <div className='basis-1/12'>
            <img src={product.thumbnail} className="w-14 h-10 object-cover" alt={product.title}/>
        </div>
        <h1 className='basis-3/12 font-semibold'>
            {product.title.toUpperCase()}
        </h1>
       
        <h2 className='basis-1/12 text-center'>
            { product.category.charAt(0).toUpperCase() + product.category.slice(1).toLowerCase()}
        </h2>
        <h2 className='basis-2/12 text-center'>
            { product.brand.charAt(0).toUpperCase() + product.brand.slice(1).toLowerCase()}
        </h2>
        <div className='baisi-1/12'>$ {product.price}</div>
        <div className='basis-3/12 justify-center flex items-center'>
            <div onClick={()=>removeFromCart(product.id)} className='p-2 border hover:bg-gray-100'><HiOutlineMinusSm/></div>
            <div className='p-2 mx-2'>{product.amount}</div>
            <div onClick={()=>increaseAmount(product.id)} className='p-2 border hover:bg-gray-100'><IoIosAdd/></div>
        </div>
        <div className='basis-1/12'>
            <MdClear onClick={()=>removeProduct(product.id)} className="hover:text-red-500"/>
        </div>
</div> :<></>
}   
  </div>);
}
 
export default AddedProducts;