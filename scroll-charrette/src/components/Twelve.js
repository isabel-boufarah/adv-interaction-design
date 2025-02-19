import styles from '../styles/twelve.module.css'

export default function Twelve() {
    return(<div className={styles.outer}>
    <div className={styles.container}>
        <div className={`${styles.div} ${styles.div1}`}></div>
        <div className={`${styles.div} ${styles.div2}`}></div>
        <div className={`${styles.div} ${styles.div3}`}></div>
        <div className={`${styles.div} ${styles.div4}`}></div>
        <div className={`${styles.div} ${styles.div5}`}></div>
    </div>
    </div>)
}