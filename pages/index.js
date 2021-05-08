import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}> Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum paragraphe 1
        </p>
        <p className={styles.text}>
          Lorem ipsum paragraphe 2
        </p>
        <div>
          <Link href="/devs"><a className={styles.btn}>Devs list</a></Link>
        </div>
      </div>
    </>
  )
}
