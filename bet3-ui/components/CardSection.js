import styles from './CardSection.module.scss';

export function CardSection() {
  return (
    <div className="bg-slate-500">
      
      <div className={styles.card}>
        <div className={styles.info}>
          <img src="/assets/images/card1.svg" draggable={false} />
          <h1>Spring boot</h1>
          <p>
          Le projet Spring Boot est une extension du Spring Framework pour mettre en place rapidement des applications Java.
          </p>
        </div>
        <div className={styles.info}>
          <img src="/assets/images/card3.svg" draggable={false} />
          <h1>Tailwind CSS</h1>
          <p>
          Tailwind CSS est un framework utility-fist avec des 
          classes prédéfinies pour construire et concevoir des pages web dans votre balisage.
          </p>
        </div>
        <div className={styles.info}>
          <img src="/assets/images/card2.svg" draggable={false} />
          <h1>Next.js</h1>
          <p>
          Next.js est un framework gratuit et open source s'appuyant sur la librairie 
          JavaScript React3 et sur la technologie Node.js. .
          </p>
        </div>
      </div>
      
    </div>
  );
}
