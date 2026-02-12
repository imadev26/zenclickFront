'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { BLOG_POSTS } from "@/app/data/blogs";

export default function BlogSection() {
    // Show only 3 most recent blog posts on home page
    const posts = BLOG_POSTS.slice(0, 3);

    return (
        <section className="py-24 bg-[#FDFBF7]">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-4 font-serif">Latest News</h2>
                    <p className="text-gray-600 text-lg md:text-xl font-light">
                        Insights, tips, and stories from the sky
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Link
                                href={`/blogs/${post.slug}`}
                                className="block group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-orange-600 uppercase tracking-wider">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="p-8">
                                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                                        <Clock size={14} />
                                        <span>{new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center text-sky-900 font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
                                        Read Article <span className="ml-2">→</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-12">
                    <a
                        href="/blogs"
                        className="inline-block bg-gradient-to-r from-[#C04000] to-[#D84A1B] hover:from-[#A03000] hover:to-[#C04000] text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all transform hover:scale-105 focus-visible:ring-4 focus-visible:ring-[#C04000]/50"
                        aria-label="View all blog posts"
                    >
                        View More Articles
                    </a>
                </div>
            </div>
        </section>
    );
}
