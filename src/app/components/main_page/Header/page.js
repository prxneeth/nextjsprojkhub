"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Select City");

  const locations = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "London",
    "Paris",
    "Berlin",
    "Madrid",
    "Tokyo",
    "Shanghai",
    "Singapore",
    "Seoul",
  ];

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsLocationDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">
            <Image
              src="/images/vidyardilogo.png"
              alt="My Photo"
              width={140}
              height={50}
              priority
              className="rounded-full"
            />
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center w-full md:w-auto`}
        >
          <ul className="text-white flex flex-col md:flex-row md:space-x-8">
            <li className="block py-2 px-4 hover:bg-gray-700">
              <Link href="/">Home</Link>
            </li>
            <li className="block py-2 px-4 hover:bg-gray-700">
              <Link href="/about">About</Link>
            </li>
            <li className="block py-2 px-4 hover:bg-gray-700">
              <Link href="/services">Services</Link>
            </li>
            <li className="relative block py-2 px-4 hover:bg-gray-700">
              <button
                onClick={() =>
                  setIsLocationDropdownOpen(!isLocationDropdownOpen)
                }
                className="focus:outline-none"
              >
                {selectedCity}
              </button>
              {isLocationDropdownOpen && (
                <ul className="absolute top-full left-0 mt-2 bg-gray-800 text-white rounded-md shadow-lg z-10">
                  {locations.map((city) => (
                    <li
                      key={city}
                      className="py-2 px-4 hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleCitySelect(city)}
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="block py-2 px-4 hover:bg-gray-700">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
