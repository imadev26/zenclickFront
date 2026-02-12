'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Clock, User, ArrowLeft, Calendar, Share2, Facebook, Twitter } from 'lucide-react';
import { getBlogBySlug, getRelatedBlogs } from '@/app/data/blogs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: PageProps) {
    const { slug } = use(params);
    const post = getBlogBySlug(slug);

    if (!post) {
        notFound();
    }

    // Get related posts using helper function
    const relatedPosts = getRelatedBlogs(slug, 3);

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section with Featured Image */}
            <section className="relative h-[50vh] min-h-[400px] w-full">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-24 left-4 md:left-8">
                    <span className="bg-gradient-to-r from-[#C04000] to-[#D84A1B] text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                        {post.category}
                    </span>
                </div>
            </section>

            {/* Article Content */}
            <article className="container mx-auto px-4 max-w-4xl -mt-32 relative z-10 pb-20">
                {/* Breadcrumbs */}
                <nav className="mb-6 flex items-center gap-2 text-sm text-white/90" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-white transition-colors">
                        Home
                    </Link>
                    <ChevronRight size={16} className="text-white/60" />
                    <Link href="/blogs" className="hover:text-white transition-colors">
                        Blog
                    </Link>
                    <ChevronRight size={16} className="text-white/60" />
                    <span className="text-white font-medium truncate max-w-[200px]">{post.title}</span>
                </nav>

                {/* Article Header */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        {post.title}
                    </h1>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-600 text-sm md:text-base pb-6 border-b border-gray-200">
                        <div className="flex items-center gap-2">
                            <Calendar size={18} className="text-[#C04000]" />
                            <span>{new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        {post.author && (
                            <div className="flex items-center gap-2">
                                <User size={18} className="text-[#C04000]" />
                                <span>{post.author.name}</span>
                            </div>
                        )}
                        {post.readTime && (
                            <div className="flex items-center gap-2">
                                <Clock size={18} className="text-[#C04000]" />
                                <span>{post.readTime}</span>
                            </div>
                        )}
                    </div>

                    {/* Share Buttons */}
                    <div className="flex items-center gap-3 mt-6">
                        <span className="text-sm font-medium text-gray-700">Share:</span>
                        <button
                            className="p-2 rounded-full bg-gray-100 hover:bg-[#C04000] hover:text-white transition-colors"
                            aria-label="Share on Facebook"
                        >
                            <Facebook size={18} />
                        </button>
                        <button
                            className="p-2 rounded-full bg-gray-100 hover:bg-[#C04000] hover:text-white transition-colors"
                            aria-label="Share on Twitter"
                        >
                            <Twitter size={18} />
                        </button>
                        <button
                            className="p-2 rounded-full bg-gray-100 hover:bg-[#C04000] hover:text-white transition-colors"
                            aria-label="Share link"
                        >
                            <Share2 size={18} />
                        </button>
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-lg prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h1:mb-6 prose-h2:mt-8 prose-h2:mb-4 prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-4 prose-li:mb-2 prose-strong:text-gray-900 prose-strong:font-bold max-w-none mt-8">
                        {/* Full Article Content - Rendered from Markdown */}
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {post.content}
                        </ReactMarkdown>
                    </div>

                    {/* Back to Blog Link */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 text-[#C04000] hover:text-[#D84A1B] font-bold transition-colors group"
                        >
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            Back to All Articles
                        </Link>
                    </div>
                </div>

                {/* Related Articles */}
                {relatedPosts.length > 0 && (
                    <section className="mt-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedPosts.map((relatedPost) => (
                                <Link
                                    key={relatedPost.id}
                                    href={`/blogs/${relatedPost.slug}`}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                                >
                                    <div className="relative h-48">
                                        <Image
                                            src={relatedPost.image}
                                            alt={relatedPost.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <span className="text-xs font-bold text-[#C04000] uppercase tracking-wider">
                                            {relatedPost.category}
                                        </span>
                                        <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2 line-clamp-2 group-hover:text-[#C04000] transition-colors">
                                            {relatedPost.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 line-clamp-2">
                                            {relatedPost.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </article>

            <Footer />
        </main>
    );
}
