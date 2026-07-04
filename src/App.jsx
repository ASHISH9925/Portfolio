import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import CertificationsPage from "./pages/CertificationsPage/CertificationsPage";
import AwardsPage from "./pages/AwardsPage/AwardsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");

  const goTo = (key) => {
    setPage(key);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (page) {
      case "projects":
        return <ProjectsPage />;
      case "certifications":
        return <CertificationsPage />;
      case "awards":
        return <AwardsPage />;
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
        <Footer />
      </div>
    </div>
  );
}
