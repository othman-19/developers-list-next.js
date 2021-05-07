import styles from '../styles/Home.module.css'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div >
        <h1 className={styles.logo}>
          DEVS-LIST
        </h1>
      </div>
      <Link href="/"><a>Home |</a></Link>
      <Link href="/about"><a> About |</a></Link>
      <Link href="/devs"><a> Developrs</a></Link>
    </nav>
  );
}
 
export default Navbar;