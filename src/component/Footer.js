import Link from "next/link";
import Image from "next/image"
import { Container } from "react-bootstrap";
import logo from "@/src/images/main-logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <h3 className="footer-brand">
                <Image src={logo} alt="Tyche Consultancy" />
              </h3>
              <p className="footer-desc">
                Making B2B outbound lead generation and LinkedIn content marketing accessible.
              </p>
            </div>
            <div>
              <h4 className="footer-heading">Quick Links</h4>
              <div className="footer-links">
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path} className="footer-link">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="footer-heading">Contact</h4>
              <div className="footer-links">
                <a href="mailto:hello@tycheconsultancy.com" className="footer-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 2.66675H2.66671C1.93033 2.66675 1.33337 3.2637 1.33337 4.00008V12.0001C1.33337 12.7365 1.93033 13.3334 2.66671 13.3334H13.3334C14.0698 13.3334 14.6667 12.7365 14.6667 12.0001V4.00008C14.6667 3.2637 14.0698 2.66675 13.3334 2.66675Z" stroke="#99A1AF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.6667 4.66675L8.68671 8.46675C8.48089 8.5957 8.24292 8.66409 8.00004 8.66409C7.75716 8.66409 7.51919 8.5957 7.31337 8.46675L1.33337 4.66675" stroke="#99A1AF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                  </svg> hello@tycheconsultancy.com
                </a>
              </div>
            </div>
            <div>
              <h4 className="footer-heading">Follow Us</h4>
              <div className="footer-social">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#99A1AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 9H2V21H6V9Z" stroke="#99A1AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#99A1AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="mb-0">&copy; 2026 Tyche Consultancy. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
