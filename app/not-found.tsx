import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-sky-50 flex flex-col items-center justify-center p-4 text-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 animate-float">
                <Image
                    src="/images/balloon-intro.png"
                    alt="Lost Hot Air Balloon"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-gray-900 mb-4">
                404
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-[#C04000] mb-6">
                Looks like you've drifted off course
            </h2>

            <p className="text-gray-600 max-w-md mb-8">
                The page you are looking for might have been moved, deleted, or possibly never existed. Let's get you back on solid ground.
            </p>

            <Link
                href="/"
                className="bg-gradient-to-r from-[#C04000] to-[#D84A1B] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
                Return to Home
            </Link>
        </main>
    );
}
