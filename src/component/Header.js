import Link from "next/link";
import Image from "next/image";
import logo from "@/src/images/main-logo.png";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact-us" },
];

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calendlyReady, setCalendlyReady] = useState(false);

  const isActive = (path) => router.pathname === path;

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
    <header className="header">
      <Container>
        <nav className="header-nav">
          <div className="header-inner">
            <Link href="/" className="header-logo">
              <Image src={logo} alt="Tyche Consultancy" />
            </Link>

            {/* Desktop Navigation */}
            <div className="header-desktop-nav">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={isActive(item.path) ? "header-nav-link-active" : "header-nav-link"}
                >
                  {item.label}
                </Link>
              ))}
              <button className="header-book-btn" onClick={openCalendly} disabled={!calendlyReady}>
                Book a Call
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="header-mobile-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                // ❌ CLOSE ICON
                <svg viewBox="0 0 329 329" width="24" height="24">
                  <path
                    d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.266 21.266 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.273 21.273 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                // ☰ MENU ICON
                <svg viewBox="0 0 464.205 464.205" width="24" height="24">
                  <path
                    d="M435.192 406.18H29.013C12.989 406.18 0 393.19 0 377.167s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.99 29.013 29.013-.001 16.023-12.99 29.013-29.014 29.013zM435.192 261.115H29.013C12.989 261.115 0 248.126 0 232.103s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.012-29.014 29.012zM435.192 116.051H29.013C12.989 116.051 0 103.062 0 87.038s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.013-29.014 29.013z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="header-mobile-nav">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={isActive(item.path) ? "header-nav-link-active" : "header-nav-link"}
                >
                  {item.label}
                </Link>
              ))}
              <button
                className="header-book-btn-mobile"
                onClick={() => { setMobileMenuOpen(false); openCalendly(); }}
                disabled={!calendlyReady}
              >
                Book a Call
              </button>
            </div>
          )}
        </nav>
      </Container>
    </header >
  );
}
