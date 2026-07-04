import { useEffect, useRef, useState } from "react";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#01";

export default function useDecrypt(text, active, duration = 900) {
  const [display, setDisplay] = useState(text.replace(/[^\s]/g, " "));
  const frameRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setDisplay(text);
      return;
    }

    const start = performance.now();
    const len = text.length;

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const revealCount = Math.floor(t * len);
      let out = "";
      for (let i = 0; i < len; i++) {
        if (text[i] === " ") {
          out += " ";
        } else if (i < revealCount) {
          out += text[i];
        } else {
          out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }
      setDisplay(out);
      if (t < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [active, text, duration]);

  return display;
}
