import styles from './JoinPrompt.module.scss';

export function JoinPrompt() {
  return (
    <div className={styles.container}>
      <div className={styles.prompt}>
        <div className={styles.info}>
          <h1>Explication projet  </h1> 
          
          <p>

            Cette WebAPP n'a pas réellement de sens en elle même, elle m'a surtout permis de découvrir Springboot, créer une API complète et découvrir react avec Next.js. 
            <br></br>
            C'est le premier projet que j'ai réalisé avec le langage Java et la première API implémentée, j'ai aussi découvert react.
            J'ai bien implémenté les méthodes CRUD.
            <br></br>
            <br></br>
            <b>Difficultés :</b>
            <br></br>
            J'ai crée 3 entity: <b>User</b>, <b>Livre</b> et <b>Auteur</b>. 
            J'ai eu des difficultés à implémenter le OneToMany et ManyToOne, mes entitées n'ont donc pas encore de relation entre elles.
            <br></br>
           
          </p>
        </div>
       
      </div>
    </div>
  );
}
