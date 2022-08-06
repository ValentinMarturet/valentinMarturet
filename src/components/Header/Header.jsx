import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/Logos/VM_logo_transparent.png";
import { useNavigate } from "react-router-dom";

const Header = ({ reference }) => {
  const navigate = useNavigate();

  const handleScroll = (r) => {
    r.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} />
      <div className={styles.nav_btns}>
        <button
          className={styles.nav_btn}
          onClick={() => handleScroll(reference.aboutRef)}
        >
          Sobre Mi
        </button>
        <button
          className={styles.nav_btn}
          onClick={() => handleScroll(reference.projectsRef)}
        >
          Proyectos
        </button>
        <button
          className={`${styles.nav_btn} ${styles.last}`}
          onClick={() => handleScroll(reference.toolsRef)}
        >
          Herramientas
        </button>
        <button
          className={styles.button_slide}
          onClick={() => navigate("/contact")}
        >
          Contactame
        </button>
      </div>
    </div>
  );
};

export default Header;
