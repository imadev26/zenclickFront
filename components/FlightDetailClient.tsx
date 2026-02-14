'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import { TESTIMONIALS } from '@/app/data/testimonials';
import { Star, Shield, CheckCircle, Award, ChevronRight } from 'lucide-react';
import BookingCalendar from '@/components/BookingCalendar';
import ReviewCard from '@/components/ReviewCard';
import SuggestionCard from '@/components/SuggestionCard';
import BookingModal from '@/components/BookingModal';
import { Flight } from '@/app/data/flights';

interface FlightDetailClientProps {
    flight: Flight;
    suggestions: Flight[];
}

export default function FlightDetailClient({ flight, suggestions }: FlightDetailClientProps) {
    const [mainImage, setMainImage] = useState(flight?.images[0] || '');
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    if (!flight) {
        notFound();
    }

    // JSON-LD Structured Data
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: flight.title,
        image: flight.images,
        description: flight.description,
        offers: {
            '@type': 'Offer',
            priceCurrency: flight.currency.toUpperCase(),
            price: flight.price,
            availability: 'https://schema.org/InStock',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: flight.rating || 4.9,
            reviewCount: flight.reviewCount || 500,
        },
    };

    return (
        <main className="min-h-screen bg-[#E6D5C3] font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />

            <div className="pt-24 pb-20 container mx-auto px-4 md:px-8 max-w-7xl">

                {/* Breadcrumbs */}
                <nav className="mb-6 flex items-center gap-2 text-sm text-gray-600 overflow-x-auto scrollbar-hide" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-[#C04000] transition-colors whitespace-nowrap">
                        Home
                    </Link>
                    <ChevronRight size={16} className="text-gray-400 flex-shrink-0" />
                    <Link href="/flights" className="hover:text-[#C04000] transition-colors whitespace-nowrap">
                        Flights
                    </Link>
                    <ChevronRight size={16} className="text-gray-400 flex-shrink-0" />
                    <span className="text-[#C04000] font-medium truncate max-w-[150px] sm:max-w-none">{flight.destination}</span>
                </nav>

                {/* Header Title */}
                <div className="mb-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] tracking-tight mb-4">
                        {flight.tourType.includes('Private') ? 'PRIVATE' : flight.tourType.includes('Royal') ? 'ROYAL' : 'CLASSIC'}{' '}
                        <span className="font-normal italic font-serif">Flight in {flight.destination}</span>
                    </h1>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap gap-4 items-center text-sm">
                        <div className="flex items-center gap-2 text-green-700">
                            <Shield className="w-5 h-5" />
                            <span className="font-medium">Licensed Operator</span>
                        </div>
                        <div className="flex items-center gap-2 text-yellow-600">
                            <Star className="w-5 h-5 fill-current" />
                            <span className="font-medium">
                                {flight.rating ? `${flight.rating}/5` : '4.9/5'}
                                {flight.reviewCount ? ` (${flight.reviewCount}+ Reviews)` : ' (500+ Reviews)'}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-blue-600">
                            <CheckCircle className="w-5 h-5" />
                            <span className="font-medium">Free Cancellation</span>
                        </div>
                        <div className="flex items-center gap-2 text-purple-600">
                            <Award className="w-5 h-5" />
                            <span className="font-medium">Best Price Guarantee</span>
                        </div>
                    </div>

                    {/* Tags & Difficulty */}
                    {(flight.tags || flight.difficulty) && (
                        <div className="flex flex-wrap gap-2 items-center mt-4">
                            {flight.difficulty && (
                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${flight.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                                    flight.difficulty === 'moderate' ? 'bg-yellow-100 text-yellow-700' :
                                        'bg-red-100 text-red-700'
                                    }`}>
                                    {flight.difficulty}
                                </span>
                            )}
                            {flight.tags?.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 rounded-full text-xs font-medium bg-[#C04000]/10 text-[#C04000] border border-[#C04000]/20"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Main Content Grid - Updated Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">

                    {/* Left Side: Images + Details Below */}
                    <div className="lg:col-span-7 space-y-6">
                        {/* Images Section */}
                        <div className="flex gap-4 h-[400px] md:h-[500px]">
                            {/* Thumbnails Column - Wider on mobile for better touch targets */}
                            <div className="flex flex-col gap-3 w-1/3 md:w-1/4 h-full shrink-0">
                                {flight.images.slice(0, 3).map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setMainImage(img)}
                                        className={`relative flex-1 rounded-2xl overflow-hidden transition-all border-4 ${mainImage === img
                                            ? 'border-[#C04000] shadow-lg'
                                            : 'border-transparent opacity-70 hover:opacity-100 hover:border-[#C04000]/30'
                                            }`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`View ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 128px, 200px"
                                        />
                                    </button>
                                ))}
                            </div>

                            {/* Main Image */}
                            <div className="relative flex-1 rounded-[2rem] overflow-hidden shadow-2xl">
                                <Image
                                    src={mainImage}
                                    alt={flight.title}
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 55vw"
                                />

                                {/* Price Overlay */}
                                <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg md:text-xl font-bold text-white">Price :</span>
                                        <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#FF6B35]">
                                            {flight.currency === 'mad' ? 'MAD' : flight.currency === 'eur' ? '€' : '$'}
                                            {flight.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Highlights Below Images */}
                        <div className="space-y-6">
                            {/* Highlights */}
                            <ul className="space-y-2 text-sm md:text-base text-gray-800">
                                {flight.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="text-black/60 mt-1">•</span>
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Side: Calendar Only */}
                    <div className="lg:col-span-5">
                        <BookingCalendar onCheckAvailability={() => setIsBookingModalOpen(true)} />
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-black mb-8 px-2">Reviews</h2>
                    <div className="flex flex-wrap md:flex-nowrap gap-6 justify-start overflow-x-auto pb-4 px-2 snap-x">
                        {TESTIMONIALS.map((testimonial, idx) => (
                            <ReviewCard
                                key={idx}
                                name={testimonial.name}
                                date={testimonial.date}
                                rating={testimonial.rating}
                                text={testimonial.text}
                                avatar={testimonial.avatar || undefined}
                                initial={testimonial.avatar ? undefined : testimonial.name.charAt(0)}
                                bgColor={testimonial.bgColor}
                            />
                        ))}
                    </div>
                </div>

                {/* Overview Section */}
                <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-black mb-6">Overview</h2>
                            <div className="flex gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} className="fill-yellow-400 text-yellow-400" />)}
                            </div>

                            <h3 className="text-lg font-medium text-gray-900 mb-4">
                                The {flight.tourType} Experience
                            </h3>
                            <p className="text-gray-800 leading-relaxed text-sm md:text-base">
                                {flight.description}
                                <br /><br />
                                We invite you to elevate your senses with an exclusive hot-air balloon flight—crafted for those who value privacy, comfort, and a hint of romance. Whether you're celebrating a special moment or simply escaping the everyday, this journey offers a rare opportunity to drift peacefully above the captivating landscapes of {flight.destination}.
                                <br /><br />
                                Enjoy the intimacy of the moment as you float silently over Berber villages, rolling desert dunes, and the majestic Atlas Mountains. Every detail of your experience is designed to ensure complete comfort and unforgettable memories.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-black mb-6">What's Included</h2>
                            <ul className="space-y-3">
                                {flight.included.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-800 text-sm md:text-base">
                                        <span className="text-black mt-1.5 w-1 h-1 bg-black rounded-full block shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Flight Suggestions */}
                <div>
                    <h2 className="text-3xl font-bold text-black mb-10 text-center uppercase tracking-wider">
                        FLIGHT suggestion
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {suggestions.map((suggestion) => (
                            <SuggestionCard
                                key={suggestion.id}
                                title={suggestion.title}
                                subtitle="Hot-Air Balloon Flight"
                                image={suggestion.image}
                                rating="4.9/5"
                                price={`$${suggestion.price}`}
                                badgeType={suggestion.id === 'top-vip' ? 'most-reserved' : suggestion.id === 'vip' ? 'vip' : undefined}
                                link={`/flights/${suggestion.id}`}
                            />
                        ))}
                    </div>
                </div>

            </div>

            {/* Booking Modal */}
            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                flightTitle={flight.title}
                pricePerPerson={flight.price}
            />

            {/* Sticky Mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t border-gray-200 p-4 z-40 shadow-2xl">
                <div className="flex items-center justify-between gap-3">
                    <div>
                        <p className="text-sm text-gray-600">From</p>
                        <p className="text-2xl font-bold text-[#C04000]">
                            {flight.currency === 'mad' ? 'MAD' : flight.currency === 'eur' ? '€' : '$'}{flight.price}
                        </p>
                    </div>
                    <button
                        onClick={() => setIsBookingModalOpen(true)}
                        className="flex-1 bg-gradient-to-r from-[#C04000] to-[#D84A1B] text-white py-3 px-6 rounded-xl font-bold text-base hover:shadow-lg transition-all active:scale-95"
                    >
                        Book Now
                    </button>
                </div>
            </div>

            <Footer />
        </main>
    );
}
