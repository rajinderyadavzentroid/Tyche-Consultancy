import Link from "next/link";
import Image from "next/image";
import logo from "@/src/images/main-logo.png";
import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/src/component/UI";
import { Container } from "react-bootstrap";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact-us" },
];

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => router.pathname === path;

  const openCalendly = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/shaguna_zentroid/30min" });
    }
  };

  return (
    <header className="header">
      <Container>
        <nav className="header-nav">
          <div className="header-inner">
            <Link href="/" className="header-logo">
              <Image src={logo} alt="Tychi Corporate Solutions" />
            </Link>

            {/* Desktop Navigation */}
            <div className="header-desktop-nav">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={isActive(item.path) ? "header-nav-link active" : "header-nav-link"}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="header-cta-btn" onClick={openCalendly}>
                Book a Call
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="header-mobile-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                  className={isActive(item.path) ? "header-nav-link active" : "header-nav-link"}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                className="header-cta-btn-mobile"
                onClick={() => { setMobileMenuOpen(false); openCalendly(); }}
              >
                Book a Call
              </Button>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}
