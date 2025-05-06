import React from 'react'
import viberr from '../../assets/viberr.png'
import styles from './ProjectStyles.module.css'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={viberr} link={'https://github.com/ahimalk/maplefilms'} h3={'Viberr'}/>
        </div>
      </section>
  );
}

export default Projects;
