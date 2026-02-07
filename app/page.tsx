'use client';

import React from 'react';

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Clock, MapPin, ShieldCheck, Users, Car, Shield, Coffee } from "lucide-react";
import Navbar from "@/components/Navbar";
import { FLIGHTS, Flight } from './data/flights';
import { TESTIMONIALS } from './data/testimonials';

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-gray-50">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.webp"
            alt="Montgolfière Marrakech"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay to ensure text readability matching the mock's warmth */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl"
          >
            <h2 className="text-gray-900 font-bold text-xl md:text-2xl mb-4 lowercase tracking-wide">
              let's soar the skys of marrakech
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-12 leading-tight text-gray-900">
              Soar Above Marrakech in Hot air Balloon
            </h1>

            <Link
              href="/booking"
              className="bg-[#C04000] hover:bg-[#A03000] text-white px-10 py-4 rounded-lg font-bold text-lg uppercase tracking-wider transition-transform hover:scale-105 shadow-xl inline-block"
            >
              BOOK YOUR FLIGHT NOW
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- FLIGHTS SECTION --- */}
      <section id="vols" className="py-20 bg-[#FDFBF7]"> {/* Light beige background for section to match overall tone */}
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#333333]">Our Flights</h2>
          </div>

          <div className="space-y-12">
            {FLIGHTS.map((flight) => (
              <FlightCard key={flight.id} flight={flight} />
            ))}
          </div>
        </div>
      </section>

      {/* --- TRUSTED BY SECTION --- */}
      <section className="py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">Trusted by</h2>
          <p className="text-gray-600 text-lg mb-12">With award winning services we are trusted by many companies</p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="relative w-32 h-12 md:w-40 md:h-16">
              <Image
                src="/images/airbnb.png"
                alt="Airbnb"
                fill
                className="object-contain"
                sizes="160px"
              />
            </div>
            <div className="relative w-32 h-12 md:w-40 md:h-16">
              <Image
                src="/images/Booking.png"
                alt="Booking.com"
                fill
                className="object-contain"
                sizes="160px"
              />
            </div>
            <div className="relative w-32 h-12 md:w-40 md:h-16">
              <Image
                src="/images/Tripadvisor.png"
                alt="Tripadvisor"
                fill
                className="object-contain"
                sizes="160px"
              />
            </div>
            <div className="relative w-32 h-12 md:w-40 md:h-16">
              <Image
                src="/images/getyourguide.png"
                alt="GetYourGuide"
                fill
                className="object-contain"
                sizes="160px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- PANORAMIC SECTION --- */}
      <PanoramicSection />

      {/* --- TESTIMONIALS SECTION --- */}
      <TestimonialsSection />

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/aboutus.png"
                alt="À propos de nous"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-orange-600 font-bold uppercase mb-2">À Propos</h3>
              <h2 className="text-4xl font-bold text-sky-900 mb-6">Des souvenirs inoubliables dans le ciel de Marrakech</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Depuis plus de 10 ans, Sky Experience partage sa passion pour le vol en montgolfière.
                Notre équipe de professionnels dévoués s'assure que chaque instant, du décollage à l'atterrissage,
                soit magique.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-full text-orange-600"><Users size={20} /></div>
                  <span className="text-gray-700 font-medium">Équipe expérimentée et passionnée</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-full text-orange-600"><Clock size={20} /></div>
                  <span className="text-gray-700 font-medium">Vols au lever du soleil tous les jours</span>
                </li>
              </ul>
              <Link href="/about" className="text-sky-900 font-bold border-b-2 border-orange-500 hover:text-orange-600 transition-colors">
                En savoir plus sur nous
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Panoramic Section Component
function PanoramicSection() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <section
      className="relative w-full h-[600px] cursor-pointer group bg-[#FDFBF7] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {!isHovered ? (
          <motion.div
            key="initial"
            className="absolute inset-0 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <motion.div
              layoutId="panoramic-image-container"
              className="absolute inset-0 w-full h-full"
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-black/20 z-10" />
              <Image
                src="/images/panoramic.png"
                alt="Panoramic View"
                fill
                className="object-cover"
                sizes="90vw"
              />
              <motion.div
                layoutId="panoramic-title"
                className="absolute inset-0 flex items-center justify-center z-20"
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <h2 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-xl text-center px-4">
                  Panoramic Views
                </h2>
              </motion.div>

              {/* Indicator that disappears on hover */}
              <motion.div
                className="absolute bottom-10 right-10 bg-white/20 backdrop-blur-md p-4 rounded-full z-20"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="w-12 h-1 bg-white rounded-full" />
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row p-4 md:p-8 gap-6 z-10">

            {/* 1. Text Content (Left) */}
            <motion.div
              className="w-full md:w-[30%] flex flex-col justify-center pl-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.div layoutId="panoramic-title" className="mb-6 origin-left">
                <h2 className="text-4xl font-extrabold text-black">Panoramic Views</h2>
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Marrakech from Above</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Soar over the Red City and beyond in our safe and comfortable hot-air balloons.
                Each flight is a new masterpiece painted by the sky.
              </p>
            </motion.div>

            {/* 2. Main Image (Center - Shared Layout) */}
            <motion.div
              layoutId="panoramic-image-container"
              className="w-full md:w-[40%] relative rounded-[2.5rem] overflow-hidden shadow-xl order-first md:order-none h-[300px] md:h-auto"
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Image
                src="/images/panoramic.png"
                alt="Panoramic View"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </motion.div>

            {/* 3. Stacked Images (Right) */}
            <div className="w-full md:w-[30%] flex flex-col gap-6 h-full">
              <motion.div
                className="relative flex-1 rounded-[2rem] overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Image src="/images/mariage-main.png" alt="Couple" fill className="object-cover" sizes="(max-width: 768px) 100vw, 30vw" />
              </motion.div>
              <motion.div
                className="relative h-40 md:h-[200px] rounded-[2rem] overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Image src="/images/classic1.png" alt="Balloons" fill className="object-cover" sizes="(max-width: 768px) 100vw, 30vw" />
              </motion.div>
            </div>

            {/* Side Indicator */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-40 w-1.5 bg-gray-200 rounded-l-full hidden md:block" />

          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Testimonials Section Component
function TestimonialsSection() {
  const testimonials = TESTIMONIALS;

  return (
    <section className="py-24 bg-[#E6D5C3]"> {/* Beige background similar to screenshot */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-sm">Client's Testimonials</h2>
          <p className="text-white text-xl md:text-2xl font-light opacity-90">Providing The Best Services For Our Customers</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-[2rem] p-8 shadow-xl relative flex flex-col hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Header: Avatar + Info */}
              <div className="flex items-start gap-4 mb-6">
                <div className="shrink-0">
                  {testimonial.avatar ? (
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                  ) : (
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl font-bold ${testimonial.bgColor || 'bg-gray-800'}`}>
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-black text-lg">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm mb-1">{testimonial.date}</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className={`${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="flex-grow">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {testimonial.text}
                </p>
                {testimonial.viewMore && (
                  <button className="text-gray-500 font-bold text-sm flex items-center gap-1 hover:text-[#A03000] transition-colors">
                    View more <span className="text-xs">▼</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper Components

function FlightCard({ flight }: { flight: Flight }) {
  return (
    <div className="bg-[#EBCBAD] rounded-[3rem] p-6 md:p-10 shadow-lg transform transition-transform hover:scale-[1.01]">
      <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-6 md:mb-8 font-sans">
        {flight.title}
      </h3>

      <div className="flex flex-col lg:flex-row gap-8 md:gap-12">

        {/* --- ZONE IMAGE (LARGEUR RÉDUITE) --- */}
        {/* Changement : lg:w-[45%] -> lg:w-[40%] */}
        <div className="w-full lg:w-[40%] h-64 md:h-[500px] relative rounded-[2.5rem] overflow-hidden shrink-0 shadow-md">
          <Image
            src={flight.image}
            alt={flight.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
          />
        </div>

        {/* --- ZONE CONTENU (LARGEUR AUGMENTÉE) --- */}
        {/* Changement : lg:w-[55%] -> lg:w-[60%] pour compenser */}
        <div className="w-full lg:w-[60%] flex flex-col">

          <div className="flex justify-end mb-8">
            <div className="text-3xl font-bold text-black text-right">
              Price : <span className="text-[#A03000]">${flight.price}</span>
            </div>
          </div>

          <div className="space-y-6 flex-grow">
            {flight.features.map((feature, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="mt-1">
                  {/* Assurez-vous d'importer les icônes */}
                  {feature.icon === 'car' && <Car className="text-black" size={24} />}
                  {feature.icon === 'safety' && <Shield className="text-black" size={24} />}
                  {feature.icon === 'clock' && <Clock className="text-black" size={24} />}
                  {feature.icon === 'coffee' && <Coffee className="text-black" size={24} />}
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg">{feature.title}</h4>
                  <p className="text-gray-800 text-sm leading-relaxed max-w-md">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 flex justify-end mt-auto">
            <Link
              href={`/booking?flight=${flight.id}`}
              className="bg-[#A03000] hover:bg-[#802000] text-white px-10 py-4 rounded-xl font-bold text-xl transition-colors shadow-md"
            >
              Book now
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}


