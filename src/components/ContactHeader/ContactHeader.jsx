import React from "react";
import styles from "./ContactHeader.module.css";
import logo from "../../assets/Logos/VM_logo_transparent.png";
import { useNavigate } from "react-router-dom";

const ContactHeader = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} />
      <div className={styles.nav_btns}>
        <button className={styles.button_slide} onClick={() => navigate("/")}>
          Volver
        </button>
      </div>
    </div>
  );
};

export default ContactHeader;
