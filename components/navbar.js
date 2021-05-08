import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/icon.png" width={60} height={60} />
      </div>
      <Link href="/"><a>Home |</a></Link>
      <Link href="/about"><a> About |</a></Link>
      <Link href="/devs"><a> Developrs</a></Link>
    </nav>
  );
}
 
export default Navbar;