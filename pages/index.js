import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/src/component/Layout";
import { Container } from "react-bootstrap";
import ShagunaKhetarpal from "@/src/images/shaguna-khetarpal.jpg";
import Clientsgrid from "@/src/images/tyche-clients-logo.jpg";
import { useEffect, useState } from "react";

export default function Home() {

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
        <title>Tyche Consultancy</title>
        <meta name="description" content="B2B Lead Generation & LinkedIn Marketing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </Head>
      <Layout>
        <div>

          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-bg">
              <img
                src="https://images.unsplash.com/photo-1759850426415-8888ea55b07b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMGNpdHlzY2FwZSUyMHNreXNjcmFwZXJ8ZW58MXx8fHwxNzczNzQwNTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern business background"
                className="hero-bg-img"
              />
            </div>
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1 className="hero-title">
                B2B Sales,<br />
                Making Outbound Lead Generation and LinkedIn Content Marketing Accessible
              </h1>
              <p className="hero-subtitle">
                Over the years, we have closed over $1000K+ in sales for Indian and overseas companies through LinkedIn-driven B2B outbound lead generation.
              </p>
              <Link href="/contact-us" className="hero-btn">Book a Call</Link>
            </div>
          </section>

          {/* Services Intro */}
          <section className="services-intro-section">
            <Container>
              <div className="section-center">
                <h2 className="section-title">Fast-Track Your Sales with Tyche's Expert Services</h2>
                <p className="section-subtitle">
                  At Tyche Consultancy, we're not just about sales — we're about creating meaningful relationships and long-term success. We offer a comprehensive suite of services tailored to the specific needs of each client.
                </p>
                <Link href="/contact-us" className="btn-primary">Book a Call</Link>
              </div>
            </Container>
          </section>

          {/* Core Services */}
          <section className="core-services-section">
            <Container>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M18.6666 24.5V22.1667C18.6666 20.929 18.175 19.742 17.2998 18.8668C16.4246 17.9917 15.2377 17.5 14 17.5H6.99998C5.7623 17.5 4.57532 17.9917 3.70015 18.8668C2.82498 19.742 2.33331 20.929 2.33331 22.1667V24.5" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.5 12.8333C13.0773 12.8333 15.1666 10.744 15.1666 8.16667C15.1666 5.58934 13.0773 3.5 10.5 3.5C7.92265 3.5 5.83331 5.58934 5.83331 8.16667C5.83331 10.744 7.92265 12.8333 10.5 12.8333Z" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M25.6667 24.4999V22.1666C25.6659 21.1326 25.3218 20.1282 24.6883 19.311C24.0548 18.4938 23.1678 17.9101 22.1667 17.6516" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M18.6667 3.65161C19.6705 3.90863 20.5602 4.49243 21.1956 5.31097C21.831 6.12952 22.1758 7.13625 22.1758 8.17244C22.1758 9.20864 21.831 10.2154 21.1956 11.0339C20.5602 11.8525 19.6705 12.4363 18.6667 12.6933" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 className="service-card-title">B2B Outbound Lead Generation</h2>
                  <p className="service-card-text">
                    From defining your target audience to connecting with decision-makers, the process is long and complex. At Tyche, we handle it end-to-end — generating high-intent B2B leads and actively helping you close deals.
                  </p>
                </div>
                <div className="service-card">
                  <div className="service-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M18.6666 9.33337C20.5231 9.33337 22.3036 10.0709 23.6164 11.3836C24.9291 12.6964 25.6666 14.4769 25.6666 16.3334V24.5H21V16.3334C21 15.7145 20.7541 15.121 20.3165 14.6835C19.879 14.2459 19.2855 14 18.6666 14C18.0478 14 17.4543 14.2459 17.0167 14.6835C16.5791 15.121 16.3333 15.7145 16.3333 16.3334V24.5H11.6666V16.3334C11.6666 14.4769 12.4041 12.6964 13.7169 11.3836C15.0296 10.0709 16.8101 9.33337 18.6666 9.33337Z" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.00004 10.5H2.33337V24.5H7.00004V10.5Z" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4.66671 7.00004C5.95537 7.00004 7.00004 5.95537 7.00004 4.66671C7.00004 3.37804 5.95537 2.33337 4.66671 2.33337C3.37804 2.33337 2.33337 3.37804 2.33337 4.66671C2.33337 5.95537 3.37804 7.00004 4.66671 7.00004Z" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 className="service-card-title">LinkedIn Content Marketing</h2>
                  <p className="service-card-text">
                    Whether you're a company, founder, or C-level executive, your story matters. We help you consistently showcase your journey, expertise, and services — building a strong and impactful LinkedIn presence.
                  </p>
                </div>
              </div>
            </Container>
          </section>

          {/* Founder Section */}
          <section className="founder-section">
            <Container>
              <div className="founder-grid">
                <div>
                  <Image className="founder-img" src={ShagunaKhetarpal} alt="Shaguna Khetarpal - Founder" />
                </div>
                <div>
                  <p className="founder-label">Founder – Tyche Consultancy</p>
                  <h2 className="founder-name">Shaguna Khetarpal</h2>
                  <div className="founder-bio">
                    <p>Introducing Shaguna Khetarpal, the founder of Tyche Consultancy. With a touch of caffeine and a pinch of wit, she brings a unique blend of expertise, humour, and unstoppable energy to the table.</p>
                    <p>At Tyche, we're not your typical sales team. Led by Shaguna, we combine strategy with personality — blending sharp execution, creativity, and a human touch.</p>
                    <p>Join us on this exciting journey as we help you overcome sales challenges, accelerate growth, and build a scalable revenue engine.</p>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* Clients Section */}
          <section className="clients-section">
            <Container>
              <h2 className="section-title text-center">Clients We Have Catered</h2>
              <div className="clients-grid">
                <Image src={Clientsgrid} alt="Clients we have Catered" />
              </div>
            </Container>
          </section>

          {/* Final CTA */}
          <section className="cta-section">
            <Container>
              <div className="text-center">
                <h2 className="cta-title">Ready to Scale Your B2B Sales?</h2>
                <p className="cta-subtitle">Let's build a predictable outbound engine for your business.</p>
                <button className="btn-white" onClick={openCalendly} disabled={!calendlyReady}>Book a Call</button>
              </div>
            </Container>
          </section>

        </div>
      </Layout>
    </>
  );
}
