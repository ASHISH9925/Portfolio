import PageHeader from "../../components/PageHeader/PageHeader";
import Reveal from "../../components/Reveal/Reveal";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="// 05 — contact"
        title="Get in touch"
        blurb="Open to internships, collaborations, and interesting security or AI problems."
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
          <a href="tel:+917972194793">+91 7972194793</a>
        </div>
        <p className="contact-note">
          Usually replies within a day or two. Based in Pune, open to
          remote work.
        </p>
      </Reveal>
    </>
  );
}
