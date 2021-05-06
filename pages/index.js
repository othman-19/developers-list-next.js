import styles from '../styles/Home.module.css'
import Navbar from "../components/navbar"
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1> Home Page</h1>
        <p>
          Lorem ipsum paragraphe 1
        </p>
        <p>
          Lorem ipsum paragraphe 2
        </p>
      </div>
      <Footer />
    </>
  )
}
