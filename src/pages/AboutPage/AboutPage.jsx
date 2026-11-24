import { useState, useEffect } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import Reveal from "../../components/Reveal/Reveal";
import SplineScene from "../../components/SplineScene/SplineScene";
import "./AboutPage.css";

export default function AboutPage() {
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth > 860);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 861px)");
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <>
      <PageHeader eyebrow="// 04 — about" title="About" />
      <div className="about-layout">
        <Reveal as="div" className="about-content">
          <p>
            I'm Ashish, a Computer Science student specializing in Cyber
            Security & Digital Forensics at MIT-WPU. I'm passionate about
            building scalable backend systems, cloud infrastructure, and
            security-focused applications that solve real-world problems.
          </p>
          <p>
            I recently completed a 20-week internship (Jun–Oct 2026) as an
            Infrastructure Software Development Engineering Intern at Northern
            Trust, where I developed observability dashboards, automated
            operational workflows, and improved monitoring for enterprise-scale
            platforms. The experience deepened my understanding of distributed
            systems, reliability engineering, and production software.
          </p>
          <p>
            Beyond my internship experience, I enjoy building full-stack and cybersecurity
            projects, participating in hackathons, and continuously improving
            my problem-solving skills. I believe the best engineers understand
            not only how to build systems, but also how they fail—and how to
            make them more reliable.
          </p>

          <div className="facts">
            <div className="fact">
              <span className="mono label">based in</span>
              <span>Pune, Maharashtra</span>
            </div>
            <div className="fact">
              <span className="mono label">studying</span>
              <span>B.Tech, Cyber Security & Forensics — MIT-WPU</span>
            </div>
            <div className="fact">
              <span className="mono label">currently</span>
              <span>Open to new opportunities</span>
            </div>
            <div className="fact">
              <span className="mono label">stack</span>
              <span>Python · TypeScript · Django · React · Docker</span>
            </div>
          </div>
        </Reveal>

        {isDesktop && (
          <div className="about-spline">
            <SplineScene
              scene="https://prod.spline.design/sKDi6HwdUWiqtH1X/scene.splinecode"
              className="about-spline-scene"
            />
          </div>
        )}
      </div>
    </>
  );
}
