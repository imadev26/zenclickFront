'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const currencies = [
    { code: 'MAD', symbol: 'Dh', name: 'Moroccan Dirham' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
];

export default function CurrencySelector() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(currencies[0]);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 text-gray-700 hover:text-[#C04000] font-bold text-sm transition-colors py-2"
            >
                <span>{selected.symbol}</span>
                <span>{selected.code}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 p-1"
                    >
                        {currencies.map((currency) => (
                            <button
                                key={currency.code}
                                onClick={() => {
                                    setSelected(currency);
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm rounded-lg transition-colors ${selected.code === currency.code
                                    ? 'bg-orange-50 text-[#C04000] font-bold'
                                    : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                <span className="flex items-center gap-2">
                                    <span className="w-5 text-center font-serif">{currency.symbol}</span>
                                    <span>{currency.code}</span>
                                </span>
                                {selected.code === currency.code && <Check size={14} />}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
