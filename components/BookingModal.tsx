'use client';

import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, User, Mail, Phone, MapPin, Calendar, Check } from 'lucide-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    flightTitle: string;
    pricePerPerson: number;
}

export default function BookingModal({ isOpen, onClose, flightTitle, pricePerPerson }: BookingModalProps) {
    const [step, setStep] = useState(1);
    const [bookingData, setBookingData] = useState({
        date: new Date('2025-10-10'),
        travelers: 2,
        name: '',
        email: '',
        phone: '',
        location: ''
    });

    if (!isOpen) return null;

    const total = pricePerPerson * bookingData.travelers;

    const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const handleDateSelect = (day: number) => {
        // Simplified for demo: Just sets the day in state, assuming month is fixed Oct 2025
        const newDate = new Date(bookingData.date);
        newDate.setDate(day);
        setBookingData({ ...bookingData, date: newDate });
    }

    // Generate Oct 2025 calendar days (starts Wednesday)
    const days = [];
    for (let i = 0; i < 2; i++) days.push(null); // Mon, Tue empty
    for (let i = 1; i <= 31; i++) days.push(i);


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-[#FFF9F2] rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col shadow-2xl relative animate-in fade-in zoom-in duration-300">

                {/* Header */}
                <div className="p-6 md:p-8 flex justify-between items-center border-b border-gray-100">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">{flightTitle}</h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-200/50 rounded-full transition-colors">
                        <X size={24} className="text-gray-500" />
                    </button>
                </div>

                {/* Stepper */}
                <div className="px-8 py-6 flex justify-center items-center">
                    {[1, 2, 3, 4].map((s, idx) => (
                        <div key={s} className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300
                        ${step >= s ? 'bg-[#22C55E] text-white' : 'bg-gray-200 text-gray-500'}`}>
                                {step > s ? <Check size={16} strokeWidth={3} /> : s}
                            </div>
                            {idx < 3 && (
                                <div className={`w-12 md:w-20 h-1 mx-2 rounded-full transition-colors duration-300 ${step > idx + 1 ? 'bg-[#22C55E]' : 'bg-gray-200'}`} />
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center text-gray-500 mb-6 font-medium">
                    {step === 1 && "Select Date & Travelers"}
                    {step === 2 && "Contact Information"}
                    {step === 3 && "Review Booking"}
                    {step === 4 && "Booking Confirmed"}
                </div>


                {/* Content */}
                <div className="flex-1 px-6 md:px-12 pb-8">

                    {/* Step 1: Date & Travelers */}
                    {step === 1 && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            {/* Calendar Widget */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <div className="flex items-center justify-between mb-6 px-2">
                                    <ChevronLeft size={20} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                                    <span className="font-bold text-lg">October 2025</span>
                                    <ChevronRight size={20} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                                </div>

                                <div className="grid grid-cols-7 mb-4 text-center text-xs font-medium text-gray-400">
                                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <div key={d}>{d}</div>)}
                                </div>

                                <div className="grid grid-cols-7 gap-y-4 gap-x-2">
                                    {days.map((d, i) => (
                                        <div key={i} className="flex justify-center">
                                            {d ? (
                                                <button
                                                    onClick={() => handleDateSelect(d)}
                                                    className={`w-9 h-9 rounded-lg text-sm font-medium flex items-center justify-center transition-all
                                            ${bookingData.date.getDate() === d
                                                            ? 'bg-[#3B82F6] text-white shadow-md'
                                                            : 'hover:bg-gray-100 text-gray-700'}`}
                                                >
                                                    {d}
                                                </button>
                                            ) : <div />}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Summary Card */}
                            <div className="bg-[#FFE4C4]/40 p-6 md:p-8 rounded-2xl border border-orange-100/50 h-fit">
                                <h3 className="font-bold text-xl mb-6 text-gray-900">Booking Summary</h3>

                                <div className="bg-white p-4 rounded-xl mb-6 shadow-sm border border-gray-100 cursor-pointer flex items-center gap-3">
                                    <Calendar size={18} className="text-gray-400" />
                                    <div>
                                        <div className="text-[10px] text-gray-400 font-bold uppercase">Selected Date</div>
                                        <div className="font-semibold text-gray-900">
                                            {bookingData.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="text-sm font-bold text-gray-700 mb-2 block">Number of Travelers</label>
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => setBookingData(prev => ({ ...prev, travelers: Math.max(1, prev.travelers - 1) }))}
                                            className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold hover:bg-orange-200 transition-colors"
                                        >-</button>
                                        <span className="text-xl font-bold w-4 text-center">{bookingData.travelers}</span>
                                        <button
                                            onClick={() => setBookingData(prev => ({ ...prev, travelers: Math.min(10, prev.travelers + 1) }))}
                                            className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center font-bold hover:bg-gray-50 transition-colors"
                                        >+</button>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-orange-200/50 space-y-3">
                                    <div className="flex justify-between items-center text-gray-700">
                                        <span>Price per person</span>
                                        <span className="font-bold">${pricePerPerson}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-gray-700">
                                        <span>Travelers</span>
                                        <span className="font-bold">×{bookingData.travelers}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[#D93F3F] text-xl font-extrabold pt-3">
                                        <span>Total</span>
                                        <span>${total}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={nextStep}
                                    className="w-full mt-8 bg-[#22C55E] hover:bg-[#1ea851] text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Contact Information */}
                    {step === 2 && (
                        <div className="max-w-2xl mx-auto">
                            <h3 className="text-xl font-bold mb-8 text-gray-900 border-b pb-4">Contact Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                                        <User size={16} /> Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={bookingData.name}
                                        onChange={e => setBookingData({ ...bookingData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                                        <Mail size={16} /> Email *
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={bookingData.email}
                                        onChange={e => setBookingData({ ...bookingData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                                        <Phone size={16} /> Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        value={bookingData.phone}
                                        onChange={e => setBookingData({ ...bookingData, phone: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                                        <MapPin size={16} /> Pick-up Location *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter pick-up location"
                                        value={bookingData.location}
                                        onChange={e => setBookingData({ ...bookingData, location: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    onClick={prevStep}
                                    className="flex-1 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-bold py-3.5 rounded-xl transition-colors"
                                >
                                    Back
                                </button>
                                <button
                                    onClick={nextStep}
                                    className="flex-1 bg-[#CED3DC] hover:bg-[#bdc3ce] text-gray-700 font-bold py-3.5 rounded-xl shadow-sm transition-colors"
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Review */}
                    {step === 3 && (
                        <div className="max-w-2xl mx-auto">
                            <h3 className="text-xl font-bold mb-8 text-gray-900 border-b pb-4">Review Your Booking</h3>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8 space-y-4">
                                <div className="grid grid-cols-[140px_1fr] gap-4 items-center">
                                    <span className="font-semibold text-gray-600">Flight:</span>
                                    <span className="font-bold text-gray-900 text-right">{flightTitle}</span>
                                </div>
                                <div className="grid grid-cols-[140px_1fr] gap-4 items-center">
                                    <span className="font-semibold text-gray-600">Date:</span>
                                    <span className="font-bold text-gray-900 text-right">{bookingData.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                </div>
                                <div className="grid grid-cols-[140px_1fr] gap-4 items-center">
                                    <span className="font-semibold text-gray-600">Travelers:</span>
                                    <span className="font-bold text-gray-900 text-right">{bookingData.travelers} persons</span>
                                </div>
                                <div className="my-4 border-t border-dashed border-gray-200" />
                                <div className="grid grid-cols-[140px_1fr] gap-4 items-center">
                                    <span className="font-semibold text-gray-600">Full Name:</span>
                                    <span className="font-bold text-gray-900 text-right">{bookingData.name || 'Not provided'}</span>
                                </div>
                                <div className="grid grid-cols-[140px_1fr] gap-4 items-center">
                                    <span className="font-semibold text-gray-600">Email:</span>
                                    <span className="font-bold text-gray-900 text-right break-all">{bookingData.email || 'Not provided'}</span>
                                </div>
                                <div className="grid grid-cols-[140px_1fr] gap-4 items-center">
                                    <span className="font-semibold text-gray-600">Phone:</span>
                                    <span className="font-bold text-gray-900 text-right">{bookingData.phone || 'Not provided'}</span>
                                </div>
                                <div className="grid grid-cols-[140px_1fr] gap-4 items-center">
                                    <span className="font-semibold text-gray-600">Pick-up Location:</span>
                                    <span className="font-bold text-gray-900 text-right">{bookingData.location || 'Not provided'}</span>
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between items-center">
                                    <span className="text-xl font-bold text-[#D93F3F]">Total Amount:</span>
                                    <span className="text-2xl font-extrabold text-[#D93F3F]">${total}</span>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    onClick={prevStep}
                                    className="flex-1 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-bold py-3.5 rounded-xl transition-colors"
                                >
                                    Back
                                </button>
                                <button
                                    onClick={nextStep}
                                    className="flex-1 bg-[#22C55E] hover:bg-[#1ea851] text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
                                >
                                    Confirm Booking
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Success */}
                    {step === 4 && (
                        <div className="text-center py-12">
                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check size={48} className="text-green-600" strokeWidth={3} />
                            </div>
                            <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Booking Confirmed!</h3>
                            <p className="text-gray-600 max-w-md mx-auto mb-8">
                                Thank you for booking with us. A confirmation email has been sent to <strong>{bookingData.email}</strong>.
                            </p>
                            <button
                                onClick={onClose}
                                className="bg-[#C04000] text-white font-bold py-3 px-12 rounded-xl shadow-lg hover:bg-[#A03000] transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
