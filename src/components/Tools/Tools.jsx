import React from "react";
import ToolCard from "../ToolCard.jsx/ToolCard";
import logos from "../../assets/tool-logos/logoexports";
import styles from "./Tools.module.css";

const Tools = ({ reference }) => {
  return (
    <div ref={reference} className={styles.container}>
      <div className={styles.tools_title}>
        <h1 className={styles.title}>Herramientas</h1>
        <h3 className={styles.text}>
          Estas son algunas de las herramientas que utilizo y me permiten crear
          proyectos escalables, interactivos y de alto rendimiento.{" "}
        </h3>
      </div>
      <div className={styles.tool_container}>
        <ToolCard image={logos.reactlogo}>React</ToolCard>
        <ToolCard image={logos.reduxlogo}>Redux</ToolCard>
        <ToolCard image={logos.nodejslogo}>NodeJS</ToolCard>
        <ToolCard image={logos.vscodelogo}>VSCode</ToolCard>
        <ToolCard image={logos.expresslogo}>ExpressJS</ToolCard>
        <ToolCard image={logos.githublogo}>GitHub</ToolCard>
      </div>
    </div>
  );
};

export default Tools;
