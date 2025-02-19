import styles from '../styles/nine.module.css'

export default function Nine() {
    return(<div className={styles.main}>
        <div className={`${styles.sq} ${styles.div1}`}></div>
        <div className={`${styles.sq} ${styles.div2}`}></div>
        <div className={`${styles.sq} ${styles.div3}`}></div>
    </div>)
}