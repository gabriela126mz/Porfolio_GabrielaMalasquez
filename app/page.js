import Image from 'next/image';
import styles from '../app/style/inicio.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Gabriela Malasquez</h1>
        <h4 className={styles.subheading}>
          Soy desarrolladora front-end con experiencia como técnica de software en back-end, front-end y bases de datos, comprometida en ofrecer los mejores resultados para el cliente.
        </h4>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/img/foto-bck.png"
          alt="Foto"
          width={400}
          height={500}
          className={styles.image}
        />
      </div>
    </div>
  );
}
