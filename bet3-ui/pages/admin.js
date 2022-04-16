

import UserList from '../components/UserList';
import AddUser from '../components/AddUser';
import { ArrowRight } from '@styled-icons/feather';
import Head from 'next/head';

import { CardSection } from '../components/CardSection';

import { JoinLinks } from '../components/JoinLinks';
import { JoinPrompt } from '../components/JoinPrompt';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import styles from '../styles/Home.module.css';
import URLs from '../urls';
import { Card } from '../components/Card';

export default function Home() {
  return (
    <div>
      <Head>
        <title>BET3</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/bpi8rtm.css" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.9, user-scalable=0"
        />

        <meta property="og:title" content="BET3" />
        <meta property="og:url" content="https://BET3.page" />
        <meta
          property="og:image"
          content="https://BET3.page/BET3.gif"
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
          content="https://BET3.page/BET3.gif"
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
        <Card  imagePath ="/assets/images/card2.svg" value={<AddUser />} text = "AdminIstrator"/>
  
        <Footer />

      </main>
    </div>
  );
}



