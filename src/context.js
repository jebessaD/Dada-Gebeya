
import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext()
const intialState={
    loading:true,
    error:false,
    products:[],
    amount:0,
    total:0
}



export const AppProvider = ({children}) => {
    const [state,dipatch]=useReducer(reducer,intialState)
    const url="https://dummyjson.com/products"

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

    const fetchProducts = async()=>{
        // dipatch({type:"CHANGE_LOADING"})
        const res = await fetch(url);
        console.log(res,"response");
        if(res.ok===true || res.status ===200){
            const data = await res.json()
            console.log(data.products,"new ferched data");
            dipatch({type:"FETCH_PRODUCTS",payload:data.products})
            dipatch({type:"CHANGE_LOADING"})

        }else{
            dipatch({type:"ERROR"})
        }   
    }
    return ( 
    < AppContext.Provider  value={{...state,fetchProducts,increaseAmount, successData,setTotal,clearAll,removeFromCart,removeProduct,addToCart,setAmount}}>
        {children}
    </AppContext.Provider>);
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext}

