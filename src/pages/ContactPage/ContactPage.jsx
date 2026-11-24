import { useState, useEffect } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import Reveal from "../../components/Reveal/Reveal";
import "./ContactPage.css";

export default function ContactPage() {
  const [ascii, setAscii] = useState("");

  useEffect(() => {
    fetch("/ascii-art.txt")
      .then((res) => res.text())
      .then((text) => setAscii(text))
      .catch((err) => console.error("Error loading ASCII art:", err));
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-center">
        <div className="contact-left">
          <PageHeader
            eyebrow="// 05 — contact"
            title="Get in touch"
            blurb="Open to full-time roles, collaborations, and interesting security or AI problems."
          />
          <Reveal as="div" className="contact-content">
            <a className="contact-primary mono" href="https://mail.google.com/mail/?view=cm&to=ashish992005@gmail.com" target="_blank" rel="noreferrer">
              ashish992005@gmail.com
            </a>
            <div className="contact-links">
              <a href="https://github.com/ASHISH9925" target="_blank" rel="noreferrer">
                github ↗
              </a>
              <a
                href="https://www.linkedin.com/in/ashish-sharma9925"
                target="_blank"
                rel="noreferrer"
              >
                linkedin ↗
              </a>
              <a href="/Ashish Resume.pdf" target="_blank" rel="noreferrer">
                resume ↗
              </a>
              <a href="tel:+917972194793">+91 7972194793</a>
            </div>
            <p className="contact-note">
              Usually replies within a day or two. Based in Pune, open to
              remote work.
            </p>
          </Reveal>
        </div>
        {ascii && (
          <div className="contact-ascii-container">
            <pre className="contact-ascii">{ascii}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
