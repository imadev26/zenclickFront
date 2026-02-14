'use client';

import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { ArrowRight } from "lucide-react";


export default function AboutSection() {
  return (
    <>
      {/* SECTION 1 */}
      <section id="about" className="bg-white py-24 ">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE SIDE */}
          <div className="relative">
            <div className="relative w-full h-[720px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/balloon-intro.png"
                alt="Adventure Balloon"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* TEXT SIDE */}
          <div>
            <p className="text-[#C04000] font-bold mb-3 uppercase tracking-wider">
              En savoir plus sur nous
            </p>

            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-gray-900 mb-8 leading-tight">
              SKY EXPERIENCE
              <br /> Hot Air Balloon Marrakech
            </h2>

            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                SKY EXPERIENCE est une agence spécialisée dans les vols en montgolfière à Marrakech, offrant des expériences aériennes uniques au-dessus des paysages emblématiques du Maroc. Reconnue pour son professionnalisme et la qualité de ses prestations, SKY EXPERIENCE s’engage à proposer des vols alliant sécurité, confort et émotion, dans le respect des normes internationales de l’aviation civile.
              </p>

              <p>
                Fondée au Maroc, SKY EXPERIENCE s’appuie sur une équipe expérimentée de pilotes certifiés et de professionnels passionnés, disposant d’une solide expertise dans les opérations de hot air balloon Marrakech. Chaque vol est soigneusement préparé afin de garantir une expérience fluide, sereine et inoubliable, du transfert jusqu’à l’atterrissage.
              </p>

            </div>

            <div className="mt-8">
              <Link href="/about" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C04000] to-[#D84A1B] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                En Savoir Plus
                <ArrowRight size={20} />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
