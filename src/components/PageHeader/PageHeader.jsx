import useReveal from "../../hooks/useReveal";
import useDecrypt from "../../hooks/useDecrypt";
import "./PageHeader.css";

export default function PageHeader({ eyebrow, title, blurb }) {
  const [ref, visible] = useReveal();
  const decryptedTitle = useDecrypt(title, visible, 800);

  return (
    <div
      ref={ref}
      className={`page-header reveal ${visible ? "reveal-visible" : ""}`}
    >
      <div className="eyebrow mono">{eyebrow}</div>
      <h2>{decryptedTitle}</h2>
      {blurb && <p>{blurb}</p>}
    </div>
  );
}
