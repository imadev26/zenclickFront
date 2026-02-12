'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Plane, Star, ArrowRight, AlertCircle, Calendar } from 'lucide-react';
import Navbar from "@/components/Navbar";
import axios from 'axios';

// Define Flight interface based on what we saw in legacy code (title, price, mainImage, category)
interface Flight {
    _id: string;
    title: string;
    price: number;
    mainImage: string;
    category: string;
    rating?: number;
    duration?: string;
}

export default function BookingPage() {
    const [flights, setFlights] = useState<Flight[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                setLoading(true);
                // Using the API endpoint. In dev, we need to point to the backend server.
                // We configured REACT_APP_API_URL in legacy, here we might need a similar config or hardcode for now.
                // Assuming backend is at http://localhost:5000 based on previous steps
                const response = await axios.get('http://localhost:5000/api/flights');
                setFlights(response.data);
            } catch (err) {
                console.error('Error fetching flights:', err);
                setError("Impossible de charger les vols. Veuillez vérifier que le serveur backend est lancé.");
            } finally {
                setLoading(false);
            }
        };

        fetchFlights();
    }, []);

    return (
        <main className="min-h-screen bg-gray-50 font-sans">
            <Navbar />

            {/* Header */}
            <div className="bg-sky-900 pt-32 pb-16 px-4 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Réservez votre Aventure</h1>
                <p className="text-xl text-sky-200 max-w-2xl mx-auto">
                    Choisissez parmi nos offres exclusives et préparez-vous à décoller.
                </p>
            </div>

            <div className="container mx-auto px-4 py-12">
                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded shadow-sm max-w-4xl mx-auto">
                        <div className="flex items-center">
                            <AlertCircle className="text-red-500 mr-2" />
                            <p className="text-red-700">{error}</p>
                        </div>
                    </div>
                )}

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {flights.map((flight, index) => (
                            <FlightCard key={flight._id} flight={flight} index={index} />
                        ))}
                    </div>
                )}

                {!loading && flights.length === 0 && !error && (
                    <div className="text-center py-20 text-gray-500">
                        Aucun vol disponible pour le moment.
                    </div>
                )}
            </div>
        </main>
    );
}

function FlightCard({ flight, index }: { flight: Flight; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col"
        >
            <div className="relative h-64 overflow-hidden">
                {/* Fallback image if mainImage is missing or relative */}
                <Image
                    src={flight.mainImage.startsWith('http') ? flight.mainImage : `/images/${flight.mainImage}`}
                    alt={flight.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                        // Fallback strategy would go here, simpler in Next image component with a robust loader or distinct handling
                    }}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-sky-900 shadow-sm uppercase tracking-wide">
                    {flight.category || 'Classique'}
                </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-sky-900 line-clamp-2">{flight.title}</h3>
                    <div className="flex items-center text-orange-500 font-bold bg-orange-50 px-2 py-1 rounded">
                        <Star size={16} className="mr-1 fill-current" />
                        {flight.rating || 4.9}
                    </div>
                </div>

                <p className="text-gray-500 text-sm mb-6 flex-1 line-clamp-3">
                    Profitez d'une expérience inoubliable avec ce vol {flight.category}.
                    Service premium et sécurité garantie.
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                    <div className="text-2xl font-bold text-orange-600">
                        {flight.price} <span className="text-sm font-normal text-gray-500">MAD</span>
                    </div>
                    <Link
                        href={`/booking/${flight._id}`}
                        className="flex items-center gap-2 bg-sky-900 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl transition-colors font-medium"
                    >
                        Réserver <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
