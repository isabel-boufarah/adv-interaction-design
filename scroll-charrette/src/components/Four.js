import styles from '../styles/four.module.css'
import flower1 from '../images/flower-1.webp';
import flower2 from '../images/flower-2.jpg'
import flower3 from '../images/flower-3.jpg';
import flower4 from '../images/flower-4.jpg'
import { useEffect } from 'react';

export default function Four() {

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //     }
    // }, [])

    // const transform = (section) => {
    //     const offsetTop = section.parentElement.offsetTop;
    //     const scrollSection = section.querySelector('.scroll_section');
    //     console.log(scrollSection)
    //     let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100
    //     scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
    // }

    // const handleScroll = () => {
    //     if(document.querySelector('.sticky')) {
    //         let stickySections = [...document.querySelector('.sticky')]

    //         for(let i = 0; i < stickySections.length; i++){
    //             transform(stickySections[i])
    //         }
    //     }
        
    // }

    return (
        <main style={{padding: '56px 24px'}}>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h1>Hybrid Scrolling</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </section>
            <div className={styles.sticky_parent}>
                <div className={`${styles.sticky} sticky`}>
                    <div className={`${styles.scroll_section} scroll_section`}>
                        <img className={styles.img} src={flower1} />
                        <img className={styles.img} src={flower2} />
                        <img className={styles.img} src={flower3} />
                        <img className={styles.img} src={flower4} />
                    </div>
                </div>
            </div>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h1>Back to Vertical</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </section>
            <div className={styles.sticky_parent}>
                <div className={styles.sticky}>
                    <div className={styles.scroll_section}></div>
                </div>
            </div>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h1>The End</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </section>
        </main>
    )
}