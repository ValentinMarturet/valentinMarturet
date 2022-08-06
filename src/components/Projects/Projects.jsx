import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
import projectLogos from "../../assets/Projects/projectLogos";

const Projects = ({ reference }) => {
  return (
    <div ref={reference} className={styles.container}>
      <div className={styles.project_title}>
        <h1 className={styles.title}>Proyectos</h1>
        <h3 className={styles.text}>
          Estos son algunos de los ultimos proyectos en los que he trabajado.
        </h3>
      </div>
      <div className={styles.project_container}>
        <ProjectCard
          logo={projectLogos.Netflix}
          bgColor={"rgba(22, 22, 22, 1)"}
          gitLink="https://github.com/ValentinMarturet/netflix-clone"
          siteLink="https://brilliant-nasturtium-18829d.netlify.app/"
        >
          Un simple clon de la famosa app de streaming. Netflix. Herramientas:
          React, React-router, axios.
        </ProjectCard>
        <ProjectCard
          logo={projectLogos.SmartBrain}
          bgColor={
            "linear-gradient(124deg, rgba(253,95,223,1) 0%, rgba(81,167,222,1) 97%, rgba(76,171,223,1) 100%)"
          }
          gitLink="https://github.com/ValentinMarturet/facerecognitionapp"
          siteLink="https://app-reconocimiento-facial.herokuapp.com/"
        >
          Aplicación de reconocimiento facial en fotos. Herramientas: React,
          ClarifaiAPI, ExpressJS y PostgreSQL.
        </ProjectCard>
        <ProjectCard
          logo={projectLogos.PokeBattle}
          bgColor={"rgba(238, 207, 110, 1)"}
          gitLink="https://github.com/ValentinMarturet/poke-battle"
          siteLink="https://resplendent-selkie-bfa2c5.netlify.app"
        >
          Elige pokemons y enfrentalos en una batalla. <br />
          Herramientas: React, axios.
        </ProjectCard>
      </div>
    </div>
  );
};

export default Projects;
