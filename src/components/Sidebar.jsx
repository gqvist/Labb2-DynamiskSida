import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import profileImg from "../assets/images/profile-img.jpg";
import profileSecret from "../assets/images/profile-secret.jpg";

function Sidebar() {
  const [comicMode, setComicMode] = useState(false);
  const [secretMode, setSecretMode] = useState(false);

  // Easter Egg #1 - Click three times on me for comic sans
  function handleTripleClick() {
    setComicMode((prev) => !prev);
    document.body.classList.toggle("comic-mode");
  }

  // Easter Egg #2 - Use the konami code for secret
  useEffect(() => {
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a"
    ];

    let userInput = [];

    function handleKeyDown(e) {
      userInput.push(e.key);

      if (userInput.length > konamiCode.length) {
        userInput.shift();
      }

      const matched = konamiCode.every(
        (key, index) => userInput[index] === key
      );

      if (matched) {
        setSecretMode((prev) => !prev);
        document.body.classList.toggle("konami-active");
        userInput = [];
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <aside className="sidebar">
      <div className="profile">
        <div className="profile-circle">
          <img
            id="profile-img"
            src={secretMode ? profileSecret : profileImg}
            alt="profile picture"
            onClick={(e) => {
              if (e.detail === 3) {
                handleTripleClick();
              }
            }}
          />
        </div>
      </div>

      <nav className="nav">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>

        <NavLink to="/cv" className="nav-link">
          CV
        </NavLink>

        <NavLink to="/about" className="nav-link">
          About me
        </NavLink>

        <NavLink to="/portfolio" className="nav-link">
          Portfolio
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;