'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BookingCalendarProps {
    onCheckAvailability?: () => void;
}

export default function BookingCalendar({ onCheckAvailability }: BookingCalendarProps) {
    const [currentDate] = useState(new Date('2025-05-01')); // Hardcoded to match design May 2025
    const [selectedDate, setSelectedDate] = useState<number | null>(7);

    // Generate calendar days for May 2025
    // May 1st 2025 is a Thursday
    const days = [];
    // Empty slots for Mon, Tue, Wed
    for (let i = 0; i < 3; i++) days.push(null);
    // Days 1-31
    for (let i = 1; i <= 31; i++) days.push(i);

    return (
        <div className="bg-white rounded-[2rem] p-6 shadow-xl w-full max-w-sm mx-auto border border-gray-100">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
                <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-400 transition-colors">
                    <ChevronLeft size={16} strokeWidth={2} />
                </button>
                <div className="flex gap-4 text-base font-bold text-gray-800">
                    <span>May</span>
                    <span>2025</span>
                </div>
                <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-400 transition-colors">
                    <ChevronRight size={16} strokeWidth={2} />
                </button>
            </div>

            {/* Week Days */}
            <div className="grid grid-cols-7 mb-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <div key={day} className="text-center text-[10px] font-medium text-gray-500 uppercase tracking-wide">
                        {day}
                    </div>
                ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-y-4 gap-x-1 mb-8">
                {days.map((day, index) => (
                    <div key={index} className="flex justify-center">
                        {day ? (
                            <button
                                onClick={() => setSelectedDate(day)}
                                className={`w-8 h-8 flex items-center justify-center text-xs font-medium rounded-full transition-all duration-200 ${selectedDate === day
                                    ? 'bg-black text-white shadow-md'
                                    : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {day}
                            </button>
                        ) : (
                            <div />
                        )}
                    </div>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
                <button
                    onClick={onCheckAvailability}
                    className="w-full bg-[#5D9B38] hover:bg-[#4a802a] text-white font-bold py-3 rounded-lg uppercase text-sm tracking-wide shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
                >
                    check availability
                </button>
                <button className="w-full bg-[#3B41E3] hover:bg-[#2f34b9] text-white font-bold py-3 rounded-lg uppercase text-sm tracking-wide shadow-lg hover:shadow-xl transition-all active:scale-[0.98]">
                    CONTACT
                </button>
            </div>
        </div>
    );
}
