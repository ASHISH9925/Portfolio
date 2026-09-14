import { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import CertificationsPage from "./pages/CertificationsPage/CertificationsPage";
import AwardsPage from "./pages/AwardsPage/AwardsPage";
import BadgesPage from "./pages/BadgesPage/BadgesPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import "./App.css";

const VALID_ROUTES = {
  "": "home",
  "/": "home",
  "home": "home",
  "projects": "projects",
  "certifications": "certifications",
  "awards": "awards",
  "badges": "badges",
  "about": "about",
  "contact": "contact",
};

const PAGE_TO_PATH = {
  home: "/",
  projects: "/projects",
  certifications: "/certifications",
  awards: "/awards",
  badges: "/badges",
  about: "/about",
  contact: "/contact",
};

const PAGE_TITLES = {
  home: "ashishcodes.com — Ashish Sharma",
  projects: "Projects | Ashish Sharma",
  certifications: "Certifications | Ashish Sharma",
  awards: "Awards & Merits | Ashish Sharma",
  badges: "Badges & Achievements | Ashish Sharma",
  about: "About | Ashish Sharma",
  contact: "Contact | Ashish Sharma",
};

function getPageFromPath(path) {
  if (!path) return "home";
  const clean = path.replace(/\/+$/, "") || "/";
  if (clean === "/") return "home";
  const segment = clean.replace(/^\//, "").toLowerCase();
  return VALID_ROUTES[segment] || "home";
}

export default function App() {
  const [page, setPage] = useState(() => {
    if (typeof window !== "undefined") {
      return getPageFromPath(window.location.pathname);
    }
    return "home";
  });

  const goTo = useCallback((keyOrPath) => {
    const cleanKey = keyOrPath.replace(/^\//, "").toLowerCase();
    const targetPage = VALID_ROUTES[cleanKey] || "home";
    const targetPath = PAGE_TO_PATH[targetPage] || "/";

    if (window.location.pathname !== targetPath) {
      window.history.pushState({ page: targetPage }, "", targetPath);
    }
    setPage(targetPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const targetPage = getPageFromPath(window.location.pathname);
      setPage(targetPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    document.title = PAGE_TITLES[page] || "ashishcodes.com — Ashish Sharma";
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "projects":
        return <ProjectsPage />;
      case "certifications":
        return <CertificationsPage />;
      case "awards":
        return <AwardsPage />;
      case "badges":
        return <BadgesPage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage goTo={goTo} />;
    }
  };

  return (
    <div className="page">
      <div className="wrap">
        <Navbar activePage={page} goTo={goTo} />
        {renderPage()}
        {page !== "contact" && <Footer />}
      </div>
    </div>
  );
}

