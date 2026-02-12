'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import AboutHero from "@/components/AboutHero";
import Footer from "@/components/Footer/Footer";
import { Users, Target, Heart, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-[#F6E6D8]">
        <Navbar />
      <AboutHero />

      <AboutSection/>

      {/* <AboutSection
        title="Safety and Comfort: Our Priorities"
        text="At Sky Experience, safety is our top priority. Our certified pilots ensure smooth and secure flights."
        image="/images/balloon2.jpg"
        reverse={true}
      />

      <AboutSection
        title="A Journey Through Moroccan Landscapes"
        text="Discover deserts, mountains, and villages from the sky for an unforgettable experience."
        image="/images/balloon3.jpg"
        reverse={false}
      /> */}

      <Footer />
    </main>
  );
}
