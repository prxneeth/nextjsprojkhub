'use client'

import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useParams } from "next/navigation";

import { useEffect, useState } from "react";
import Link from "next/link";
// import { useRouter } from 'next/router';



export const events = [
    {
        id: "1",
        title: "Bollywood Music Night",
        category: "Music",
        place: "Mumbai",
        venue: "Royal Opera House",
        image: "https://a.storyblok.com/f/188325/1024x683/d96ab40920/matthias-wagner-qrqeusbpfmm-unsplash-1024x683.jpg/m/filters:quality(75)?",
        price: 1500
    },
    {
        id: "2",
        title: "Art Exhibition by Emerging Artists",
        category: "Art",
        place: "Delhi",
        venue: "India Habitat Centre",
        image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 500
    },
    {
        id: "3",
        title: "Gourmet Food Festival",
        category: "Food & Drink",
        place: "Bangalore",
        venue: "Lalbagh Botanical Garden",
        image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 800
    },
    {
        id: "4",
        title: "Tech Innovations Expo",
        category: "Technology",
        place: "Hyderabad",
        venue: "Hyderabad International Convention Centre",
        image: "https://images.pexels.com/photos/860227/pexels-photo-860227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 1200
    },
    {
        id: "5",
        title: "National Sports Meet",
        category: "Sports",
        place: "Chennai",
        venue: "Jawaharlal Nehru Stadium",
        image: "https://images.pexels.com/photos/301987/pexels-photo-301987.jpeg",
        price: 1000
    },
    {
        id: "6",
        title: "Fashion Week Extravaganza",
        category: "Fashion",
        place: "Mumbai",
        venue: "Taj Land’s End",
        image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 1800
    },
    {
        id: "7",
        title: "Shakespearean Theatre Festival",
        category: "Theatre",
        place: "Kolkata",
        venue: "Academy of Fine Arts",
        image: "https://a.storyblok.com/f/188325/1024x683/d96ab40920/matthias-wagner-qrqeusbpfmm-unsplash-1024x683.jpg/m/filters:quality(75)?",
        price: 700
    },
    {
        id: "8",
        title: "Book Reading and Signing",
        category: "Literature",
        place: "Jaipur",
        venue: "Jaipur Literature Festival Grounds",
        image: "https://images.pexels.com/photos/301987/pexels-photo-301987.jpeg",
        price: 300
    },
    {
        id: "9",
        title: "Live Jazz Concert",
        category: "Music",
        place: "Pune",
        venue: "Pune Amphitheatre",
        image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 1300
    },
    {
        id: "10",
        title: "Contemporary Art Showcase",
        category: "Art",
        place: "Delhi",
        venue: "National Gallery of Modern Art",
        image: "https://a.storyblok.com/f/188325/1024x683/d96ab40920/matthias-wagner-qrqeusbpfmm-unsplash-1024x683.jpg/m/filters:quality(75)?",
        price: 600
    },
    {
        id: "11",
        title: "Street Food Carnival",
        category: "Food & Drink",
        place: "Ahmedabad",
        venue: "Riverfront Grounds",
        image: "https://images.pexels.com/photos/860227/pexels-photo-860227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 400
    },
    {
        id: "12",
        title: "AI and Robotics Workshop",
        category: "Technology",
        place: "Bangalore",
        venue: "Bangalore Palace Grounds",
        image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 1500
    },
    {
        id: "13",
        title: "Marathon for a Cause",
        category: "Sports",
        place: "Hyderabad",
        venue: "Necklace Road",
        image: "https://images.pexels.com/photos/301987/pexels-photo-301987.jpeg",
        price: 200
    },
    {
        id: "14",
        title: "Vintage Saree Exhibition",
        category: "Fashion",
        place: "Kolkata",
        venue: "Biswa Bangla Convention Centre",
        image: "https://a.storyblok.com/f/188325/1024x683/d96ab40920/matthias-wagner-qrqeusbpfmm-unsplash-1024x683.jpg/m/filters:quality(75)?",
        price: 600
    },
    {
        id: "15",
        title: "Comedy Play: Stand-Up Live",
        category: "Theatre",
        place: "Mumbai",
        venue: "Prithvi Theatre",
        image: "https://images.pexels.com/photos/860227/pexels-photo-860227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 1000
    },
    {
        id: "16",
        title: "Poetry Slam",
        category: "Literature",
        place: "Jaipur",
        venue: "Jaipur Art Centre",
        image: "https://a.storyblok.com/f/188325/1024x683/d96ab40920/matthias-wagner-qrqeusbpfmm-unsplash-1024x683.jpg/m/filters:quality(75)?",
        price: 400
    },
    {
        id: "17",
        title: "Classical Dance Recital",
        category: "Dance",
        place: "Chennai",
        venue: "Kalakshetra Foundation",
        image: "https://images.pexels.com/photos/860227/pexels-photo-860227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 750
    },
    {
        id: "18",
        title: "Photography Walk",
        category: "Art",
        place: "Goa",
        venue: "Old Goa Church Grounds",
        image: "https://a.storyblok.com/f/188325/1024x683/d96ab40920/matthias-wagner-qrqeusbpfmm-unsplash-1024x683.jpg/m/filters:quality(75)?",
        price: 350
    },
    {
        id: "19",
        title: "Coding Hackathon",
        category: "Technology",
        place: "Pune",
        venue: "MIT Pune Campus",
        image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 100
    },
    {
        id: "20",
        title: "Wine Tasting Event",
        category: "Food & Drink",
        place: "Nashik",
        venue: "Sula Vineyards",
        image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 2000
    }
];


export default function EventDetailPage() {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const { id } = useParams();
    const event = events.find(event => event.id === id);
    ;

    useEffect(() => {
        const res = fetch("https://picsum.photos/v2/list?page=1&limit=5")
            .then((ress) => ress.json())
            .then((data) => setImages(data));
    }, [images]);

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }


    if (!event) {
        return <p>Event not found!</p>;
    }

    return (
        <div className="bg-slate-300 min-h-screen p-6 flex flex-col items-center">
            <div className="relative flex justify-center items-center w-full h-[550px]">
                <p
                    onClick={handlePrevious}
                    className="absolute left-4 w-8 h-8 text-white text-3xl filter drop-shadow-md cursor-pointer"
                >
                    <i class="fa-regular fa-circle-left" />
                </p>

                {images && images.length
                    ? images.map((imageItem, index) => (
                        <img
                            key={imageItem.id}
                            alt={imageItem.download_url}
                            src={imageItem.download_url}
                            className={`rounded-md shadow-lg w-full h-full object-cover transition-opacity duration-500 ${currentSlide === index ? "opacity-100" : "hidden"
                                }`}
                        />
                    ))
                    : null}

                <p
                    onClick={handleNext}
                    className="absolute right-4 w-8 h-8 text-white text-3xl filter drop-shadow-md cursor-pointer"
                >

                    <i class="fa-regular fa-circle-right" />
                </p>

                <div className="absolute bottom-4 flex space-x-1">
                    {images && images.length
                        ? images.map((_, index) => (
                            <button
                                key={index}
                                className={`h-4 w-4 rounded-full outline-none cursor-pointer ${currentSlide === index ? "bg-white" : "bg-gray-500"
                                    }`}
                                onClick={() => setCurrentSlide(index)}
                            ></button>
                        ))
                        : null}
                </div>
            </div>

            <div className="w-5/6 bg-slate-50  p-4">     <div className="flex  ">
                <div className="w-5/6"> <h1 className=" text-2xl font-semibold mb-1 ">{event.title} - {event.place} </h1>
                    <p className=" font-light text-sm ">Pop, Romantic | Hindi, English | 5yrs + | 3hrs</p>
                </div>
                <Link key={event.id} href={`/components/Events/${event.id}/checkout`}>
                    <div>
                        <button className="border border-purple-800 w-32 h-12 hover:bg-gray-800 hover:text-white " >BOOK</button>
                    </div>
                </Link>

            </div>
                <hr className="bg-black mt-2 " />
                <div className="mt-2 flex gap-5 font-light text-sm"><p>Fri 08 Nov 2024 6:00 PM</p>  <p> <i class="fa-solid fa-location-dot" />  {event.venue}</p>   <p>RS. {event.price} onwards</p> </div>

            </div>



            <div className="mt-6 w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 text-lg">
                    <span className="font-semibold">Category:</span> {event.category}
                </p>
                <p className="text-gray-700 text-lg">
                    <span className="font-semibold">Place:</span> {event.place}
                </p>
                <p className="text-gray-700 text-lg">
                    <span className="font-semibold">Venue:</span> {event.venue}
                </p>
                <p className="text-gray-700 text-lg">
                    <span className="font-semibold">Price:</span> Rs. {event.price}
                </p>
                <p className="mt-4 text-gray-600">

                    This is an amazing event featuring {event.category} in {event.place}. Enjoy a memorable experience at {event.venue} with a ticket price of Rs. {event.price}.
                </p>
            </div>
        </div>
    );
}
