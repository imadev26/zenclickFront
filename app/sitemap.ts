import { MetadataRoute } from 'next';
import { getActiveFlights } from './data/flights';
import { getPublishedBlogs } from './data/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://skyexperience.com';

    // Static routes
    const routes = [
        '',
        '/about',
        '/flights',
        '/blogs',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Flight routes
    const flights = getActiveFlights().map((flight) => ({
        url: `${baseUrl}/flights/${flight.id}`,
        lastModified: new Date(flight.updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Dynamic Blog routes
    const blogs = getPublishedBlogs().map((post) => ({
        url: `${baseUrl}/blogs/${post.slug}`,
        lastModified: new Date(post.updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...routes, ...flights, ...blogs];
}
