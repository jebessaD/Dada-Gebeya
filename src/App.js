
import React, { useEffect } from 'react';
import Loading from "./LoadingSpinner";
import Main from './Main';
import Error from './Error';
import { useGlobalContext } from "./context";

function App() {
  const {loading,error, products,fetchProducts,setAmount,setTotal } = useGlobalContext();

  useEffect(()=>{
    setAmount();
  },[products])

  useEffect(()=>{
    setTotal();
  },[products])

  useEffect(()=>{
    fetchProducts();
  },[])

  return(
    <div className='bg-neutral-50  min-h-screen scroll-smooth font-sans'>
      {loading?<Loading />:error? <Error/>:<Main/>}
    </div>
  )
}

export default App;
