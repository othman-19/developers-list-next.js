import styles from '../styles/Home.module.css'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>
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