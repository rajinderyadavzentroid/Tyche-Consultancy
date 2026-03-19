import Head from "next/head";
import Link from "next/link";
import Layout from "@/src/component/Layout";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

const approach = [
    { step: "1", title: "Understand your ideal customer", description: "Deep dive into your target market and buyer personas" },
    { step: "2", title: "Build targeted outreach systems", description: "Create personalized campaigns that resonate" },
    { step: "3", title: "Create repeatable sales processes", description: "Document and optimize every step of your sales cycle" },
    { step: "4", title: "Optimize continuously", description: "Data-driven improvements for better results" },
];




const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M29.0679 13.3333C29.6768 16.3217 29.2428 19.4286 27.8384 22.1357C26.4339 24.8429 24.1437 26.9867 21.3499 28.2097C18.5561 29.4328 15.4274 29.661 12.4856 28.8565C9.54385 28.0519 6.96681 26.2632 5.18426 23.7885C3.4017 21.3139 2.52138 18.303 2.69011 15.2578C2.85883 12.2127 4.06639 9.31744 6.11142 7.05488C8.15645 4.79232 10.9153 3.29923 13.928 2.82459C16.9406 2.34995 20.0249 2.92247 22.6666 4.44665" stroke="#E54545" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 14.6666L16 18.6666L29.3333 5.33325" stroke="#E54545" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ZapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M5.33324 18.6666C5.08093 18.6674 4.83355 18.5967 4.61985 18.4625C4.40614 18.3284 4.23489 18.1364 4.12597 17.9088C4.01706 17.6812 3.97497 17.4273 4.00457 17.1768C4.03418 16.9262 4.13428 16.6892 4.29324 16.4932L17.4932 2.89323C17.5923 2.77893 17.7272 2.7017 17.8759 2.6742C18.0246 2.6467 18.1782 2.67058 18.3115 2.7419C18.4449 2.81322 18.55 2.92775 18.6097 3.0667C18.6694 3.20565 18.68 3.36076 18.6399 3.50656L16.0799 11.5332C16.0044 11.7353 15.9791 11.9526 16.006 12.1666C16.033 12.3806 16.1115 12.5848 16.2347 12.7618C16.3579 12.9388 16.5223 13.0832 16.7136 13.1828C16.9049 13.2823 17.1176 13.3339 17.3332 13.3332H26.6666C26.9189 13.3324 27.1663 13.4031 27.38 13.5373C27.5937 13.6714 27.7649 13.8634 27.8738 14.091C27.9828 14.3186 28.0249 14.5724 27.9952 14.823C27.9656 15.0736 27.8655 15.3106 27.7066 15.5066L14.5066 29.1066C14.4076 29.2208 14.2726 29.2981 14.1239 29.3256C13.9752 29.3531 13.8216 29.3292 13.6883 29.2579C13.5549 29.1866 13.4498 29.072 13.3901 28.9331C13.3305 28.7941 13.3198 28.639 13.3599 28.4932L15.9199 20.4666C15.9954 20.2645 16.0207 20.0472 15.9938 19.8332C15.9668 19.6192 15.8884 19.415 15.7651 19.238C15.6419 19.061 15.4775 18.9165 15.2862 18.817C15.0949 18.7175 14.8822 18.6659 14.6666 18.6666H5.33324Z" stroke="#E54545" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const BarChartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 26.6666V13.3333" stroke="#E54545" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 26.6666V5.33325" stroke="#E54545" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 26.6666V21.3333" stroke="#E54545" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const RepeatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M22.6667 2.66675L28.0001 8.00008L22.6667 13.3334" stroke="#E54545" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 14.6667V13.3333C4 11.9188 4.5619 10.5623 5.5621 9.5621C6.56229 8.5619 7.91885 8 9.33333 8H28" stroke="#E54545" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.33333 29.3334L4 24.0001L9.33333 18.6667" stroke="#E54545" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 17.3333V18.6666C28 20.0811 27.4381 21.4376 26.4379 22.4378C25.4377 23.438 24.0812 23.9999 22.6667 23.9999H4" stroke="#E54545" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const whyDifferent = [
    { icon: <CheckIcon />, title: "We don't just advise — we execute", description: "Unlike traditional consultants, we roll up our sleeves and build your sales engine with you." },
    { icon: <ZapIcon />, title: "End-to-end sales support", description: "From strategy to execution to optimization — we're with you every step of the way." },
    { icon: <BarChartIcon />, title: "Custom sales playbooks", description: "Tailored frameworks and systems designed specifically for your business and market." },
    { icon: <RepeatIcon />, title: "Real-time optimization", description: "Continuous testing and refinement to maximize your sales performance." },
];

export default function About() {

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
                <title>About – Tyche Consultancy</title>
                <meta name="description" content="B2B Lead Generation & LinkedIn Marketing" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
            </Head> */}
            <Layout>
                <div>

                    {/* Hero Section */}
                    <section className="about-hero-section">
                        <div className="about-hero-content">
                            <h1 className="about-hero-title">We Build Sales Engines, Not Just Strategies</h1>
                            <p className="about-hero-subtitle">
                                At Tyche Consultancy, we specialize in helping businesses unlock predictable growth through structured and scalable sales systems.
                            </p>
                        </div>
                    </section>

                    {/* Our Story */}
                    <section className="about-story-section">
                        <Container>
                            <div className="about-story-grid">
                                <div>
                                    <img
                                        src="https://images.unsplash.com/photo-1646153114001-495dfb56506d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MzYyNzExN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="Modern office workspace"
                                        className="about-story-img"
                                    />
                                </div>
                                <div>
                                    <h2 className="about-section-heading">Our Story</h2>
                                    <p className="about-text">
                                        Founded with a vision to simplify B2B sales, we work closely with founders and leadership teams to design, implement, and optimize high-performing outbound sales strategies.
                                    </p>
                                    <p className="about-text">
                                        We've seen too many companies struggle with inconsistent sales results. That's why we created a systematic approach that turns sales from a guessing game into a predictable growth engine.
                                    </p>
                                </div>
                            </div>
                        </Container>
                    </section>

                    {/* Mission */}
                    <section className="about-mission-section">
                        <Container>
                            <div className="about-mission-content">
                                <div className="about-mission-icon"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                    <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></div>
                                <h2 className="about-section-heading">Our Mission</h2>
                                <p className="about-mission-text">
                                    To help businesses build predictable, scalable, and high-performing sales engines.
                                </p>
                            </div>
                        </Container>
                    </section>

                    {/* Our Approach */}
                    <section className="about-approach-section">
                        <Container>
                            <div className="about-approach-header">
                                <div className="about-approach-icon"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                    <path d="M32.48 15.52L28.872 26.342C28.6757 26.9312 28.3448 27.4665 27.9057 27.9057C27.4665 28.3448 26.9312 28.6757 26.342 28.872L15.52 32.48L19.128 21.658C19.3244 21.0689 19.6552 20.5335 20.0944 20.0944C20.5335 19.6552 21.0689 19.3244 21.658 19.128L32.48 15.52Z" stroke="#E54545" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#E54545" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></div>
                                <h2 className="about-section-heading">Our Approach</h2>
                                <p className="about-text">A proven methodology that delivers results</p>
                            </div>
                            <div className="about-approach-grid">
                                {approach.map((item, index) => (
                                    <div key={index} className="about-approach-card">
                                        <div className="about-approach-step">{item.step}</div>
                                        <div>
                                            <h3 className="about-approach-title">{item.title}</h3>
                                            <p className="about-text">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Container>
                    </section>

                    {/* Why We're Different */}
                    <section className="about-why-section">
                        <Container>
                            <h2 className="about-section-heading text-center">Why We're Different</h2>
                            <div className="about-why-grid">
                                {whyDifferent.map((item, index) => (
                                    <div key={index} className="about-why-item">
                                        <div className="about-why-icon">{item.icon}</div>
                                        <div>
                                            <h3 className="about-approach-title">{item.title}</h3>
                                            <p className="about-text">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Container>
                    </section>

                    {/* CTA */}
                    <section className="about-cta-section">
                        <Container>
                            <div className="about-cta-content">
                                <h2 className="about-cta-title">Ready to Transform Your Sales?</h2>
                                <p className="about-cta-subtitle">Let's build a sales engine that drives predictable revenue growth.</p>
                                <button className="btn-primary" onClick={openCalendly} disabled={!calendlyReady}>Get Started Today</button>
                            </div>
                        </Container>
                    </section>

                </div>
            </Layout>
        </>
    );
}
