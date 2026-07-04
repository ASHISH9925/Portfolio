import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="links mono">
        <a href="https://mail.google.com/mail/?view=cm&to=ashish992005@gmail.com" target="_blank" rel="noreferrer">email</a>
        <a href="https://github.com/ASHISH9925" target="_blank" rel="noreferrer">
          github
        </a>
        <a
          href="https://www.linkedin.com/in/ashish-sharma9925"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
      </div>
      <div className="copy mono">© {new Date().getFullYear()} ashishcodes.com</div>
    </footer>
  );
}
