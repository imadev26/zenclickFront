'use client';

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowLeft, Search, X, ChevronRight, User } from "lucide-react";
import { getPublishedBlogs } from "@/app/data/blogs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

export default function BlogsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const hasActiveFilters = searchQuery !== "" || selectedCategory !== "All";

    // Get all published blogs
    const publishedBlogs = useMemo(() => getPublishedBlogs(), []);

    // Get unique categories
    const categories = useMemo(() => {
        const cats = publishedBlogs.map(post => post.category);
        return ["All", ...Array.from(new Set(cats))];
    }, [publishedBlogs]);

    // Filter blogs based on search and category
    const filteredBlogs = useMemo(() => {
        return publishedBlogs.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar variant="fixed" />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#C04000] to-[#D84A1B] py-20 md:py-32">
                <div className="absolute inset-0 bg-[url('/images/hero.webp')] opacity-10 bg-cover bg-center" />

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    {/* Breadcrumbs */}
                    <nav className="mb-8 flex items-center gap-2 text-sm text-white/80 overflow-x-auto scrollbar-hide" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-white transition-colors whitespace-nowrap">
                            Home
                        </Link>
                        <ChevronRight size={16} className="text-white/60 flex-shrink-0" />
                        <span className="text-white font-medium">Blog</span>
                    </nav>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Latest News & Stories
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
                            Insights, tips, and stories from the sky. Discover everything about hot air ballooning in Marrakech.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Wave Separator */}
            <div className="w-full bg-white -mt-1">
                <svg 
                    className="w-full h-16 md:h-24 block" 
                    viewBox="0 0 1440 320" 
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        fill="#ffffff" 
                        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
            </div>

            {/* Search & Filter Section */}
            <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-4 py-4 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C04000] focus:border-transparent transition-all"
                                aria-label="Search blog posts"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${selectedCategory === category
                                        ? 'bg-gradient-to-r from-[#C04000] to-[#D84A1B] text-white shadow-md'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    aria-label={`Filter by ${category}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Active Filters */}
                    {hasActiveFilters && (
                        <div className="mt-4">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-sm font-medium text-gray-700">Active filters:</span>
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="bg-[#C04000] text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-2 hover:bg-[#A03000] transition-colors"
                                    >
                                        Search: "{searchQuery.substring(0, 20)}{searchQuery.length > 20 ? '...' : ''}"
                                        <X size={14} />
                                    </button>
                                )}
                                {selectedCategory !== "All" && (
                                    <button
                                        onClick={() => setSelectedCategory("All")}
                                        className="bg-[#C04000] text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-2 hover:bg-[#A03000] transition-colors"
                                    >
                                        {selectedCategory}
                                        <X size={14} />
                                    </button>
                                )}
                                <button
                                    onClick={() => {
                                        setSearchQuery("");
                                        setSelectedCategory("All");
                                    }}
                                    className="text-sm text-gray-600 hover:text-[#C04000] underline ml-2"
                                >
                                    Clear all
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Results Count */}
                    <div className="mt-4 text-sm text-gray-600">
                        Showing <span className="font-bold text-[#C04000]">{filteredBlogs.length}</span> {filteredBlogs.length === 1 ? 'article' : 'articles'}
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-7xl">
                    {filteredBlogs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredBlogs.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                                >
                                    <Link href={`/blogs/${post.slug}`}>
                                        <div className="relative h-64 overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#C04000] uppercase tracking-wider">
                                                {post.category}
                                            </div>
                                        </div>

                                        <div className="p-8">
                                            <div className="flex items-center gap-4 text-gray-500 text-sm mb-4 flex-wrap">
                                                <div className="flex items-center gap-1.5">
                                                    <Clock size={14} />
                                                    <span>{new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                                </div>
                                                {post.author && (
                                                    <div className="flex items-center gap-1.5">
                                                        <User size={14} />
                                                        <span>{post.author?.name}</span>
                                                    </div>
                                                )}
                                                {post.readTime && (
                                                    <span className="text-[#C04000] font-medium">{post.readTime}</span>
                                                )}
                                            </div>

                                            <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#C04000] transition-colors line-clamp-2">
                                                {post.title}
                                            </h2>

                                            <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center text-[#C04000] font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
                                                Read Article <span className="ml-2">→</span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <div className="text-6xl mb-4">📝</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
                            <p className="text-gray-500 text-lg mb-6">
                                Try adjusting your search or filter to find what you're looking for.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedCategory("All");
                                }}
                                className="bg-gradient-to-r from-[#C04000] to-[#D84A1B] text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                            >
                                Clear Filters
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
