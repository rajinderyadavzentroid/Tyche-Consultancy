import Head from "next/head";
import Link from "next/link";
import Layout from "@/src/component/Layout";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2v4"></path>
        <path d="M16 2v4"></path>
        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
        <path d="M3 10h18"></path>
    </svg>
);

const contactMethods = [
    {
        icon: <MailIcon />,
        title: "Email Us",
        value: "hello@tycheconsultancy.com",
        description: "We'll respond within 24 hours",
        link: "mailto:hello@tycheconsultancy.com",
    },
    {
        icon: <PhoneIcon />,
        title: "Call Us",
        value: "+1 (555) 123-4567",
        description: "Mon-Fri 9am-6pm EST",
        link: "tel:+15551234567",
    },
    {
        icon: <CalendarIcon />,
        title: "Schedule a Call",
        value: "Book instantly",
        description: "Choose a time that works for you",
        link: "https://calendly.com/shaguna_zentroid/30min",
    },
];
export default function ContactUs() {
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

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <Head>
                <title>Contact – Tyche Consultancy</title>
                <meta name="description" content="Get in touch with Tyche Consultancy" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
            </Head>
            <Layout>
                <div>

                    {/* Hero Section */}
                    <section className="contact-hero-section">
                        <div className="contact-hero-content">
                            <h1 className="contact-hero-title">Let's Build Your Sales Engine</h1>
                            <p className="contact-hero-subtitle">
                                Have questions or want to scale your sales? We're here to help.
                            </p>
                        </div>
                    </section>

                    {/* Contact Methods */}
                    <section className="contact-methods-section">
                        <Container>
                            {/* <div className="contact-methods-grid">
                                {contactMethods.map((method, index) => (
                                    <div key={index} className="contact-method-card">
                                        <div className="contact-method-icon">{method.icon}</div>
                                        <h3 className="contact-method-title">{method.title}</h3>
                                        <p className="contact-method-value">{method.value}</p>
                                        <p className="contact-method-desc">{method.description}</p>
                                    </div>
                                ))}
                            </div> */}
                            <div className="contact-methods-grid">
                                {contactMethods.map((method, index) => (
                                    <a
                                        key={index}
                                        className="contact-method-card"
                                        onClick={method.title === "Schedule a Call" ? openCalendly : () => window.open(method.link, "_blank")}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <div className="contact-method-icon">{method.icon}</div>
                                        <h3 className="contact-method-title">{method.title}</h3>
                                        <p className="contact-method-value">{method.value}</p>
                                        <p className="contact-method-desc">{method.description}</p>
                                    </a>
                                ))}
                            </div>
                        </Container>
                    </section>

                    {/* CTA Section */}
                    <section className="cta-section">
                        <Container>
                            <div className="text-center">
                                <h2 className="cta-title">Prefer a quick chat?</h2>
                                <p className="cta-subtitle">
                                    Schedule a 30-minute strategy call to discuss your sales goals and how we can help you achieve them.
                                </p>
                                <button className="btn-white" onClick={openCalendly} disabled={!calendlyReady}>Schedule a Strategy Call</button>
                            </div>
                        </Container>
                    </section>

                </div>
            </Layout>
        </>
    );
}
