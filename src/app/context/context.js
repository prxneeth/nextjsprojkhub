"use client"

import React, { createContext, useContext, useState } from "react";
import { getLocalCart } from "@/app/components/Gadgets/cart/page";

export const CartContext = createContext();

export const Context = ({ children }) => {
    const [cartItems, setCartItems] = useState(getLocalCart());

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

export default Context;

