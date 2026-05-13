import Head from "next/head";
import Link from "next/link";
import Layout from "@/src/component/Layout";
import Image from "next/image";
import { CheckCircle, Target, Eye, ArrowRight } from "lucide-react";
import ImageWithFallback from "@/src/component/ImageWithFallback";
import { Button } from "@/src/component/UI";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AboutImage from "@/src/images/about-image.jpg";


const approaches = [
    {
        icon: <CheckCircle size={32} />,
        title: "Carefully Curated",
        description: "We rigorously vet every candidate to ensure they meet your exact requirements and company culture."
    },
    {
        icon: <CheckCircle size={32} />,
        title: "Fully Supported",
        description: "From onboarding to ongoing operations, we provide complete support at every stage of your journey."
    },
    {
        icon: <CheckCircle size={32} />,
        title: "Seamless Integration",
        description: "Your remote team integrates smoothly with your existing operations, feeling like a natural extension of your business."
    }
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
            <Head>
                <title>About – Tychi Corporate Solutions</title>
                <meta name="description" content="Your trusted partner for building exceptional remote teams in India." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className="page-wrapper">

                    {/* Hero Section */}
                    <section className="about-hero-section">
                        <Container>
                            <div className="about-hero-content">
                                <h1 className="about-hero-title">About Us</h1>
                            </div>
                        </Container>
                    </section>

                    {/* Company Overview */}
                    <section className="about-overview-section">
                        <Container>
                            <div className="about-overview-grid">
                                <div>
                                    <Image src={AboutImage} alt="tychi clients logo" className="about-img" />
                                </div>
                                <div>
                                    <h2 className="about-title">Who We Are</h2>
                                    <div className="about-overview-text">
                                        <p className="">
                                            Tychi Corporate Solutions is a strategic partner for global companies looking to build and scale teams in India.
                                        </p>
                                        <p className="">We go beyond recruitment offering a fully managed ecosystem that includes hiring, infrastructure, and operational support. Our goal is simple: to remove complexity and deliver a seamless expansion experience.
                                        </p> </div>
                                </div>
                            </div>
                        </Container>
                    </section>

                    {/* Mission & Vision */}
                    <section className="about-mv-section">
                        <Container>
                            <div className="about-mv-grid">
                                <div className="about-mv-card">
                                    <div className="service-icon-wrap">
                                        <Target size={32} />
                                    </div>
                                    <h3 className="about-mv-title">Our Mission
                                    </h3>
                                    <p className="about-mv-text">
                                        To make global team building effortless by connecting businesses with exceptional talent in India without operational barriers.
                                    </p>
                                </div>
                                <div className="about-mv-card">
                                    <div className="service-icon-wrap">
                                        <Eye size={32} />
                                    </div>
                                    <h3 className="about-mv-title">Our Vision</h3>
                                    <p className="about-mv-text">
                                        To become the most trusted partner for companies building high-performance teams across borders.
                                    </p>
                                </div>
                            </div>
                        </Container>
                    </section>

                    {/* Our Approach */}
                    <section className="services-section">
                        <Container>
                            <div className="section-inner">
                                <div className="section-center">
                                    <h2 className="services-title">Our Approach</h2>
                                    <p className="services-subtitle">
                                        We combine deep local expertise with global business standards to deliver a premium, reliable, and scalable solution.
                                    </p>
                                </div>
                                <div className="about-approach-grid">
                                    {approaches.map((approach, index) => (
                                        <div key={index} className="about-approach-card">
                                            <div className="service-icon-wrap">{approach.icon}</div>
                                            <h3 className="service-card-title">{approach.title}</h3>
                                            <p className="service-card-text">{approach.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Container>
                    </section>


                    {/* CTA Section */}
                    <section className="cta-section">
                        <div className="cta-content">
                            <h2 className="cta-title">Ready to Get Started?</h2>
                            <p className="cta-subtitle">
                                Let's discuss how Tychi Corporate Solutions can help you build your dream team in India.
                            </p>
                            <Link href="/contact-us">
                                <Button size="lg" className="cta-btn">Get in Touch</Button>
                            </Link>
                        </div>
                    </section>

                </div>
            </Layout>
        </>
    );
}
