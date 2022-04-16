import styles from './Footer.module.scss';
import URLs from '../urls';
import Link from 'next/link';

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.branding}>
        <img src="/assets/images/logo.svg" draggable={false} />
        <div className={styles.links}>
          <div className={styles.column}>
            <b>App</b>
            <a href={URLs.App}>Open App</a>
            <a href={URLs.ProjectTracker}>
              Project Tracker
            </a>
            <a>Download</a>
            <a>Features</a>
            <a>Branding</a>
          </div>
          <div className={styles.column}>
            <b>Developers</b>
            <a href={URLs.GitHub}>Contribute</a>
            <a href={URLs.Developers}>Documentation</a>
            <a href={URLs.Translate}>Help translate</a>
          </div>
          <div className={styles.column}>
            <b>Team</b>
            <Link href="/about">
              <a>About Us</a>
            </Link>
            <a href="mailto:hello@revolt.chat">Email</a>
          </div>
          <div className={styles.column}>
            <b>Legal</b>
            <Link href="/terms">
              <a>Terms of Service</a>
            </Link>
            <Link href="/privacy">
              <a>Privacy Policy</a>
            </Link>
            <Link href="/aup">
              <a>Acceptable Usage</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
