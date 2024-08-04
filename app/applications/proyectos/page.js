"use client";
import React from 'react';
import Image from 'next/image';
import styles from "../../style/proyectos.module.css"; 
function Proyectos() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Image
            src="/img/interfaz.png"
            alt="Desarrollo Front"
            width={200}
            height={200}
            className={styles.cardImage}
          />
          <h3>Desarrollo Front-End</h3>
          <p>Diseños intuitivos para una navegación fluida y una mejor experiencia</p>
          <a href="https://github.com/gabriela126mz/proyectoEcommerce" target="_blank" rel="noopener noreferrer" className={styles.button}>Ver más</a>
        </div>
        <div className={styles.card}>
          <Image
            src="/img/back.png"
            alt="Desarrollo Back"
            width={200}
            height={200}
            className={styles.cardImage}
          />
          <h3>Desarrollo Back-End</h3>
          <p>Desarrollo adaptado a tus especificaciones, con seguridad y rendimiento.</p>
          <a href="https://github.com/gabrielasoma/javaLogica" target="_blank" rel="noopener noreferrer" className={styles.button}>Ver más</a>
        </div>
        <div className={styles.card}>
          <Image
            src="/img/app.png"
            alt="Aplicaciones Móviles"
            width={200}
            height={200}
            className={styles.cardImage}
          />
          <h3>Aplicaciones Móviles</h3>
          <p>Desarrollo de apps en Android para una experiencia fluida en dispositivos móviles.</p>
          <a href="https://github.com/gabrielasoma/Ejercicios-Android-/tree/main/1%20eval" target="_blank" rel="noopener noreferrer" className={styles.button}>Ver más</a>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
