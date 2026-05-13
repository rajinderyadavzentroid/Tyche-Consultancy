import Head from "next/head";
import Layout from "@/src/component/Layout";
import { Shield, Mail } from "lucide-react";
import { Container } from "react-bootstrap";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Privacy Policy - Tychi Corporate Solutions</title>
        <meta name="description" content="Privacy Policy - Tychi Corporate Solutions values your privacy. This Privacy Policy explains how we collect, use, and protect your information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.tycheconsultancy.com/privacy-policy" />
        <meta property="og:url" content="https://www.tycheconsultancy.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy - Tychi Corporate Solutions" />
        <meta property="og:description" content="Privacy Policy - Tychi Corporate Solutions values your privacy. This Privacy Policy explains how we collect, use, and protect your information." />
        <meta property="og:image" content="https://www.tycheconsultancy.com/socials/social-icon.jpg" />
      </Head>
      <Layout>

        {/* Hero Section */}
        <section className="pp-hero-section">
          <Container>
            <div className="pp-hero-content">
              <h1 className="pp-hero-title">Privacy Policy</h1>
              <p className="pp-hero-desc">
                We value your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit{" "}
                <Link href="https://www.tycheconsultancy.com">https://www.tycheconsultancy.com</Link> or use our services.
              </p>
              <div className="pp-hero-date">Last Updated: 28th August 2025</div>
            </div>
          </Container>
        </section>

        {/* Main Content */}
        <section className="pp-main-section">
          <Container>
            <div className="pp-sections-list">

              {/* 1. Information We Collect */}
              <div className="pp-card">
                <div className="pp-card-header">
                  <h2 className="pp-card-title">1. Information We Collect</h2>
                  <div className="pp-card-title-line" />
                </div>
                <div className="pp-card-body">
                  <p className="pp-item-text">We may collect the following types of information when you use our website:</p>
                  <ul className="pp-item-list">
                    <li className="pp-item-list-item">Personal Information: Name, email address, phone number, billing details, or other information you voluntarily provide when contacting us, signing up, or making a purchase.</li>
                    <li className="pp-item-list-item">Non-Personal Information: Browser type, IP address, device information, cookies, and usage data collected automatically to improve site performance.</li>
                  </ul>
                </div>
              </div>

              {/* 2. How We Use Your Information */}
              <div className="pp-card">
                <div className="pp-card-header">
                  <h2 className="pp-card-title">2. How We Use Your Information</h2>
                  <div className="pp-card-title-line" />
                </div>
                <div className="pp-card-body">
                  <p className="pp-item-text">We may use the information collected for:</p>
                  <ul className="pp-item-list">
                    <li className="pp-item-list-item">Providing, operating, and improving our website and services.</li>
                    <li className="pp-item-list-item">Processing transactions and delivering products or services.</li>
                    <li className="pp-item-list-item">Responding to your inquiries or customer service requests.</li>
                    <li className="pp-item-list-item">Sending promotional emails, newsletters, or updates (you can opt out anytime).</li>
                    <li className="pp-item-list-item">Ensuring website security and preventing fraudulent activity.</li>
                  </ul>
                </div>
              </div>

              {/* 3. Cookies */}
              <div className="pp-card">
                <div className="pp-card-header">
                  <h2 className="pp-card-title">3. Cookies and Tracking Technologies</h2>
                  <div className="pp-card-title-line" />
                </div>
                <div className="pp-card-body">
                  <p className="pp-item-text">We use cookies and similar technologies to:</p>
                  <ul className="pp-item-list">
                    <li className="pp-item-list-item">Enhance user experience.</li>
                    <li className="pp-item-list-item">Analyze website traffic and usage trends.</li>
                    <li className="pp-item-list-item">Personalize content and ads (if applicable).</li>
                  </ul>
                  <p className="pp-item-text">You may disable cookies through your browser settings, but some website features may not function properly.</p>
                </div>
              </div>

              {/* 4. Sharing of Information */}
              <div className="pp-card">
                <div className="pp-card-header">
                  <h2 className="pp-card-title">4. Sharing of Information</h2>
                  <div className="pp-card-title-line" />
                </div>
                <div className="pp-card-body">
                  <p className="pp-item-text">We do not sell or rent your personal data. We may share your information only with:</p>
                  <ul className="pp-item-list">
                    <li className="pp-item-list-item">Trusted service providers who assist us in operating the website.</li>
                    <li className="pp-item-list-item">Legal authorities if required by law, regulation, or legal process.</li>
                    <li className="pp-item-list-item">Business transfers (e.g., merger, acquisition, or sale of assets).</li>
                  </ul>
                </div>
              </div>

              {/* 5. Data Retention */}
              <div className="pp-card">
                <div className="pp-card-header">
                  <h2 className="pp-card-title">5. Data Retention</h2>
                  <div className="pp-card-title-line" />
                </div>
                <div className="pp-card-body">
                  <p className="pp-item-text">We retain your personal information only as long as necessary to provide services or comply with legal obligations.</p>
                </div>
              </div>

              {/* 6. Your Rights */}
              <div className="pp-card">
                <div className="pp-card-header">
                  <h2 className="pp-card-title">6. Your Rights</h2>
                  <div className="pp-card-title-line" />
                </div>
                <div className="pp-card-body">
                  <p className="pp-item-text">Depending on your location, you may have rights under GDPR, CCPA, or other laws, including:</p>
                  <ul className="pp-item-list">
                    <li className="pp-item-list-item">The right to access, correct, or delete your data.</li>
                    <li className="pp-item-list-item">The right to opt out of marketing communications.</li>
                    <li className="pp-item-list-item">The right to withdraw consent at any time.</li>
                    <li className="pp-item-list-item">The right to request data portability.</li>
                  </ul>
                  <p className="pp-item-text">
                    To exercise these rights, contact us at{" "}
                    <a href="mailto:shaguna@tycheconsultancy.com">shaguna@tycheconsultancy.com</a>.
                  </p>
                </div>
              </div>

              {/* 7. Third-Party Links */}
              <div className="pp-card">
                <div className="pp-card-header">
                  <h2 className="pp-card-title">7. Third-Party Links</h2>
                  <div className="pp-card-title-line" />
                </div>
                <div className="pp-card-body">
                  <p className="pp-item-text">Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies.</p>
                </div>
              </div>

              {/* 8. Children's Privacy */}
              <div className="pp-card">
                <div className="pp-card-header">
                  <h2 className="pp-card-title">8. Children&apos;s Privacy</h2>
                  <div className="pp-card-title-line" />
                </div>
                <div className="pp-card-body">
                  <p className="pp-item-text">Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children.</p>
                </div>
              </div>

              {/* 9. Changes to This Policy */}
              <div className="pp-card">
                <div className="pp-card-header">
                  <h2 className="pp-card-title">9. Changes to This Policy</h2>
                  <div className="pp-card-title-line" />
                </div>
                <div className="pp-card-body">
                  <p className="pp-item-text">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of our website constitutes acceptance of the revised policy.</p>
                </div>
              </div>

              {/* 10. Contact Us */}
              <div className="pp-card pp-contact-card">
                <div className="pp-card-header">
                  <h2 className="pp-card-title">10. Contact Us</h2>
                  <div className="pp-card-title-line" />
                </div>
                <div className="pp-card-body">
                  <p className="pp-item-text">If you have any questions about this Privacy Policy, please contact us:</p>
                  <div className="pp-contact-info">
                    <div className="pp-contact-item">
                      <Mail size={18} />
                      <a href="mailto:shaguna@tycheconsultancy.com">shaguna@tycheconsultancy.com</a>
                    </div>
                    <div className="pp-contact-item">
                      <span>Tychi Corporate Solutions</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </section>

      </Layout>
    </>
  );
}
