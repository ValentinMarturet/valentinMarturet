import React, { useState } from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  logo,
  children,
  bgColor = "#fff",
  gitLink,
  siteLink,
}) => {
  const [visible, setVisible] = useState("100");
  const [hidden, setHidden] = useState("0");
  const [color, setColor] = useState(bgColor);

  const divStyle = {
    transition: "500ms",
    background: `${color}`,
  };

  return (
    <div
      className={styles.card_container}
      style={divStyle}
      onMouseEnter={() => {
        setVisible("0");
        setHidden("100");
        setColor("rgba(56, 13, 113, 1)");
      }}
      onMouseLeave={() => {
        setVisible("100");
        setHidden("0");
        setColor(bgColor);
      }}
    >
      <img className={styles.img} src={logo} style={{ opacity: visible }} />
      <div className={styles.hidden_card} style={{ opacity: hidden }}>
        <h3 className={styles.card_text}>{children}</h3>
        <div>
          <button
            className={styles.gitButton}
            onClick={() => window.open(gitLink, "_blank").focus()}
          >
            GitHub
          </button>
          <button
            className={styles.siteButton}
            onClick={() => window.open(siteLink, "_blank").focus()}
          >
            Proyecto
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
