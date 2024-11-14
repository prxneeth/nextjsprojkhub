"use client";

import { CartContext } from "@/app/context/context";
import { useContext, useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export function getLocalCart() {
    const cartitems = localStorage.getItem("cartItems");
    return cartitems ? JSON.parse(cartitems) : [];
}

export default function Cart() {
    const { cartItems, setCartItems } = useContext(CartContext);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        const newTotal = cartItems.reduce((acc, curr) => acc + (Number(curr.price) * (curr.quantity || 1)), 0);
        setTotal(newTotal);
    }, [cartItems]);

    const updateQuantity = (id, amount) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: Math.max(1, (item.quantity || 1) + amount)
                    }
                    : item
            )
        );
    };




    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);


    function handleRemoveItem(id) {
        const filteredCart = cartItems.filter(item => item.id !== id);
        setCartItems(filteredCart);
    }

    return (
        <div className="">
            <div className="container mx-auto my-12 p-8 bg-white shadow-md rounded-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <p className="text-gray-600">Your cart is empty.</p>
                ) : (
                    <div>
                        {cartItems.map((item, i) => (
                            <div key={i} className="flex items-center justify-between mb-4 bg-gray-50 p-7">
                                <div className="flex items-center">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                                    <div>
                                        <h3 className="text-lg font-bold p-2">{item.name}</h3>
                                        <p className="text-gray-600 p-2">Price: ${item.price}</p>
                                        <div className="text-gray-600 p-1 flex">
                                            <p className="p-1">Quantity:</p>
                                            <button className="text-xl text-gray-500 font-extralight ml-1" onClick={() => updateQuantity(item.id, -1)}><i className="fa-solid fa-circle-minus"></i></button>
                                            <p className="border border-gray-500 text-xl text-center w-14 h-7 m-1">{item.quantity}</p>
                                            <button className="text-xl text-gray-500" onClick={() => updateQuantity(item.id, 1)}><i className="fa-solid fa-circle-plus"></i></button>
                                        </div>
                                        <button onClick={() => handleRemoveItem(item.id)} className="text-black p-2 border border-gray-500 w-full  hover:bg-gray-700 hover:text-white">Remove Item <i className="fa-solid fa-trash-can"></i></button>
                                    </div>
                                </div>
                                <p className="text-xl font-bold text-gray-800">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>
                        ))}

                        <div className="mt-8 text-right">
                            <h3 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h3>

                            <button className="mt-4 bg-red-500 text-white font-bold py-2 px-6 rounded hover:bg-red-600">
                                Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
