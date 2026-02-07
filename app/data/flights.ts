
export interface Flight {
    id: string;
    title: string;
    price: number;
    image: string;
    features: {
        icon: 'car' | 'safety' | 'clock' | 'coffee';
        title: string;
        description: string;
    }[];
}

export const FLIGHTS: Flight[] = [
    {
        id: 'royal',
        title: 'Royal Hot-Air Balloon Flight', // "in Marrakech" implied or can be added to title. Screenshot says "Royal Hot-Air Balloon Flight in Marrakech"
        price: 550,
        image: '/images/filght.png',
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
        ]
    },
    {
        id: 'private',
        title: 'Private Hot-Air Balloon Flight',
        price: 450,
        image: '/images/hotair.png',
        features: [
            {
                icon: 'car',
                title: 'Transport',
                description: 'Private round-trip transport in a luxury vehicle from your hotel or riad.'
            },
            {
                icon: 'safety',
                title: 'Safety Briefing',
                description: 'Private safety briefing by one of our most experienced pilots.'
            },
            {
                icon: 'clock',
                title: '1 Hour Flight',
                description: 'A private one-hour flight with your loved one offering breathtaking views of the Atlas Mountains, Berber villages, and the Moroccan desert.'
            },
            {
                icon: 'coffee',
                title: 'Breakfast',
                description: 'Luxury Moroccan breakfast served in a nomadic kasbah after landing, featuring refined local specialties.'
            }
        ]
    },
    {
        id: 'classic',
        title: 'Classic Hot-Air Balloon Flight',
        price: 200,
        image: '/images/ourflight.png',
        features: [
            {
                icon: 'car',
                title: 'Transport',
                description: 'Round-trip transport in a high-end vehicle from your hotel or riad.'
            },
            {
                icon: 'safety',
                title: 'Safety Briefing',
                description: 'Private safety briefing by one of our most experienced pilots.'
            },
            {
                icon: 'clock',
                title: '1 Hour Flight',
                description: 'A flight of about one hour, offering a unique perspective of Marrakech and its surroundings.'
            },
            {
                icon: 'coffee',
                title: 'Breakfast',
                description: 'Traditional Moroccan breakfast served in a nomadic kasbah after landing, featuring authentic local dishes.'
            }
        ]
    }
];
