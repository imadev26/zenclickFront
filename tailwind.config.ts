import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                sky: {
                    900: '#1E3A8A', // Custom blue
                    50: '#f0f9ff',
                },
                orange: {
                    500: '#F97316', // Custom orange
                    600: '#EA580C',
                }
            },
            fontFamily: {
                sans: ['var(--font-montserrat)', 'sans-serif'],
            },
        },
    },
    plugins: [],
} satisfies Config;
