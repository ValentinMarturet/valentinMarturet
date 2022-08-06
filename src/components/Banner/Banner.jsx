import React from "react";
import styles from "./Banner.module.css";
import poster from "../../assets/monitor_illustration_2.svg";
// import poster from "../../assets/javascript_illustration.svg";
// import poster from "../../assets/monitor.svg";

const Banner = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Desarrollador Web</h1>
      <h3 className={styles.desc}>Diseño sitios web utilizando stack MERN</h3>
      <img className={styles.poster} src={poster} />
    </div>
  );
};

export default Banner;
