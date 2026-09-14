import { useState } from "react";
import NAV_ITEMS from "../../data/navigation";
import "./Navbar.css";

export default function Navbar({ activePage, goTo }) {
  const [photoOpen, setPhotoOpen] = useState(false);

  const handleNavClick = (e, target) => {
    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button === 0) {
      e.preventDefault();
      goTo(target);
    }
  };

  return (
    <>
      <nav className="nav">
        <div className="brand-group">
          <img
            className="nav-avatar"
            src="/profile_photo.png"
            alt="Ashish Sharma"
            onClick={() => setPhotoOpen(true)}
          />
          <a
            href="/"
            className="brand mono"
            onClick={(e) => handleNavClick(e, "home")}
          >
            ashish<strong>codes</strong>.com
          </a>
        </div>
        <div className="nav-links mono">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.path || (item.key === "home" ? "/" : `/${item.key}`)}
              className={activePage === item.key ? "active" : ""}
              onClick={(e) => handleNavClick(e, item.key)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {photoOpen && (
        <div className="photo-overlay" onClick={() => setPhotoOpen(false)}>
          <img
            className="photo-enlarged"
            src="/profile_photo.png"
            alt="Ashish Sharma"
          />
        </div>
      )}
    </>
  );
}

