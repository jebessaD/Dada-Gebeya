
import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext()
const data = JSON.parse(localStorage.getItem('ALL_CURRENT_DATA'));
console.log(data,"prev data");
const intialState= data || {
    loading:true,
    error:false,
    products:[],
    amount:0,
    total:0,
    darkMode:false,
}
console.log(data,"after data");

export const AppProvider = ({children}) => {
    const [state,dipatch]=useReducer(reducer,intialState)
    const url="https://dummyjson.com/products"
    const colors = state.darkMode?{color1:"bg-neutral-900 text-white ",color2:"bg-neutral-850 text-gray-300 ",color3:"bg-neutral-850 text-gray-400 "}:{color1:"bg-neutral-50 text-gray-900",color2:"bg-white text-gray-800",color3:"bg-neutral-100 text-gray-700"}

    const clearAll =()=>{
        dipatch({type:"CLEAR_ALL"})
    }
    const removeProduct=(id)=>{
        dipatch({type:"REMOVE_PRODUCT",payload:id})
    }

    const addToCart=(id)=>{
        dipatch({type:"ADD_TO_CART",payload:id})
        
    }

    const removeFromCart=(id)=>{
        dipatch({type:"REMOVE_FROM_CART",payload:id})
        
    }
    const setAmount =()=>{
        dipatch({type:"SET_AMOUNT"})
    }

    const setTotal =()=>{
        dipatch({type:"SET_TOTAL"})
    }
    const increaseAmount =(id)=>{
        dipatch({type:"INCREASE_AMOUNT",payload:id})
    }

    const successData =()=>{
        dipatch({type:"SUCCESS_DATA"})
    }

    const changeDarkMode=()=>{
        dipatch({type:"CHANGE_MODE"})
    }
    const fetchProducts = async()=>{
        const res = await fetch(url);
        // console.log(res,"response");
        if(res.ok===true || res.status ===200){
            const data = await res.json()
            // console.log(data.products,"new ferched data");
            dipatch({type:"FETCH_PRODUCTS",payload:data.products})
            dipatch({type:"CHANGE_LOADING"})
        }else{
            dipatch({type:"ERROR"})
        }   
    }
    return ( 
    < AppContext.Provider  value={{state,...state,colors,changeDarkMode,fetchProducts,increaseAmount, successData,setTotal,clearAll,removeFromCart,removeProduct,addToCart,setAmount}}>
        {children}
    </AppContext.Provider>);
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext}

