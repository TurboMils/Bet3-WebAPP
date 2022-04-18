

import LivreList from '../components/LivreList';
import AddLivre from '../components/AddLivre';
import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import styles from '../styles/Home.module.css';
import URLs from '../urls';
import { Card } from '../components/Card';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Netscape</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/bpi8rtm.css" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.9, user-scalable=0"
        />

        <meta property="og:title" content="Netscape" />
        <meta property="og:url" content="https://Netscape.page" />
        <meta
          property="og:image"
          content="https://Netscape.page/Netscape.gif"
        />
        <meta
          property="og:description"
          content="A digital nerve center of collaboration, knowledge management, learning and productivity."
        />

        <meta property="twitter:title" content="SocialTech" />
        <meta property="twitter:site" content="@socialtech.live" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://Netscape.page/Netscape.gif"
        />
        <meta
          property="twitter:image:alt"
          content="Open Technology Collaboration"
        />
        <meta
          property="twitter:description"
          content="A digital nerve center of collaboration, knowledge management, learning and productivity."
        />

        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />

        {
          // Disabled scroll snapping.
          /* // Firefox only: Scroll snapping.
                    // Doesn't work properly with Chromium.
                    typeof window !== 'undefined' &&
                    typeof (window as any).InstallTrigger !== 'undefined' &&
                    <style dangerouslySetInnerHTML={{ __html: `html { scroll-snap-type: y mandatory; }` }} /> */
        }
      </Head>
      <main>
        <section className={styles.hero}>
          <Navbar />
        
        </section>
        <Card  imagePath ="/assets/images/card2.svg" value={<AddLivre />} text = "Liste des livres"/>
  
        <Footer />

      </main>
    </div>
  );
}



