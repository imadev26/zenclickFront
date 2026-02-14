'use client';

import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/app/data/faq";

export default function FAQSection() {
    const [openId, setOpenId] = React.useState<string | null>(null); // All closed by default

    const toggleFAQ = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="faq" className="py-24 bg-white relative z-10">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-6 font-serif">Questions Fréquentes</h2>
                    <p className="text-gray-600 text-lg md:text-xl font-light max-w-2xl mx-auto">
                        Retrouvez ici les réponses aux questions les plus courantes pour préparer votre vol en toute sérénité.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {FAQ_ITEMS.map((item) => {
                        const isOpen = openId === item.id;
                        return (
                            <motion.div
                                key={item.id}
                                initial={false}
                                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#C04000] shadow-lg ring-1 ring-[#C04000]/20' : 'border-gray-200 hover:border-gray-300'}`}
                            >
                                <div
                                    onClick={() => toggleFAQ(item.id)}
                                    className="flex items-start p-6 cursor-pointer select-none bg-gray-50/50"
                                >
                                    <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold mr-4 transition-colors duration-300 ${isOpen ? 'bg-[#C04000] text-white' : 'bg-gray-200 text-gray-500'}`}>
                                        {item.number}
                                    </div>

                                    <div className="flex-grow pt-2">
                                        <h3 className={`font-bold text-lg transition-colors duration-300 ${isOpen ? 'text-black' : 'text-gray-700'}`}>
                                            {item.question}
                                        </h3>
                                    </div>

                                    <div className={`shrink-0 ml-4 pt-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                        {isOpen ? (
                                            <div className="bg-[#C04000] rounded-full p-1 text-white">
                                                <Minus size={20} />
                                            </div>
                                        ) : (
                                            <div className="bg-gray-200 rounded-full p-1 text-gray-500">
                                                <Plus size={20} />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 pt-0 pl-20 text-gray-600 leading-relaxed border-t border-transparent">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
