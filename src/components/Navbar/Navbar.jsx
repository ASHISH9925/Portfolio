import { useState } from "react";
import NAV_ITEMS from "../../data/navigation";
import "./Navbar.css";

export default function Navbar({ activePage, goTo }) {
  const [photoOpen, setPhotoOpen] = useState(false);

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
          <button className="brand mono" onClick={() => goTo("home")}>
            ashish<strong>codes</strong>.com
          </button>
        </div>
        <div className="nav-links mono">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              className={activePage === item.key ? "active" : ""}
              onClick={() => goTo(item.key)}
            >
              {item.label}
            </button>
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
