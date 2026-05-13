import Head from "next/head";
import Link from "next/link";
import Layout from "@/src/component/Layout";
import { Users, Building, Settings, DollarSign, Headphones, ArrowRight, MessageSquare, Search, Wifi, ShieldCheck, UserCheck } from "lucide-react";
import { Button } from "@/src/component/UI";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const serviceData = [
    {
        title: "Talent Acquisition",
        description: "We identify, vet, and hire top-tier professionals across roles, including:",
        details: [
            "Graphic Designers",
            "Software Engineers",
            "Project Managers",
            "Marketing & Operations Professionals",
        ]
    },
    {
        title: "Dedicated Team Setup",
        description: "We build teams tailored to your business needs, ensuring:",
        details: [
            "Cultural alignment",
            "Skill precision",
            "Long-term scalability",
        ]
    },
    {
        title: "Infrastructure & Office Space",
        description: "Your team operates from fully equipped, professional workspaces with:",
        details: [
            "Modern office environments",
            "Reliable IT infrastructure",
            "Secure and productive setups",
        ]
    },
    {
        title: " HR & Payroll Management",
        description: "We manage the complete employee lifecycle:",
        details: [
            "Payroll processing",
            "Compliance and legal requirements",
            "Attendance and performance support",
        ]
    },
    {
        title: "End-to-End Operational Support",
        description: "From onboarding to daily administration, we handle:",
        details: [
            "Employee management",
            "Administrative operations",
            "Ongoing support and coordination",
        ]
    }
];

const serviceIcons = [
    <Users size={40} />,
    <Building size={40} />,
    <Settings size={40} />,
    <DollarSign size={40} />,
    <Headphones size={40} />
];

const processData = [
    { title: "Consult", description: "We understand your business needs, goals, and team requirements in detail." },
    { title: "Hire", description: "We source, vet, and onboard the perfect talent that matches your culture." },
    { title: "Setup", description: "We establish complete infrastructure, systems, and operational processes." },
    { title: "Operate", description: "We manage day-to-day operations, HR, payroll, and compliance seamlessly." },
    { title: "Scale", description: "We help you grow your team efficiently as your business expands globally." }
];

const processIcons = [
    <MessageSquare size={32} />,
    <Search size={32} />,
    <Wifi size={32} />,
    <ShieldCheck size={32} />,
    <UserCheck size={32} />
];

export default function Services() {
    const [calendlyReady, setCalendlyReady] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.onload = () => setCalendlyReady(true);
        document.body.appendChild(script);
        return () => document.body.removeChild(script);
    }, []);

    return (
        <>
            <Head>
                <title>Services – Tychi Corporate Solutions</title>
                <meta name="description" content="Comprehensive solutions to build, manage, and scale your remote team in India." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className="page-wrapper">

                    {/* Hero */}
                    <section className="about-hero-section">
                        <Container>
                            <div className="about-hero-content">
                                <h1 className="about-hero-title">Our Services</h1>
                            </div>
                        </Container>
                    </section>

                    {/* Service Blocks */}
                    <section className="services-blocks-section">
                        <Container>
                            <div className="section-inner">
                                <div className="services-blocks-list">
                                    {serviceData.map((service, index) => (
                                        <div key={index} className={index % 2 === 1 ? "svc-block svc-block-reverse" : "svc-block"}>
                                            <div className="svc-block-left">
                                                <div className="svc-block-icon">{serviceIcons[index]}</div>
                                                <h3 className="svc-block-title">{service.title}</h3>
                                                {/* <p className="svc-block-desc">{service.description}</p> */}
                                            </div>
                                            <div className="svc-block-right">
                                                <h4 className="svc-block-included">{service.description}</h4>
                                                <ul className="svc-block-list">
                                                    {service.details.map((detail, idx) => (
                                                        <li key={idx} className="svc-block-item">
                                                            <div className="svc-block-bullet">
                                                                <ArrowRight size={16} />
                                                            </div>
                                                            <span>{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Container>
                    </section>

                    {/* Process Section */}
                    <section className="steps-section">
                        <Container>
                            <div className="section-inner">
                                <div className="section-center">
                                    <h2 className="steps-title">Our Process</h2>
                                    <p className="steps-subtitle">
                                        A seamless journey designed for efficiency and growth.
                                    </p>
                                </div>
                                <div className="svc-process-grid">
                                    {processData.map((step, index) => (
                                        <div key={index} className="step-item">
                                            <div className="svc-process-card">
                                                <div className="service-icon-wrap" style={{ margin: "0 auto 1rem" }}>
                                                    {processIcons[index]}
                                                </div>
                                                <h3 className="svc-process-title">{step.title}</h3>
                                                <p className="step-text">{step.description}</p>
                                            </div>
                                            {index < processData.length - 1 && (
                                                <div className="step-arrow-wrap">
                                                    <ArrowRight size={24} />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Container>
                    </section>

                    {/* CTA */}
                    <section className="svc-cta-section">
                        <Container>
                            <div className="svc-cta-inner">
                                <h2 className="svc-cta-title">Ready to Build Your Team?</h2>
                                <p className="svc-cta-subtitle">
                                    Let's discuss which services best fit your needs and create a custom solution for your business.
                                </p>
                                <div className="hero-btn-group">
                                    <Link href="/contact-us">
                                        <Button className="hero-btn-primary">Get Started Today</Button>
                                    </Link>
                                    <Link href="/about">
                                        <Button className="hero-btn-outline">Learn More About Us</Button>
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
