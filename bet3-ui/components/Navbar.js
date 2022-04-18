import Link from 'next/link';

import URLs from '../urls';
import styles from './Navbar.module.css';

export function Navbar() {
  return (

    <div className={styles.navbar}>
      <div className='container mx-auto my-10'>
        <div className='flex shadow border-b'>
          <Link href="/">
            <a><img className='h-20' src="/assets/images/logo3.svg" draggable={false} /></a>
            
          </Link>

          <div className={styles.actions}>
            <a href={URLs.GitHub}>GitHub</a>
            <a href={URLs.Admin}> Administration</a>
            <a href={URLs.Books}>Nos livres</a>
            <a href={URLs.Qui}>Qui sommes nous</a>
            <a>Early access</a>
          </div>
        </div>
      </div>
    </div>
  );
}



