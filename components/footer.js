import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer} >
      <div>
        <Link href="/devs"><a>See the developers list</a></Link>
        <h1>
          DEVS-LIST created by next.js framework, copyright 2021.
        </h1>
      </div>
    </footer>
  );
}
 
export default Footer;