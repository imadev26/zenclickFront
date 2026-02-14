import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getFlightById, getPopularFlights } from '@/app/data/flights';
import FlightDetailClient from '@/components/FlightDetailClient';

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const flight = getFlightById(id);

    if (!flight) {
        return {
            title: 'Flight Not Found',
        };
    }

    return {
        title: `${flight.title} | Sky Experience Marrakech`,
        description: flight.metaDescription || flight.description.substring(0, 155),
        openGraph: {
            title: flight.title,
            description: flight.metaDescription || flight.description.substring(0, 155),
            images: [
                {
                    url: flight.image,
                    width: 1200,
                    height: 630,
                    alt: flight.title,
                },
            ],
        },
    };
}

export default async function FlightDetailPage({ params }: PageProps) {
    const { id } = await params;
    const flight = getFlightById(id);

    if (!flight) {
        notFound();
    }

    // Dynamic suggestions - Get popular flights excluding current one
    const suggestions = getPopularFlights()
        .filter(f => f.id !== flight.id)
        .slice(0, 2);

    return <FlightDetailClient flight={flight} suggestions={suggestions} />;
}
