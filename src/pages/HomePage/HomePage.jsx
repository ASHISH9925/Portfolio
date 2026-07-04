import { useState, useEffect } from "react";
import useDecrypt from "../../hooks/useDecrypt";
import Reveal from "../../components/Reveal/Reveal";
import SplineScene from "../../components/SplineScene/SplineScene";
import Spotlight from "../../components/Spotlight/Spotlight";
import PROJECTS from "../../data/projects";
import SKILLS from "../../data/skills";
import "./HomePage.css";

const HERO_NAME = "Ashish Sharma";
const TAGLINE = "I build systems, then try to break them.";

export default function HomePage({ goTo }) {
  const [heroActive, setHeroActive] = useState(false);
  const heroName = useDecrypt(HERO_NAME, heroActive, 700);
  const tagline = useDecrypt(TAGLINE, heroActive, 900);

  useEffect(() => {
    const t = setTimeout(() => setHeroActive(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <section className="hero">
        <Spotlight className="hero-spotlight" fill="rgba(201, 169, 104, 0.15)" />

        <div className="hero-left">
          <div className="eyebrow mono">SOFTWARE ENGINEER — SECURITY-MINDED</div>
          <h1 className="hero-name">{heroName}</h1>
          <p className="hero-tagline mono">{tagline}</p>
          <div className="cta-row">
            <button className="btn btn-primary" onClick={() => goTo("projects")}>
              See my projects
            </button>
            <button className="btn" onClick={() => goTo("contact")}>
              Get in touch
            </button>
          </div>
        </div>

        <div className="hero-right">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="hero-spline"
          />
        </div>
      </section>

      <div className="status mono">
        <span className="label">now:</span>
        <span>
          Infra SDE intern at Northern Trust, working with the SRE team on
          observability and platform reliability
        </span>
      </div>

      <Reveal as="section" className="focus">
        <div className="focus-head mono">// what I work on</div>
        <div className="focus-grid">
          <div className="focus-card">
            <span className="tag mono">01_backend</span>
            <h3>Backend & full-stack</h3>
            <p>
              APIs, databases, and full-stack apps across Django, Golang, and
              the MERN stack.
            </p>
          </div>
          <div className="focus-card">
            <span className="tag mono">02_security</span>
            <h3>Security & forensics</h3>
            <p>
              Offensive and defensive fundamentals, Windows and Linux
              forensics, and digital investigation tooling.
            </p>
          </div>
          <div className="focus-card">
            <span className="tag mono">03_ai_systems</span>
            <h3>AI-assisted systems</h3>
            <p>
              Agent architectures, RAG pipelines, and investigation tooling
              built on top of LLMs.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="skills">
        <div className="focus-head mono">// technical skills</div>
        <div className="skills-grid">
          {SKILLS.map((group) => (
            <div className="skill-group" key={group.category}>
              <span className="tag mono">{group.category}</span>
              <h3>{group.label}</h3>
              <div className="skill-items">
                {group.items.map((item) => (
                  <span className="skill-chip mono" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="home-teaser">
        <div className="home-teaser-row">
          <div>
            <div className="eyebrow mono">// selected work</div>
            <p>
              {PROJECTS.length} projects spanning digital forensics,
              encryption, and applied AI — from a zero-knowledge file vault to
              an AI-powered investigation platform.
            </p>
          </div>
          <button className="btn" onClick={() => goTo("projects")}>
            View all projects →
          </button>
        </div>
      </Reveal>
    </>
  );
}
