'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/app/data/testimonials";

export default function TestimonialsSection() {
    const testimonials = TESTIMONIALS;

    return (
        <section id="testimonials" className="py-24 bg-[#E6D5C3]"> {/* Beige background similar to screenshot */}
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
