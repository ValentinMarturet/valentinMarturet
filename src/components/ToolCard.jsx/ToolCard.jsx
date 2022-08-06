import React from "react";
import styles from "./ToolCard.module.css";

const ToolCard = ({ image, children }) => {
  return (
    <div className={styles.card}>
      <img src={image} width="76px" height="76px" />
      <h3 className={styles.tag}>{children}</h3>
    </div>
  );
};

export default ToolCard;
