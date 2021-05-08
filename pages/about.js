import styles from '../styles/Home.module.css';
import Head from 'next/head';

const About = () => {
  return (
    <>
    <Head>
      <title>
        Devs list | About
      </title>
      <meta name="keywords" content="devs"></meta>
    </Head>
    <div className={styles.container}>
      <h1>
        About Page
      </h1>
      <p>
        Lorem ipsum paragraphe 1
      </p>
      <p>
        Lorem ipsum paragraphe 2
      </p>
    </div>
    </>
  );
}
 
export default About ;