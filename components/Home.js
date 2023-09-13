import styles from '../styles/Home.module.css';
import Header from './Header';
import Footer from './Footer';
import Accomodations from './Accomodations';
import Activities from './Activities';


function Home() {
  return (
    <div>
      <main className={styles.main}>
      <Header />
      <Accomodations />
      <Activities />
      <Footer />
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>

  );
}

export default Home;
