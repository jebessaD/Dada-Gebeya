import React, { useState,useRef } from "react";
import { useGlobalContext } from "../hooks/context";
import { Product } from "../components/CardComponent";

const Shop = () => {
  const { products, amount, total,colors,darkMode } = useGlobalContext();
  const [filterWord, setFilterWord] = useState("ALL");
  const [minPrice,setMinPrice]=useState(0)
  const [maxPrice,setMaxPrice]=useState(5000)
  const [minRate,setMinRate]=useState(0)
  const [maxRate,setMaxRate]=useState(5)
  const [search,setSearch]=useState("");

  const allCategory =["ALL",...new Set(products.map((product)=>product.category.toUpperCase()))]

const handleFilter=({category})=>{
  setSearch("")
  setFilterWord(category)

}

  return (
    <div className=" lg:relative lg:flex">
      <div className=" lg:basis-1/5">
        <div className={`${colors.color2}  mx-0 pl-5 flex lg:flex-col flex-wrap space-x-5 lg:space-x-0 lg:flex-nowrap lg:items-start lg:sticky md:top-0  p-2  lg:min-h-screen `}>
          <div className="lg:mb-3 order-1 md:order-2 lg:order-1 mx-4 lg:mx-0">
              <h1 className=" pt-2 font-bold">Search</h1>
              <div className="h-0.5 my-1 bg-green-500 w-10"></div>
              <form className="flex space-x-1">
                <input
                  className={ `${darkMode?" bg-neutral-850 border-neutral-700 hover:bg-neutral-800 placeholder:text-neutral-600 focus:bg-neutral-900":" hover:bg-slate-50 focus:bg-neutral-100"} border w-full p-2 px-3 rounded-lg my-2 outline-none`}
                  type="text"
                  onChange={(e)=>setSearch(e.target.value)}
                  placeholder="Search here"/>
              </form>
          </div>
          <div className="order-1 lg:order-2">
              <h2 className="  font-semibold">
                Filter by category
              </h2>
              <div className="h-0.5 my-1 bg-green-500 w-10"></div>

                <div className="">
                  {
                    allCategory.map((category,index)=>{
                      return ( 
                      <div key={index}className="mr-4 flex items-center  ">
                        <input onClick={()=>handleFilter({category})} id={category} type="radio" value="" name="bordered-radio" className="w-4 h-4 accent-green-500"/>
                        <label htmlFor={category}className=" py-1 ml-2 w-full text-sm font-medium ">{category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}</label>    
                      </div>)
                    })
                  }
                </div>
          </div>
          <div className="order-3 lg:order-3">

              <h2 className=" pt-5   font-semibold">
                  Filter by price
              </h2>
              <div className="h-0.5 my-1 bg-green-500 w-10 mb-3"></div>
                  <div className="flex space-x-2">
                  <label htmlFor="minimum_price" className="block mb-1 pr-1 text-sm font-medium">Minimum</label>
                    <div className="flex items-center space-x-2">
                        <input id="minimum_price" type="range" min="0" max="5000" value={minPrice} onChange={e => setMinPrice(e.target.value)} step="50" className="w-24  h-1  bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500 range-sm dark:bg-gray-300"/>
                        <p className="text-green-500">{minPrice}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2" >
                    <label htmlFor="maximum_price" className="block mb-1 text-sm font-medium">Maximum</label>
                    <div className="flex items-center space-x-2">
                        <input id="maximum_price" type="range" min="0" max="5000" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} step="50" className="w-24  h-1  bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500 range-sm dark:bg-gray-300"/>
                        <p className="text-green-500">{maxPrice}</p>
                    </div>
                  </div>

          </div>

        <div className="order-4 lg:order-4">

          <h2 className=" pt-5  font-semibold">
              Filter by Rate
          </h2>
        <div className="h-0.5 my-1 bg-green-500 w-10 mb-3"></div>
            <div className="flex space-x-2">
            <label htmlFor="minimum_rate" className="block mb-1 pr-1 text-sm font-medium">Minimum</label>
              <div className="flex items-center space-x-2">
                  <input id="minimum_rate" type="range" min="0" max="5" value={minRate} onChange={e => setMinRate(e.target.value)} step="0.1" className="w-24  h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500  dark:bg-gray-300"/>
                  <p className="text-green-500">{minRate}</p>
              </div>
            </div>
            <div className="flex space-x-2" >
              <label htmlFor="maximum_rate" className="block mb-1 text-sm font-medium">Maximum</label>
              <div className="flex items-center space-x-2">
                  <input id="maximum_rate" type="range" min="0" max="5" value={maxRate} onChange={e => setMaxRate(e.target.value)} step="0.1" className="w-24  h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500 range-sm dark:bg-gray-300"/>
                  <p className="text-green-500">{maxRate}</p>
              </div>
            </div>

        </div>


        </div>
      </div>
      <div className="w-full lg:basis-4/5 ">
        <div className="mx-auto my-6">
          <h1 className="text-2xl flex justify-center font-semibold py-3">
            SHOP HERE
          </h1>
          <div className="h-1 w-16 flex justify-center  mx-auto bg-green-500"></div>
        </div>
        <div className="">
          <div className="sm:p-5 grid sm:grid-cols-2 my-2 md:grid-cols-3 py-10">
           {products.map((product) => {
              if(search){
                return product.title.toLowerCase().includes(search.toLowerCase())?
                <Product key={product.id} product={product} />:<></>
              }

              return filterWord ==="ALL" && product.price>=minPrice && product.price<=maxPrice && product.rating>=minRate && product.rating<=maxRate?
              <Product key={product.id} product={product} />: 
              product.category.toUpperCase()===filterWord && product.price>=minPrice && product.price<=maxPrice?
              <Product key={product.id} product={product} />:
              <></>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
