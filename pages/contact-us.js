import Head from "next/head";
import Link from "next/link";
import Layout from "@/src/component/Layout";
import { Mail, Phone, Calendar } from "lucide-react";
import { Button } from "@/src/component/UI";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

export default function ContactUs() {
    const [calendlyReady, setCalendlyReady] = useState(false);

    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://assets.calendly.com/assets/external/widget.css";
        document.head.appendChild(link);

        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = () => setCalendlyReady(true);
        document.body.appendChild(script);

        return () => {
            document.head.removeChild(link);
            document.body.removeChild(script);
        };
    }, []);

    const openCalendly = () => {
        if (window.Calendly) {
            window.Calendly.initPopupWidget({ url: "https://calendly.com/shaguna-zentroid/30min" });
        } else {
            alert("Calendly is still loading, please try again.");
        }
    };

    return (
        <>
            <Head>
                <title>Contact – Tychi Corporate Solutions</title>
                <meta name="description" content="Get in touch with Tychi Corporate Solutions" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className="page-wrapper">

                    {/* Hero */}
                    <section className="about-hero-section">
                        <Container>
                            <div className="about-hero-content">
                                <h1 className="about-hero-title">Let's Build Your Team</h1>
                                <p className="about-hero-subtitle">
                                    Ready to scale your business with exceptional talent in India? We're here to make it happen.
                                </p>
                            </div>
                        </Container>
                    </section>

                    {/* Contact Methods */}
                    <section className="contact-section">
                        <Container>
                            <div className="contact-methods-grid">
                                <a className="contact-method-card" href="mailto:info@tychicorporatesolutions.com">
                                    <div className="contact-method-icon"><Mail size={24} /></div>
                                    <h3 className="contact-method-title">Email Us</h3>
                                    <p className="contact-method-value">info@tychicorporatesolutions.com</p>
                                    <p className="contact-method-desc">We'll respond within 24 hours</p>
                                </a>

                                <div className="contact-method-card" onClick={openCalendly} style={{ cursor: "pointer" }}>
                                    <div className="contact-method-icon"><Calendar size={24} /></div>
                                    <h3 className="contact-method-title">Schedule a Call</h3>
                                    <p className="contact-method-value">Book instantly</p>
                                    <p className="contact-method-desc">Choose a time that works for you</p>
                                </div>
                            </div>

                        </Container>
                    </section>

                    {/* CTA */}
                    <section className="svc-cta-section">
                        <Container>
                            <div className="svc-cta-inner">
                                <h2 className="svc-cta-title">Not Ready to Commit Yet?</h2>
                                <p className="svc-cta-subtitle">
                                    That's okay! Learn more about our services and how we can help your business grow.
                                </p>
                                <div className="hero-btn-group">
                                    <Link href="/services">
                                        <Button className="hero-btn-primary">Explore Our Services</Button>
                                    </Link>
                                    <Link href="/about">
                                        <Button className="hero-btn-outline">Learn About Us</Button>
                                    </Link>
                                </div>
                            </div>
                        </Container>
                    </section>

                </div>
            </Layout>
        </>
    );
}
