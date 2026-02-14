'use client';

import React from 'react';
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] font-sans">
      <Navbar />

      {/* Hero Header Section */}
      <PageHeader
        title="Notre Histoire"
        subtitle="Sky Experience"
        backgroundImage="/images/hero.webp"
        waveColor="#FDFBF7"
      />

      {/* SECTION 1 */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">

          {/* IMAGE SIDE */}
          <div className="relative order-2 md:order-1">
            <div className="relative w-full h-[450px] sm:h-[500px] md:h-[580px] lg:h-[680px] xl:h-[720px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/balloon-intro.png"
                alt="Adventure Balloon"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="order-1 md:order-2">
            <p className="text-[#C04000] font-bold mb-3 text-xs sm:text-sm uppercase tracking-wider">
              En savoir plus sur nous
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight">
              SKY EXPERIENCE
              <br /> Hot Air Balloon Marrakech
            </h2>

            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                SKY EXPERIENCE est une agence spécialisée dans les vols en montgolfière à Marrakech, offrant des expériences aériennes uniques au-dessus des paysages emblématiques du Maroc. Reconnue pour son professionnalisme et la qualité de ses prestations, SKY EXPERIENCE s’engage à proposer des vols alliant sécurité, confort et émotion, dans le respect des normes internationales de l’aviation civile.
              </p>

              <p>
                Fondée au Maroc, SKY EXPERIENCE s’appuie sur une équipe expérimentée de pilotes certifiés et de professionnels passionnés, disposant d’une solide expertise dans les opérations de hot air balloon Marrakech. Chaque vol est soigneusement préparé afin de garantir une expérience fluide, sereine et inoubliable, du transfert jusqu’à l’atterrissage.
              </p>

              <p>
                Grâce à une organisation rigoureuse, un matériel moderne et un encadrement qualifié, SKY EXPERIENCE offre à ses passagers toutes les garanties nécessaires pour vivre une aventure aérienne exceptionnelle. Que ce soit pour un vol classique, privé, VIP, une demande en mariage ou un anniversaire, chaque expérience est pensée sur mesure pour créer des souvenirs uniques dans le ciel de Marrakech.
              </p>
            </div>
          </div>
        </div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 items-center mt-12 sm:mt-16 lg:mt-20">

          {/* TEXT */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-3 sm:mb-4">
              Vivez une aventure unique en montgolfière avec Sky Experience !
            </h2>
            <h3 className="text-lg sm:text-xl font-semibold text-[#C04000] mb-4 sm:mb-6">
              Sky Experience Adventures
            </h3>

            <ul className="space-y-3 text-sm sm:text-base text-gray-800 list-disc pl-5">
              <li>Envolez-vous au-dessus de Marrakech et de ses paysages à couper le souffle.</li>
              <li>Profitez de vues inoubliables sur les montagnes de l’Atlas.</li>
              <li>Chaque détail a été soigneusement pensé.</li>
            </ul>
          </div>

          {/* IMAGES */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="row-span-2">
              <Image
                src="/images/about.webp"
                alt="Main balloon"
                width={500}
                height={700}
                className="rounded-xl sm:rounded-2xl md:rounded-3xl object-cover h-[240px] sm:h-[350px] md:h-[450px] lg:h-[510px] w-full"
                style={{ height: 'auto' }}
              />
            </div>

            <Image
              src="/images/smiling-woman.png"
              alt="Balloon view"
              width={300}
              height={300}
              className="rounded-xl sm:rounded-2xl md:rounded-3xl object-cover h-[115px] sm:h-[170px] md:h-[220px] lg:h-[250px] w-full"
              style={{ height: 'auto' }}
            />

            <Image
              src="/images/balloon-landscape.png"
              alt="Balloon group"
              width={300}
              height={300}
              className="rounded-xl sm:rounded-2xl md:rounded-3xl object-cover h-[115px] sm:h-[170px] md:h-[220px] lg:h-[250px] w-full"
              style={{ height: 'auto' }}
            />
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 items-center mt-12 sm:mt-16 lg:mt-20">

          {/* TEXT */}
          <div className="order-2 md:order-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-2">
              Sécurité et confort : nos priorités
            </h2>

            <h3 className="text-base sm:text-lg font-semibold text-[#C04000] mb-4 sm:mb-6">
              La sécurité avant tout
            </h3>

            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-800 list-disc pl-5">
              <li>Chez Sky Experience, la sécurité est notre priorité absolue.</li>
              <li>
                Nos pilotes certifiés et expérimentés vous accompagneront tout au long de l’aventure, afin de vous garantir un vol sûr et confortable.
              </li>
              <li>
                Nous mettons à votre disposition des montgolfières parfaitement entretenues, adaptées à vos besoins, assurant à la fois sécurité et confort.
              </li>
            </ul>
          </div>

          {/* IMAGES */}
          <div className="relative flex justify-center order-1 md:order-2">
            <div className="relative w-full max-w-md">
              <div className="relative w-full h-[280px] sm:h-[380px] md:h-[450px] lg:h-[500px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden">
                <Image
                  src="/images/group-basket.png"
                  alt="Balloon safety"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-10 -left-4 sm:-left-8 md:-left-16 w-[60%] sm:w-[65%] md:w-[70%] h-[140px] sm:h-[180px] md:h-[240px] lg:h-[300px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/images/happy-group.webp"
                  alt="Family balloon"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 60vw, 35vw"
                />
              </div>
            </div>
          </div>

        </div>



        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mt-8 sm:mt-12 md:mt-16 lg:mt-24 mb-8 sm:mb-12 md:mb-16 lg:mb-20">

          <div className="overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl grid grid-rows-2 gap-0 max-w-xl">

            {/* TOP BIG IMAGE */}
            <div>
              <Image
                src="/images/balloon-basket.png"
                alt="Hot air balloon"
                width={800}
                height={500}
                className="w-full h-[140px] sm:h-[180px] md:h-[220px] lg:h-[260px] object-cover"
              />
            </div>

            {/* BOTTOM TWO IMAGES */}
            <div className="grid grid-cols-2 gap-0">

              <Image
                src="/images/balloon-land.png"
                alt="Multiple balloons"
                width={400}
                height={300}
                className="w-full h-[95px] sm:h-[120px] md:h-[150px] lg:h-[180px] object-cover rounded-bl-xl sm:rounded-bl-2xl md:rounded-bl-3xl"
              />

              <Image
                src="/images/ball.webp"
                alt="Sunset balloon"
                width={400}
                height={300}
                className="w-full h-[95px] sm:h-[120px] md:h-[150px] lg:h-[180px] object-cover rounded-br-xl sm:rounded-br-2xl md:rounded-br-3xl"
              />

            </div>
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6">
              Un vol adapté à vos attentes
            </h2>

            <ul className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-800 list-disc pl-5">
              <li>
                Que vous choisissiez un vol classique ou privé, chaque expérience est soigneusement planifiée pour vous offrir une vue panoramique de Marrakech comme vous ne l’avez jamais vue auparavant.
              </li>

              <li>
                Chaque instant passé dans les airs vous invite à vous détendre et à apprécier pleinement la beauté spectaculaire des paysages qui vous entourent.
              </li>
            </ul>
          </div>
        </div>

        {/* BACKGROUND IMAGE */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <Image
            src="/images/relax-bg.jpg"
            alt="Relaxation Balloon"
            fill
            className="object-cover object-center blur-[2px]"
            priority
          />
          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 text-white max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-playfair font-bold mb-4 sm:mb-6 md:mb-8 drop-shadow-xl leading-tight">
              Un moment de détente et d’émerveillement
            </h2>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-2xl font-light leading-relaxed drop-shadow-md">
              <p>
                Un vol en montgolfière est une expérience rare et paisible, idéale pour se détendre et s’émerveiller.
              </p>

              <p>
                Montez à bord d’une montgolfière spacieuse et confortable et laissez-vous porter par la douce brise.
              </p>

              <p>
                Vivez la sérénité du vol tout en admirant les paysages en perpétuel changement sous vos yeux.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          {/* Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6">
              Un voyage à travers les paysages marocains
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              Laissez-vous captiver par la beauté des paysages marocains. Depuis les airs, vous profiterez de vues inégalées sur les vastes palmeraies de Marrakech, les montagnes de l’Atlas et les dunes du désert.
              Le lever du soleil offre des couleurs spectaculaires, idéales pour immortaliser des photos inoubliables.
            </p>
          </div>


          {/* Images */}
          <div className="relative flex flex-col gap-6">
            <div className="relative w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px]">
              {/* Image 1 - top left */}
              <div className="absolute top-0 left-0 w-[70%] h-[140px] sm:h-[160px] md:h-[190px] lg:h-[220px] rounded-[20px] sm:rounded-[24px] overflow-hidden">
                <Image
                  src="/images/ourflight.png"
                  alt="Hot air balloons sky"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Image 2 - bottom right */}
              <div className="absolute bottom-17 right-0 w-[60%] h-[120px] sm:h-[140px] md:h-[170px] lg:h-[220px] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-lg">
                <Image
                  src="/images/balloon-basketZ.png"
                  alt="Balloon basket view"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white py-6 sm:py-8 md:py-10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="relative bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 w-[90%] sm:w-[85%] md:w-[75%] lg:w-[70%] h-32 sm:h-40 md:h-48 lg:h-56 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden">
              <Image
                src="/images/desert-balloons.png"
                alt="Hot air balloons over desert"
                fill
                className="object-cover "
                priority
                sizes="(max-width: 768px) 100vw, 70vw"
              />
            </div>
          </div>
        </div>
        <div className="relative bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-8">


          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">

            {/* LEFT CONTENT */}
            <div>

              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                Nos engagements : une expérience sans souci
              </h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-md">
                De la réservation à l’atterrissage, nous avons tout pris en charge pour que vous puissiez vous détendre pleinement et profiter du moment.
                Nous nous occupons de toute la logistique : transport, accueil, consignes de sécurité et souvenirs personnalisés à la fin de votre aventure.
                Tout ce que vous avez à faire, c’est vous concentrer sur l’essentiel : profiter de l’expérience.
              </p>
            </div>

            {/* RIGHT IMAGES */}
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[360px] lg:h-[420px]">

              {/* LEFT BIG IMAGE */}
              <div className="absolute top-0 left-0 w-[70%] h-[135px] sm:h-[160px] md:h-[190px] lg:h-[230px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden">
                <Image
                  src="/images/commitment-main.png"
                  alt="Group in hot air balloon"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* LEFT BOTTOM IMAGE */}
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-0 w-[70%] h-[90px] sm:h-[105px] md:h-[120px] lg:h-[140px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden">
                <Image
                  src="/images/commitment-bottom.png"
                  alt="Inside balloon"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* RIGHT TALL IMAGE */}
              <div className="absolute top-0 right-2 sm:right-3 md:right-4 lg:right-5 w-[33%] h-[230px] sm:h-[275px] md:h-[325px] lg:h-[390px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden">
                <Image
                  src="/images/commitment-fire.webp"
                  alt="Balloon fire flame"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <TestimonialsSection />

      <Footer />
    </main>
  );
}
