import React from "react";
import styles from "./About.module.css";

const About = ({ reference }) => {
  return (
    <div ref={reference} className={styles.container}>
      <h1 className={styles.title}>Valentín Marturet</h1>
      <p className={styles.text}>
        Soy un desarrollador web MERN, desde hace ya tiempo interesado en el
        mundo de la programación. Desarrolle mis primeros programas en Python,
        pero decidí centrarme en el desarrollo front-end con React en estos
        últimos años y mejorar mis habilidades de diseño.
      </p>
    </div>
  );
};

export default About;
