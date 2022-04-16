import Link from 'next/link';

import URLs from '../urls';
import styles from './Navbar.module.css';

export function Navbar() {
  return (

    <div className={styles.navbar}>
      <div className='container mx-auto my-10'>
        <div className='flex shadow border-b'>
          <table className=''>
            <thead className='bg-gray-50'>
              <Link href="/">
                <a>
                  <img className='h-20' src="/assets/images/logo3.svg" draggable={false} />
                </a>
              </Link>
               </thead>
          </table>
              <div className={styles.actions}>
                <a href={URLs.GitHub}>GitHub</a>
                <a>Why BET3?</a>
                <a href={URLs.Admin}> Administrator</a>
                <a>Contribute</a>
                <a>Request Early Access</a>
              </div>
           
        </div>
      </div>
    </div>

  );
}



