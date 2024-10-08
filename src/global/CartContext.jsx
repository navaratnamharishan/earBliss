import React, { useReducer } from "react";
import { createContext } from "react";

export const CartContext =createContext();

export const CartContextProvider =(props)=>{
const[cart,dispatch]=useReducer(cartReducer,{shippingCart:[],totalPrice:0,totalQty:0})
    return(
        <CartContext.Provider value={fe}>
            {props.children}
        </CartContext.Provider>
    )
}