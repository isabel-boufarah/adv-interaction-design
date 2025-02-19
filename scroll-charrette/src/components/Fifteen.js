import styles from '../styles/fifteen.module.css'
import { useEffect, useState } from 'react'


export default function Fifteen() {

    const [scrolls, setScrolls] = useState(['1', '2'])

    useEffect(() => {
        const handleScroll = () => {
            alert('you scrolled...good luck getting down this page')
        }

        window.addEventListener("scroll", handleScroll)
    
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return (<div className={styles.div}>
    </div>)
}