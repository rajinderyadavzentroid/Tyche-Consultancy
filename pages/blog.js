import Head from "next/head";
import Link from "next/link";
import Layout from "@/src/component/Layout";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

const blogPosts = [
    { title: "How to Build a Scalable Outbound Sales System", excerpt: "Learn the foundational elements of creating an outbound sales system that grows with your business and generates consistent results.", date: "March 15, 2026", readTime: "8 min read", category: "Sales Strategy" },
    { title: "Cold Email Strategies That Actually Work", excerpt: "Discover proven cold email templates and strategies that get responses from busy decision-makers in B2B sales.", date: "March 12, 2026", readTime: "6 min read", category: "Outbound Sales" },
    { title: "How to Generate Qualified B2B Leads", excerpt: "A comprehensive guide to identifying, targeting, and attracting high-quality leads for your B2B business.", date: "March 8, 2026", readTime: "10 min read", category: "Lead Generation" },
    { title: "SaaS Sales Funnel Optimization", excerpt: "Master the art of optimizing your SaaS sales funnel from first contact to closed deal, with data-driven tactics.", date: "March 5, 2026", readTime: "9 min read", category: "SaaS" },
    { title: "Mistakes Killing Your Sales Pipeline", excerpt: "Identify and fix the common mistakes that are preventing your sales pipeline from converting at higher rates.", date: "March 1, 2026", readTime: "7 min read", category: "Sales Process" },
    { title: "Building a High-Performance Sales Team", excerpt: "Essential strategies for recruiting, training, and managing a sales team that consistently exceeds targets.", date: "February 28, 2026", readTime: "11 min read", category: "Team Building" },
];

export default function Blog() {
    const [calendlyReady, setCalendlyReady] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.onload = () => setCalendlyReady(true);
        document.body.appendChild(script);
        return () => document.body.removeChild(script);
    }, []);

    const openCalendly = () => {
        if (calendlyReady && window.Calendly) {
            window.Calendly.initPopupWidget({ url: "https://calendly.com/shaguna_zentroid/30min" });
        }
    };

    return (
        <>
            {/* <Head>
                <title>Blog – Tyche Consultancy</title>
                <meta name="description" content="B2B Sales insights and strategies" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
            </Head> */}
            <Layout>
                <div>

                    {/* Hero Section */}
                    <section className="blog-hero-section">
                        <div className="blog-hero-content">
                            <h1 className="blog-hero-title">Insights That Drive Sales Growth</h1>
                            <p className="blog-hero-subtitle">
                                Learn proven strategies, frameworks, and insights to improve your B2B sales performance.
                            </p>
                        </div>
                    </section>

                    {/* Blog Posts Grid */}
                    <section className="blog-posts-section">
                        <Container>
                            <div className="blog-grid">
                                {blogPosts.map((post, index) => (
                                    <div key={index} className="blog-card">
                                        <div className="blog-card-header">
                                            <span className="blog-category">{post.category}</span>
                                            <h2 className="blog-card-title">{post.title}</h2>
                                        </div>
                                        <div className="blog-card-body">
                                            <p className="blog-card-excerpt">{post.excerpt}</p>
                                            <div className="blog-card-meta">
                                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg> {post.date}</span>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> {post.readTime}</span>
                                            </div>
                                            <button className="blog-read-more">Read More →</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Container>
                    </section>

                    {/* Newsletter Section */}
                    <section className="blog-newsletter-section">
                        <Container>
                            <div className="blog-newsletter-card">
                                <h2 className="blog-newsletter-title">Get Sales Tips Delivered Weekly</h2>
                                <p className="blog-newsletter-subtitle">
                                    Join 5,000+ sales professionals getting actionable insights every week.
                                </p>
                                <div className="blog-newsletter-form">
                                    <input type="email" placeholder="Enter your email" className="blog-newsletter-input" />
                                    <button className="blog-newsletter-btn">Subscribe</button>
                                </div>
                            </div>
                        </Container>
                    </section>

                    {/* CTA Section */}
                    <section className="cta-section">
                        <Container>
                            <div className="text-center">
                                <h2 className="cta-title">Want us to build your sales engine?</h2>
                                <p className="cta-subtitle">Stop reading about sales. Start implementing a system that works.</p>
                                <button className="btn-white" onClick={openCalendly} disabled={!calendlyReady}>Book a Call</button>
                            </div>
                        </Container>
                    </section>

                </div>
            </Layout>
        </>
    );
}
