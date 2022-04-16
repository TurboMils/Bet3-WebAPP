import styles from './CardSection.module.scss';
import AddUser from './AddUser';

export function Card(props) {

    return (
      <div className="bg-slate-500">
        
        <div className={styles.card}>
          
          <div className={styles.info}>
            <img src={props.imagePath} draggable={false} />
            <h1>{props.text}</h1>
              {props.value}
            <req/>
          </div>
          
        </div>
        
      </div>
    );
  }
