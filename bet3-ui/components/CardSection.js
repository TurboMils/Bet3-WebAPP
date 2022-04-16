import styles from './CardSection.module.scss';

export function CardSection() {
  return (
    <div className="bg-slate-500">
      
      <div className={styles.card}>
        <div className={styles.info}>
          <img src="/assets/images/card1.svg" draggable={false} />
          <h1>Modern workforce</h1>
          <p>
            Multistakeholder governance aligns members with the collective wider
            community.
          </p>
        </div>
        <div className={styles.info}>
          <img src="/assets/images/card2.svg" draggable={false} />
          <h1>Meritocratic by design</h1>
          <p>
            Tokenized ownership aligns deeply committed individuals with the
            collective’s success.
          </p>
        </div>
        <div className={styles.info}>
          <img src="/assets/images/card3.svg" draggable={false} />
          <h1>Engineered for resilience</h1>
          <p>
            BET3 supports best practices in sociocratic management.
            Omni-Channel environments for real-time communication.
          </p>
        </div>
      </div>
      
    </div>
  );
}
