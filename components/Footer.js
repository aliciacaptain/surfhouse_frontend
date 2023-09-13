import styles from '../styles/Footer.module.css';

function Footer() {
    return (
      <div>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </main>
      </div>
    );
  }
  
  export default Footer;