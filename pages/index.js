import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/src/component/Layout";
import Tycheclientslogo from "@/src/images/tyche-clients-logo.jpg";
import AboutImage from "@/src/images/about-image.jpg";
import OfficeImage from "@/src/images/office-image.png";
import ShagunaPhoto from "@/src/images/shaguna-khetarpal.jpg";
import Chris from "@/src/images/Chris-img.png";
import Thorsten from "@/src/images/Thorsten-img.png";
import Moussa from "@/src/images/Moussa-img.png";
import { Users, Building, Settings, DollarSign, Headphones, ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ImageWithFallback from "@/src/component/ImageWithFallback";
import { Button, Card, CardContent } from "@/src/component/UI";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  { icon: <Users size={32} />, title: "Talent Acquisition", description: "Handpicked professionals tailored to your needs" },
  { icon: <Building size={32} />, title: "Dedicated Teams", description: "Fully aligned with your business goals" },
  { icon: <Settings size={32} />, title: "Office Infrastructure", description: "Modern, fully equipped workspaces" },
  { icon: <DollarSign size={32} />, title: "HR & Payroll", description: "Complete employee lifecycle management" },
  { icon: <Headphones size={32} />, title: "Operational Support", description: "We handle the backend, you lead the growth" },
];

const steps = [
  { number: "01", title: "Share Requirements", description: "Define the roles and skills you need" },
  { number: "02", title: "We Build Your Team", description: "We source, vet, and hire exceptional talent" },
  { number: "03", title: "We Set Up Everything", description: "Office, HR, and operations handled seamlessly" },
  { number: "04", title: "You Scale with Confidence", description: "Manage your team while we take care of the rest" },
];

const benefits = [
  "No legal entity required in India",
  "Faster, premium-quality hiring",
  "Plug-and-play infrastructure",
  "Fully managed operations",
  "Scalable and cost-efficient solutions",
];

const testimonials = [
  {
    name: "Moussa",
    role: "Founder, LeadRealizer, Germany",
    photo: Moussa,
    text: "I'll be honest, the biggest surprise was the quality. Other companies are afraid the results won't be good, but don't be afraid, you get better people maybe than in Germany. I wanted people who think for themselves, who are creative, who come with a strategy, not just people who do a task and stop. That is exactly what we got, speed and quality both. Here in India, you feel the energy. People want to grow, personally and with the company, and that makes all the difference. One word: Familia.",
  },
  {
    name: "Thorsten",
    role: "Founder, Sales Realizer, Germany",
    photo: Thorsten,
    text: "Overall, the experience was kind of surprising because we had tested body leasing a few years ago and the results were okay, so we knew what we could get, but the results we were getting here were, much better. Without this partnership, we would have zero marketing. Our hire, Gunjan, took over the entire function, something we never had time to build ourselves. That is a huge plus for us. You can save quite a lot of money and get good results.  One word for the partnership: friendship.",
  },
  {
    name: "Chris",
    role: "Founder, Rank Realizer / Zenroid, Germany",
    photo: Chris,
    text: "We gave Tychi team three 3D models to build, for free, as a test. One short call, we handed over the CAD files, and the quality impressed us immediately, though it was the cost that turned out to be the real game changer. We have fully outsourced our 3D modelling to India, while our German team focuses on QA and client communication. Our output has more than doubled, and when deadlines are tight, everyone jumps in, this kind of hunger and fire is honestly missing in Western Europe. One word for the partnership: profit.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Home | Tychi Corporate Solutions</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.tycheconsultancy.com" />
        <meta property="og:url" content="https://www.tycheconsultancy.com" />
        <meta property="og:title" content="Home | Tychi Corporate Solutions" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="https://www.tycheconsultancy.com/socials/social-icon.jpg" />
      </Head>

      <Layout>
        <div className="page-wrapper">

          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-bg-overlay">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1681321570365-df53da7dbaa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBuZXR3b3JrJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ1MDIzMDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Global network"
                className="hero-bg-img"
              />
            </div>
            <Container>
              <div className="hero-content">
                <div className="hero-badge">Build Elite Teams. Effortlessly.</div>
                <h1 className="hero-title">
                  Build Your Dream Team in India:<br />
                  <span className="hero-title-accent">Without the Complexity</span>
                </h1>

                <p className="hero-subtitle">
                  Tychi Corporate Solutions enables global businesses to scale with exceptional talent, world-class infrastructure, and seamless operational support so you can focus entirely on growth.
                </p>
                <div className="hero-btn-group">
                  <Link href="/contact-us">
                    <Button size="lg" className="hero-btn-primary">Build Your Team</Button>
                  </Link>
                  <Link href="/contact-us">
                    <Button size="lg" variant="outline" className="hero-btn-outline">Schedule a Consultation</Button>
                  </Link>
                </div>
              </div>
            </Container>
          </section>

          {/* About Section */}
          <section className="about-section">
            <Container>
              <div className="about-grid">
                <div>
                  <Image src={AboutImage} alt="About Tychi" className="about-img" />
                </div>
                <div>
                  <h2 className="about-title">About Us</h2>
                  <p className="about-text">
                    At Tychi Corporate Solutions, we help ambitious companies expand into India without the burden of setting up operations. From hiring top-tier talent to managing infrastructure and compliance, we deliver a seamless, end-to-end experience.
                  </p>
                  <Link href="/about">
                    <Button className="about-btn">
                      Learn More About Us
                      <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
                    </Button>
                  </Link>
                </div>
              </div>
            </Container>
          </section>

          {/* Services Section */}
          <section className="services-section">
            <Container>
              <div className="section-inner">
                <div className="section-center">
                  <h2 className="services-title">What We Offer</h2>
                  <p className="services-subtitle">End-to-End Team Building Solutions</p>
                </div>
                <div className="services-grid">
                  {services.map((service, index) => (
                    <Card key={index} className="service-card">
                      <CardContent className="service-card-body">
                        <div className="service-icon-wrap">{service.icon}</div>
                        <h3 className="service-card-title">{service.title}</h3>
                        <p className="service-card-text">{service.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          {/* How It Works */}
          <section className="steps-section">
            <Container>
              <div className="section-inner">
                <div className="section-center">
                  <h2 className="steps-title">How It Works</h2>
                  <p className="steps-subtitle">Four simple steps to building your dream team in India.</p>
                </div>
                <div className="steps-grid">
                  {steps.map((step, index) => (
                    <div key={index} className="step-item">
                      <div className="step-card">
                        <div className="step-number">{step.number}</div>
                        <h3 className="step-title">{step.title}</h3>
                        <p className="step-text">{step.description}</p>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="step-arrow-wrap">
                          <ArrowRight size={32} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          {/* Why Choose Us */}
          <section className="why-section">
            <Container>
              <div className="section-inner">
                <div className="why-grid">
                  <div>
                    <h2 className="why-title">Why Choose Us</h2>
                    <p className="why-text">
                      We remove every barrier between you and building a world-class team in India. No legal complexities, no operational headaches — just results.
                    </p>
                    <div className="why-benefits-list">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="why-benefit-item">
                          <div className="why-benefit-icon">
                            <CheckCircle size={20} />
                          </div>
                          <p className="why-benefit-text">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Image src={OfficeImage} alt="Tychi office" className="about-img" />
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* Testimonials */}
          <section className="testimonials-section">
            <Container>
              <div className="section-inner">
                <div className="section-center">
                  <h2 className="testimonials-title">Read Our Reviews</h2>
                  <p className="testimonials-subtitle">What our clients say</p>
                </div>
                <div className="testimonials-slider-wrap">
                  <button className="t-nav t-nav-prev" id="t-prev"><ChevronLeft size={22} /></button>
                  <button className="t-nav t-nav-next" id="t-next"><ChevronRight size={22} /></button>
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{ prevEl: "#t-prev", nextEl: "#t-next" }}
                    pagination={{ clickable: true, el: ".t-pagination" }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                    }}
                  >
                    {testimonials.map((t, index) => (
                      <SwiperSlide key={index}>
                        <div className="testimonial-card">
                          <div className="testimonial-quote-icon"><Quote size={28} /></div>
                          <p className="testimonial-text">{t.text}</p>
                          <div className="testimonial-author">
                            {t.photo ? (
                              <Image src={t.photo} alt={t.name} className="testimonial-photo" width={56} height={56} />
                            ) : (
                              <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                            )}
                            <div>
                              <p className="testimonial-name">{t.name}</p>
                              <p className="testimonial-role">{t.role}</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="t-pagination"></div>
                </div>
              </div>
            </Container>
          </section>

          {/* Client Logos */}
          <section className="clients-section">
            <Container>
              <div className="section-inner-sm">
                <p className="clients-label">Trusted by Global Companies</p>
                <div className="clients-grid">
                  <Image src={Tycheclientslogo} alt="Tychi clients logo" />
                </div>
              </div>
            </Container>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <div className="cta-bg-overlay">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1681321570365-df53da7dbaa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBuZXR3b3JrJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ1MDIzMDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Background"
                className="cta-bg-img"
              />
            </div>
            <div className="cta-content">
              <h2 className="cta-title">
                Your Global Expansion,<br />
                <span className="cta-title-accent">Simplified</span>
              </h2>
              <p className="cta-subtitle">
                Build and manage your India team with confidence while we handle everything behind the scenes.
              </p>
              <Link href="/contact-us">
                <Button size="lg" className="cta-btn">Get Started Today</Button>
              </Link>
            </div>
          </section>

        </div>
      </Layout>
    </>
  );
}
