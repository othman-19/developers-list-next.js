import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <nav>
      <div >
        <h1 className={styles.logo}>
          DEVS-LIST
        </h1>
      </div>
      <a href="/">Home |</a>
      <a href="about"> About |</a>
      <a href="devs/"> Developrs</a>
    </nav>
  );
}
 
export default Navbar;