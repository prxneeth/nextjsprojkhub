"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Main_Content = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      id: 1,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.SfhA0GgpiqPLScaXOoAdrwHaEK&pid=Api&P=0&h=220",
      name: "LIBRERRY",
    },
    {
      id: 2,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.SfhA0GgpiqPLScaXOoAdrwHaEK&pid=Api&P=0&h=220",
      name: "LIBRERRY",
    },
    {
      id: 3,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.SfhA0GgpiqPLScaXOoAdrwHaEK&pid=Api&P=0&h=220",
      name: "LIBRERRY",
    },
    {
      id: 4,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.SfhA0GgpiqPLScaXOoAdrwHaEK&pid=Api&P=0&h=220",
      name: "LIBRERRY",
    },
    {
      id: 5,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.SfhA0GgpiqPLScaXOoAdrwHaEK&pid=Api&P=0&h=220",
      name: "LIBRERRY",
    },
    {
      id: 6,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.SfhA0GgpiqPLScaXOoAdrwHaEK&pid=Api&P=0&h=220",
      name: "LIBRERRY",
    },
    {
      id: 7,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.SfhA0GgpiqPLScaXOoAdrwHaEK&pid=Api&P=0&h=220",
      name: "LIBRERRY",
    },
    {
      id: 8,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.SfhA0GgpiqPLScaXOoAdrwHaEK&pid=Api&P=0&h=220",
      name: "LIBRERRY",
    },
    {
      id: 9,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.SfhA0GgpiqPLScaXOoAdrwHaEK&pid=Api&P=0&h=220",
      name: "LIBRERRY",
    },
    {
      id: 10,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.SfhA0GgpiqPLScaXOoAdrwHaEK&pid=Api&P=0&h=220",
      name: "LIBRERRY",
    },
    {
      id: 11,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.SfhA0GgpiqPLScaXOoAdrwHaEK&pid=Api&P=0&h=220",
      name: "LIBRERRY",
    },
    {
      id: 12,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.SfhA0GgpiqPLScaXOoAdrwHaEK&pid=Api&P=0&h=220",
      name: "LIBRERRY",
    },
  ];

  const slides = [
    "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    "https://flowbite.com/docs/images/carousel/carousel-4.svg",
    "https://flowbite.com/docs/images/carousel/carousel-3.svg",
    "https://flowbite.com/docs/images/carousel/carousel-4.svg",
    "https://flowbite.com/docs/images/carousel/carousel-5.svg",
  ];

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [currentIndex]);

  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <Image
                src={slide}
                fill
                className="object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              aria-current={currentIndex === index}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 9l4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <>
        <div className="p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-center space-y-2"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="text-center text-base font-medium">
                  {service.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </>
    </>
  );
};

export default Main_Content;
