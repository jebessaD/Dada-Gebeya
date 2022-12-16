
import React, { useEffect } from 'react';
import Loading from "./components/LoadingSpinner";
import Main from './Router/router';
import Error from './components/Error';
import { useGlobalContext } from "./hooks/context";

function App() {
  const {state,loading,error, products,fetchProducts,setAmount,setTotal,colors} = useGlobalContext();

  useEffect(()=>{
    setAmount();
    setTotal();
    console.log("back");
  },[products])

  useEffect(()=>{
    fetchProducts();
  },[])


  useEffect(()=>{
    window.localStorage.setItem("ALL_CURRENT_DATA", JSON.stringify({...state}))
  },[state])


  return(
    <div className={`${colors.color1}  min-h-screen scroll-smooth font-sans`}>
      {loading?<Loading />:error? <Error/>:<Main/>}
    </div>
  )
}

export default App;
