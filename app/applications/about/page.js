"use client";
import React from 'react';
import Image from 'next/image';
import styles from "../../style/about.module.css"; 

function About() {
  const imageUrl1 = "/img/linkedin.ico";
  const linkUrl1 = "https://www.linkedin.com/in/gabriela-malasquez/";
  const imageUrl2 = "/img/github.ico";
  const linkUrl2 = "https://github.com/gabriela126mz";

  const skills = [
    { src: "/img/html.ico", alt: "HTML", width: 60, height: 60 },
    { src: "/img/js.ico", alt: "JavaScript", width: 60, height: 60 },
    { src: "/img/react.ico", alt: "React", width: 60, height: 60 },
    { src: "/img/java.ico", alt: "Java", width: 60, height: 60 },
    { src: "/img/android.ico", alt: "Android", width: 60, height: 60 },
    { src: "/img/php.ico", alt: "PHP", width: 60, height: 60 },
    { src: "/img/bd.ico", alt: "Base de Datos", width: 60, height: 60 }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.contentSection}>
        <div className={styles.imageContainer}>
          <Image
            src="/img/otro.png"
            alt="foto"
            width={500}
            height={400}
            className={styles.aboutImage}
          />
        </div>
        <div className={styles.textSection}>
          <h3>¡Hola! Soy Gabriela Malasquez, desarrolladora front-end con experiencia en crear interfaces web accesibles.</h3>
          <b>
            <h3>
              He colaborado con clientes de México y Portugal como técnica de software, y actualmente me enfoco en garantizar la calidad del software para asegurar una experiencia de usuario impecable.
            </h3>
          </b>
          <p>Mis habilidades:</p>

          <div className={styles.skillsSection}>
            {skills.map((skill, index) => (
              <Image
                key={index}
                src={skill.src}
                alt={skill.alt}
                width={skill.width}
                height={skill.height}
                className={styles.skillIcon}
              />
            ))}
          </div>
        </div>
      </div>

      <h2>Contacto</h2>
      <div className={styles.socialSection}>
        <div className={styles.socialLinks}>
          <a href={linkUrl1} target="_blank" rel="noopener noreferrer">
            <Image
              src={imageUrl1}
              alt="LinkedIn"
              width={40} 
              height={40} 
              className={styles.socialIcon}
            />
          </a>
          <a href={linkUrl2} target="_blank" rel="noopener noreferrer">
            <Image
              src={imageUrl2}
              alt="GitHub"
              width={40} 
              height={40} 
              className={styles.socialIcon}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
