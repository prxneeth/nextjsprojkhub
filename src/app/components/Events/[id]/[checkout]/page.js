
'use client'

import { useState, useEffect } from 'react';
import { useParams } from "next/navigation";


const events = [
    { id: "1", title: "Bollywood Music Night", price: 1500 },
    { id: "2", title: "Art Exhibition by Emerging Artists", price: 500 },

];

export default function Checkout() {
    // const router = useRouter();
    // const { id } = router.query;
    const [event, setEvent] = useState(null);
    const { id } = useParams();
    const [numTickets, setNumTickets] = useState(1);

    useEffect(() => {
        if (id) {
            const foundEvent = events.find(event => event.id === id);
            setEvent(foundEvent);
        }
    }, [id]);

    if (!event) {
        return <p>Loading...</p>;
    }

    const totalCost = event.price * numTickets;

    return (
        <div className="p-8 flex  justify-center">
            <div className='bg-slate-50 rounded-lg border border-gray-700 items-left w-fit p-10 '> <h1 className="text-2xl font-bold text-center mb-4">Checkout</h1>
                <p className='mb-4'><strong>Event:</strong> {event.title}</p>
                <p ><strong>Price per Ticket:</strong> ₹{event.price}</p>
                <label className="block mt-4">
                    <span>Number of Tickets:</span>
                    <input
                        type="number"
                        value={numTickets}
                        onChange={(e) => setNumTickets(e.target.value)}
                        min="1"
                        className="border rounded p-2 mt-2 w-24 m-3 h-8"
                    />
                </label>
                <p className="mt-4"><strong>Total Cost:</strong> ₹{totalCost}</p>
                <button className="mt-6 px-4 py-2 bg-blue-600 w-full text-white rounded">Proceed to Payment</button></div>

        </div>
    );
}
