"use client";
import React, { useContext, useEffect, useState } from 'react';
import Link from "next/link";

import { CartContext } from '@/app/context/context';

const products = [
    {
        id: 1,
        name: "Interactive Board",
        price: 499.99,
        image: "/images/interactiveboard.png",
        description:
            "Our interactive boards revolutionize teaching and collaboration with touch-screen technology and vivid displays. Perfect for classrooms and meeting rooms, they make presentations and lessons more engaging and interactive.",
    },
    {
        id: 2,
        name: "Premium Laptop",
        price: 1299.99,
        image: "/images/laptop.png",
        description:
            "Explore our selection of top-tier laptops, designed to cater to a variety of needs, from professional workstations to portable gaming rigs. Our range offers the perfect balance of performance, design, and reliability, ensuring you find the ideal device for your lifestyle.",
    },
    {
        id: 3,
        name: "Tablet",
        price: 299.99,
        image: "/images/tablet.png",
        description:
            "Our tablets are designed with cutting-edge features to meet your needs. Whether you’re into entertainment, productivity, education, or creativity, our tablets have you covered.",
    },
    {
        id: 4,
        name: "Android Box",
        price: 99.99,
        image: "/images/androidbox.png",
        description:
            "Welcome to the future of entertainment! Dive into endless possibilities with our powerhouse Android boxes. Transform your TV into a smart hub and unleash a world of streaming magic at your fingertips.",
    },
    {
        id: 5,
        name: "360 Cam",
        price: 199.99,
        image: "/images/360cam.png",
        description:
            "Introducing our revolutionary 360 Cam – a game-changer for businesses looking to elevate their marketing and storytelling with immersive 360-degree detail.",
    },
];

export default function Page() {
    const { cartItems, setCartItems } = useContext(CartContext);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const itemExists = prevItems.some((item) => item.id === product.id);
            if (itemExists) return prevItems;
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    // const addToCart = (product) => {
    //   setCartItems([...cartItems, product])
    // }

    return (
        <div className="container mx-auto p-8">

            <div className='flex justify-end p-2'><Link href={`/components/Gadgets/cart`}>
                <button className='border w-28 h-10 bg-white border-black items-end hover:bg-gray-700 hover:text-white'>
                    cart <i class="fa-solid fa-cart-shopping"></i>({cartItems.length})
                </button>
            </Link></div>

            <div className="flex flex-col items-center justify-center p-20 bg-gray-100 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Innovative Technology for Modern Learning and Workspaces
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                    At k-hub, we specialize in providing cutting-edge interactive boards, laptops, and tablets.
                </p>
            </div>

            <div className="py-16 text-center bg-gray-100">
                {products.map((product) => {
                    const inCart = cartItems.some((item) => item.id === product.id);
                    return (
                        <div key={product.id} className="container mx-auto flex flex-col lg:flex-row items-center justify-center mb-12">
                            <div className="w-96 flex justify-center mb-8 lg:mb-0">
                                <img src={product.image} alt={product.name} className="max-w-full h-auto" />
                            </div>
                            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white p-8 shadow-md rounded-md">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h2>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                <p className="text-gray-800 font-bold mb-4">Price: ${product.price}</p>
                                {inCart ? (
                                    <Link href={`/components/Gadgets/cart`}>
                                        <button className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
                                            Go To Cart
                                        </button>
                                    </Link>
                                ) : (
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="inline-block bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600"
                                    >
                                        Buy Now
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
