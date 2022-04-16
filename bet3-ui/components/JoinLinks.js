import { Edit } from '@styled-icons/feather';

import URLs from '../urls';
import styles from './JoinLinks.module.scss';

export function JoinLinks() {
  return (
    <div className={styles.actions}>
      <button className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
        href={URLs.PublicBeta}>
      
        <Edit size={24} strokeWidth={2} /> Request Early Access
        </button>
        <a className="button" href={URLs.App}>
        Open Web app
      </a>
    </div>
  );
}
