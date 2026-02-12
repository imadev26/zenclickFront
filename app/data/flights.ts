// ============================================
// FLIGHTS SYSTEM - BACKEND READY STRUCTURE
// ============================================
// This file contains the complete flights data structure ready for backend integration
// Replace static data with API calls when backend is ready

// ============================================
// INTERFACES & TYPES
// ============================================

export type FlightStatus = 'active' | 'inactive' | 'seasonal';
export type DifficultyLevel = 'easy' | 'moderate' | 'challenging';

export interface SeasonalPricing {
    season: string; // e.g., 'high', 'low', 'peak'
    startDate: string; // ISO date
    endDate: string; // ISO date
    price: number;
}

export interface Availability {
    date: string; // ISO date
    slots: number; // Available slots for this date
    booked: number; // Already booked
}

export interface FlightRequirements {
    minWeight?: number; // kg
    maxWeight?: number; // kg
    healthRestrictions?: string[];
    pregnancyAllowed: boolean;
    mobilityRequired: string; // e.g., 'must be able to stand for 1 hour'
}

export interface CancellationPolicy {
    fullRefund: number; // days before flight
    partialRefund: number; // days before flight
    noRefund: number; // days before flight
    refundPercentage: {
        full: number;
        partial: number;
    };
}

export interface Flight {
    // Core Identifiers
    id: string;
    slug: string; // URL-friendly identifier

    // Basic Information
    title: string;
    description: string;

    // Pricing
    price: number;
    currency: string;
    seasonalPricing?: SeasonalPricing[];

    // Media
    image: string; // Main image
    images: string[]; // Gallery images

    // Location & Duration
    location: string;
    destination: string;
    duration: string;

    // Capacity
    minPeople: number;
    maxPeople: number;
    minAge: number;
    maxCapacityPerDay?: number; // Max bookings per day

    // Classification
    tourType: string;
    difficulty?: DifficultyLevel;
    tags?: string[]; // For filtering: ['romantic', 'adventure', 'luxury']

    // Content
    highlights: string[];
    included: string[];
    excluded: string[];

    // Features
    features: {
        icon: 'car' | 'safety' | 'clock' | 'coffee' | 'camera';
        title: string;
        description: string;
    }[];

    // Policies & Requirements
    requirements?: FlightRequirements;
    cancellationPolicy?: CancellationPolicy;
    weatherPolicy?: string;

    // Status & Availability
    status: FlightStatus;
    featured?: boolean; // Show on homepage
    popular?: boolean; // Mark as popular choice

    // Ratings & Reviews
    rating?: number; // Average rating (0-5)
    reviewCount?: number; // Total number of reviews

    // SEO
    metaDescription?: string;
    metaKeywords?: string[];

    // Timestamps (ISO 8601 format)
    createdAt: string;
    updatedAt: string;

    // Availability (optional - can be fetched separately)
    availability?: Availability[];
}

// ============================================
// DEFAULT POLICIES
// ============================================

const DEFAULT_CANCELLATION_POLICY: CancellationPolicy = {
    fullRefund: 7, // 7 days before
    partialRefund: 3, // 3 days before
    noRefund: 1, // 1 day before
    refundPercentage: {
        full: 100,
        partial: 50
    }
};

const DEFAULT_WEATHER_POLICY = "Flights are subject to weather conditions. In case of cancellation due to weather, you will receive a full refund or can reschedule for another date.";

// ============================================
// FLIGHTS DATA
// ============================================

export const FLIGHTS: Flight[] = [
    {
        id: 'royal',
        slug: 'royal-hot-air-balloon-flight',
        title: 'Royal Hot-Air Balloon Flight',
        description: 'Experience the magic of floating above the Moroccan landscape with the Royal Hot Air Balloon Flight offered by Sky Experience. This one-hour exclusive royal flight unveils breathtaking views of the Atlas Mountains, desert, and Berber villages. Perfect for travelers seeking an unique perspective of Marrakech\'s beauty combined with luxury, culture, and adventure into one unforgettable morning.',
        price: 550,
        currency: '$',
        seasonalPricing: [
            { season: 'high', startDate: '2025-10-01', endDate: '2025-04-30', price: 550 },
            { season: 'low', startDate: '2025-05-01', endDate: '2025-09-30', price: 495 }
        ],
        image: '/images/filght.png',
        images: ['/images/filght.png', '/images/hotair.png', '/images/ourflight.png'],
        location: 'Ouled El Garne, Bourouss, Morocco',
        destination: 'Marrakech',
        duration: '1 day',
        minPeople: 2,
        maxPeople: 4,
        minAge: 4,
        maxCapacityPerDay: 8,
        tourType: 'Royal Flight',
        difficulty: 'easy',
        tags: ['luxury', 'exclusive', 'romantic', 'vip'],
        highlights: [
            'Breathtaking sunrise views over the Marrakech countryside',
            'Intimate balloon with certified private pilot',
            'Personalized ceremony with Amazigh calligraphy',
            'Safe and professional service from an internationally recognized operator'
        ],
        included: [
            'Roundtrip transportation from Marrakech hotels',
            'Welcome tea and refreshments upon arrival',
            'Professional safety briefing by certified pilot',
            'Full demonstration of balloon setup and inflation',
            'Traditional Moroccan breakfast post flight',
            'Personalized flight certificate'
        ],
        excluded: [
            'Hotel accommodation',
            'Travel insurance',
            'Personal expenses',
            'Additional activities or tours',
            'Gratuities'
        ],
        features: [
            {
                icon: 'car',
                title: 'Transport',
                description: 'VIP private transport from your hotel or riad.'
            },
            {
                icon: 'safety',
                title: 'Safety Briefing',
                description: 'Private safety briefing by one of our most experienced pilots.'
            },
            {
                icon: 'clock',
                title: '1 Hour Flight',
                description: 'A one-hour exclusive royal flight offering breathtaking views of the Atlas Mountains, desert, and Berber villages.'
            },
            {
                icon: 'coffee',
                title: 'Breakfast',
                description: 'Gourmet breakfast served on board, featuring refined delicacies and Moroccan specialties.'
            }
        ],
        requirements: {
            maxWeight: 120,
            healthRestrictions: ['severe heart conditions', 'recent surgery'],
            pregnancyAllowed: false,
            mobilityRequired: 'Must be able to stand for 1 hour and climb into basket'
        },
        cancellationPolicy: DEFAULT_CANCELLATION_POLICY,
        weatherPolicy: DEFAULT_WEATHER_POLICY,
        status: 'active',
        featured: true,
        popular: true,
        rating: 4.9,
        reviewCount: 127,
        metaDescription: 'Experience luxury with our Royal Hot Air Balloon Flight over Marrakech. Exclusive private flight with gourmet breakfast and stunning Atlas Mountain views.',
        metaKeywords: ['royal balloon flight', 'luxury marrakech', 'private hot air balloon', 'vip flight morocco'],
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2025-02-10T14:30:00Z'
    },
    {
        id: 'top-vip',
        slug: 'top-vip-private-hot-air-balloon-flight',
        title: 'Top VIP Private Hot Air Balloon Flight',
        description: 'Indulge in the most luxurious way to experience the skies over Marrakech with the Top VIP Private Hot Air Balloon Flight, offered exclusively by Sky Experience. Perfect for travelers seeking an unique perspective of Marrakech\'s beauty combined with luxury, culture, and adventure into one unforgettable morning.',
        price: 495,
        currency: '$',
        image: '/images/private-main.png',
        images: ['/images/private-main.png', '/images/hotair.png', '/images/filght.png'],
        location: 'Ouled El Garne, Bourouss, Morocco',
        destination: 'Marrakech',
        duration: '1 day',
        minPeople: 2,
        maxPeople: 8,
        minAge: 4,
        maxCapacityPerDay: 16,
        tourType: 'VIP Private',
        difficulty: 'easy',
        tags: ['private', 'luxury', 'group', 'vip'],
        highlights: [
            'Breathtaking sunrise views over the Marrakech countryside',
            'Private exclusive balloon for your group',
            'Personalized ceremony with Amazigh calligraphy',
            'Safe and professional service from certified pilots'
        ],
        included: [
            'Private 4x4 transport from Marrakech hotels',
            'Professional safety briefing by certified pilot',
            'Full demonstration of balloon setup',
            'Berber breakfast in traditional tent',
            'Personalized flight certificate'
        ],
        excluded: [
            'Hotel accommodation',
            'Travel insurance',
            'Personal expenses',
            'Additional activities or tours'
        ],
        features: [
            { icon: 'car', title: 'Private Transport', description: 'Exclusive 4x4 transport.' },
            { icon: 'coffee', title: 'Breakfast', description: 'Berber breakfast in a traditional tent.' },
            { icon: 'clock', title: '1 Hour Flight', description: 'Private flight for you and your group.' }
        ],
        cancellationPolicy: DEFAULT_CANCELLATION_POLICY,
        weatherPolicy: DEFAULT_WEATHER_POLICY,
        status: 'active',
        featured: true,
        popular: true,
        rating: 4.8,
        reviewCount: 94,
        metaDescription: 'Book a Top VIP Private Hot Air Balloon Flight in Marrakech. Exclusive balloon for your group with Berber breakfast and stunning views.',
        metaKeywords: ['vip private balloon', 'group balloon flight', 'marrakech private tour'],
        createdAt: '2024-01-20T09:00:00Z',
        updatedAt: '2025-02-08T11:15:00Z'
    },
    {
        id: 'vip',
        slug: 'vip-hot-air-balloon-flight',
        title: 'VIP Hot Air Balloon Flight',
        description: 'Experience an unforgettable hot air balloon adventure over Marrakech with our VIP Flight. Enjoy comfortable shared transport, stunning aerial views of the Atlas Mountains and Berber villages, followed by a traditional Moroccan breakfast.',
        price: 315,
        currency: '$',
        image: '/images/hotair.png',
        images: ['/images/hotair.png', '/images/classic-main.png', '/images/ourflight.png'],
        location: 'Ouled El Garne, Bourouss, Morocco',
        destination: 'Marrakech',
        duration: '1 day',
        minPeople: 2,
        maxPeople: 12,
        minAge: 4,
        maxCapacityPerDay: 24,
        tourType: 'VIP Flight',
        difficulty: 'easy',
        tags: ['vip', 'shared', 'breakfast included'],
        highlights: [
            'Stunning sunrise views over Marrakech',
            'Shared balloon with certified pilot',
            'Traditional Moroccan breakfast',
            'Flight certificate included'
        ],
        included: [
            'Shared minibus transport from hotels',
            'Welcome tea upon arrival',
            'Safety briefing by certified pilot',
            'Traditional breakfast after landing',
            'Flight certificate'
        ],
        excluded: [
            'Hotel accommodation',
            'Travel insurance',
            'Personal expenses',
            'Gratuities'
        ],
        features: [
            { icon: 'car', title: 'Shared Transport', description: 'Comfortable minibus transport.' },
            { icon: 'coffee', title: 'Breakfast', description: 'Traditional breakfast after landing.' },
            { icon: 'clock', title: '1 Hour Flight', description: 'Shared flight with other passengers.' }
        ],
        cancellationPolicy: DEFAULT_CANCELLATION_POLICY,
        weatherPolicy: DEFAULT_WEATHER_POLICY,
        status: 'active',
        featured: true,
        popular: true,
        rating: 4.7,
        reviewCount: 156,
        metaDescription: 'VIP Hot Air Balloon Flight in Marrakech with traditional breakfast. Affordable luxury balloon experience over Atlas Mountains.',
        metaKeywords: ['vip balloon marrakech', 'shared balloon flight', 'affordable balloon tour'],
        createdAt: '2024-02-01T08:00:00Z',
        updatedAt: '2025-02-05T16:45:00Z'
    },
    {
        id: 'classic',
        slug: 'classic-hot-air-balloon-flight',
        title: 'Classic Hot Air Balloon Flight',
        description: 'Experience the magic of floating above the Moroccan landscape with the Classic Hot Air Balloon Flight. This 40-60 minute flight unveils breathtaking views of the Atlas Mountains, desert, and Berber villages at an affordable price.',
        price: 205,
        currency: '$',
        image: '/images/classic-main.png',
        images: ['/images/classic-main.png', '/images/ourflight.png', '/images/hotair.png'],
        location: 'Ouled El Garne, Bourouss, Morocco',
        destination: 'Marrakech',
        duration: '1 day',
        minPeople: 2,
        maxPeople: 16,
        minAge: 4,
        maxCapacityPerDay: 32,
        tourType: 'Classic Flight',
        difficulty: 'easy',
        tags: ['budget-friendly', 'classic', 'popular'],
        highlights: [
            'Beautiful sunrise views over Marrakech',
            'Shared balloon with certified pilot',
            'Traditional Moroccan tea',
            'Safety briefing included'
        ],
        included: [
            'Roundtrip transportation from hotels',
            'Safety briefing by certified pilot',
            'Traditional Moroccan tea upon landing',
            'Flight certificate'
        ],
        excluded: [
            'Hotel accommodation',
            'Travel insurance',
            'Personal expenses'
        ],
        features: [
            { icon: 'car', title: 'Transport', description: 'Standard transport included.' },
            { icon: 'coffee', title: 'Tea', description: 'Moroccan tea served upon landing.' },
            { icon: 'clock', title: '40-60 Min Flight', description: 'Standard duration flight.' },
            { icon: 'safety', title: 'Safety First', description: 'Full safety briefing and equipment check before flight.' }
        ],
        cancellationPolicy: DEFAULT_CANCELLATION_POLICY,
        weatherPolicy: DEFAULT_WEATHER_POLICY,
        status: 'active',
        featured: true,
        popular: true,
        rating: 4.6,
        reviewCount: 243,
        metaDescription: 'Affordable Classic Hot Air Balloon Flight in Marrakech. Experience stunning Atlas Mountain views at budget-friendly prices.',
        metaKeywords: ['classic balloon flight', 'affordable marrakech balloon', 'budget balloon tour'],
        createdAt: '2024-01-10T07:00:00Z',
        updatedAt: '2025-02-12T09:20:00Z'
    }
    // Note: Remaining flights follow same enhanced structure
];

// ============================================
// HELPER FUNCTIONS
// ============================================

// Get flight by ID
export function getFlightById(id: string): Flight | undefined {
    return FLIGHTS.find(flight => flight.id === id);
}

// Get flight by slug
export function getFlightBySlug(slug: string): Flight | undefined {
    return FLIGHTS.find(flight => flight.slug === slug);
}

// Get all active flights
export function getActiveFlights(): Flight[] {
    return FLIGHTS.filter(flight => flight.status === 'active');
}

// Get featured flights
export function getFeaturedFlights(limit?: number): Flight[] {
    const featured = FLIGHTS.filter(flight => flight.status === 'active' && flight.featured);
    return limit ? featured.slice(0, limit) : featured;
}

// Get popular flights
export function getPopularFlights(limit?: number): Flight[] {
    const popular = FLIGHTS.filter(flight => flight.status === 'active' && flight.popular)
        .sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return limit ? popular.slice(0, limit) : popular;
}

// Get flights by destination
export function getFlightsByDestination(destination: string): Flight[] {
    return FLIGHTS.filter(flight =>
        flight.status === 'active' &&
        flight.destination.toLowerCase() === destination.toLowerCase()
    );
}

// Get flights by tour type
export function getFlightsByTourType(tourType: string): Flight[] {
    return FLIGHTS.filter(flight =>
        flight.status === 'active' &&
        flight.tourType === tourType
    );
}

// Get flights by price range
export function getFlightsByPriceRange(min: number, max: number): Flight[] {
    return FLIGHTS.filter(flight =>
        flight.status === 'active' &&
        flight.price >= min &&
        flight.price <= max
    );
}

// Get flights by tags
export function getFlightsByTag(tag: string): Flight[] {
    return FLIGHTS.filter(flight =>
        flight.status === 'active' &&
        flight.tags?.includes(tag.toLowerCase())
    );
}

// Search flights
export function searchFlights(query: string): Flight[] {
    const lowerQuery = query.toLowerCase();
    return FLIGHTS.filter(flight =>
        flight.status === 'active' && (
            flight.title.toLowerCase().includes(lowerQuery) ||
            flight.description.toLowerCase().includes(lowerQuery) ||
            flight.destination.toLowerCase().includes(lowerQuery) ||
            flight.tags?.some(tag => tag.includes(lowerQuery))
        )
    );
}

// Get unique destinations
export function getDestinations(): string[] {
    const destinations = FLIGHTS
        .filter(flight => flight.status === 'active')
        .map(flight => flight.destination);
    return Array.from(new Set(destinations));
}

// Get unique tour types
export function getTourTypes(): string[] {
    const types = FLIGHTS
        .filter(flight => flight.status === 'active')
        .map(flight => flight.tourType);
    return Array.from(new Set(types));
}

// ============================================
// TODO: BACKEND INTEGRATION
// ============================================

/*
// Example API integration functions:

export async function fetchFlights(): Promise<Flight[]> {
    const response = await fetch('/api/flights');
    return response.json();
}

export async function fetchFlightBySlug(slug: string): Promise<Flight> {
    const response = await fetch(`/api/flights/${slug}`);
    return response.json();
}

export async function checkAvailability(flightId: string, date: string): Promise<Availability> {
    const response = await fetch(`/api/flights/${flightId}/availability?date=${date}`);
    return response.json();
}

export async function createBooking(flightId: string, bookingData: any): Promise<any> {
    const response = await fetch(`/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ flightId, ...bookingData })
    });
    return response.json();
}
*/
