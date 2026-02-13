import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Sky Experience Marrakech',
        short_name: 'Sky Experience',
        description: 'Unforgettable hot air balloon flights in Marrakech.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#C04000',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
