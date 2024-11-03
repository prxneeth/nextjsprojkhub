'use client';

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

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

export default function Events() {
    const [filtered, setFiltered] = useState(events);
    const [loc, setLoc] = useState("");
    const [category, setCategory] = useState("");
    const [priceRange, setPriceRange] = useState("");

    function handleLocationFilter(place) {
        setLoc(place);
        const filteredEvents = events.filter(event => event.place === place);
        setFiltered(filteredEvents);
    }

    function handleCategoryFilter(cat) {
        setCategory(cat);
        const filteredEvents = events.filter(event => event.category === cat);
        setFiltered(filteredEvents);
    }

    function handlePriceFilter(range) {
        setPriceRange(range);
        const [min, max] = range.split("-");
        const filteredEvents = events.filter(event => event.price >= min && event.price <= max);
        setFiltered(filteredEvents);
    }

    function clearFilters() {
        setFiltered(events);
        setLoc("");
        setCategory("");
        setPriceRange("");
    }

    return (
        <>
            <div className="bg-slate-500 flex p-4">
                <div className="w-1/4 bg-slate-400 p-5">
                    <h1 className="text-lg font-bold mb-3">Filters</h1>

                    <div className="bg-blue-500 rounded-lg p-2 mb-4">
                        <h2 className="font-semibold">Filter by Location</h2>
                        {[...new Set(events.map(event => event.place))].map((place, index) => (
                            <button
                                key={index}
                                className={`border border-blue-200 m-1 px-2 ${loc === place ? "bg-blue-700 text-white" : ""}`}
                                onClick={() => handleLocationFilter(place)}
                            >
                                {place}
                            </button>
                        ))}
                    </div>

                    <div className="bg-blue-500 rounded-lg p-2 mb-4">
                        <h2 className="font-semibold">Filter by Category</h2>
                        {[...new Set(events.map(event => event.category))].map((cat, index) => (
                            <button
                                key={index}
                                className={`border border-blue-200 m-1 px-2 ${category === cat ? "bg-blue-700 text-white" : ""}`}
                                onClick={() => handleCategoryFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="bg-blue-500 rounded-lg p-2 mb-4">
                        <h2 className="font-semibold">Filter by Price Range</h2>
                        <select
                            className="w-full border border-blue-200 p-1 mt-2 rounded"
                            value={priceRange}
                            onChange={(e) => handlePriceFilter(e.target.value)}
                        >
                            <option value="">Select a range</option>
                            <option value="0-500">Under 500</option>
                            <option value="500-1000">500 - 1000</option>
                            <option value="1000-2000">1000 - 2000</option>
                            <option value="2000-5000">2000 - 5000</option>
                        </select>
                    </div>

                    <button
                        className="w-full bg-red-500 text-white rounded p-2 mt-4"
                        onClick={clearFilters}
                    >
                        Clear Filters
                    </button>
                </div>

                <div className="w-3/4 bg-slate-300 p-5">
                    <h1 className="text-center p-5 text-xl font-bold">EVENTS</h1>
                    <div className="grid grid-cols-3 gap-4">
                        {filtered.length > 0 ? (
                            filtered.map(event => (
                                <Link key={event.id} href={`/components/Events/${event.id}`}>
                                    <div className="m-1 border border-blue-100 w-64 h-80 p-1 cursor-pointer">
                                        <Image
                                            src={event.image}
                                            alt="Event image"
                                            width={150}
                                            height={150}
                                            className="w-full h-44 rounded-lg"
                                        />
                                        <div className="p-2">
                                            <p className="font-bold">{event.title}</p>
                                            <p className="font-extralight text-sm">
                                                <span className="font-medium text-slate-600">Category:</span> {event.category}
                                            </p>
                                            <p className="font-extralight text-sm">
                                                <span className="font-medium text-slate-600">Venue:</span> {event.venue}
                                            </p>
                                            <p className="mt-1">Rs. {event.price}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className="col-span-3 text-center font-semibold text-red-500">No events found for the selected filters.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
