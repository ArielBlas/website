import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';
import logo from '../public/logo.png';

export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false)

    const handleClick = () =>{
        setMenuOpen(!menuOpen)
    }

    return(
        <nav id="myNav">
            <div className={`container ${styles.navContainer}`}>
                {/* <input type="checkbox" className="toggler"/> */}
	            <div className="hamburger" onClick={handleClick}></div>
                <div className={styles.navBrand}>
                    <Link href="/">
                        <a><img src={logo} className={styles.imgBrand}/></a>
                    </Link>
                </div>
                <div className={`${styles.navMenu} ${menuOpen ? `${styles.menuOpen}` : ''} `}>
                    <Link href="/">
                        <a className={styles.navMenuLink} onClick={handleClick}>Home</a>
                    </Link>
                    <Link href="/#sobre_mi">
                        <a className={styles.navMenuLink} onClick={handleClick}>Sobre mi</a>
                    </Link>
                    <Link href="/#servicios">
                        <a className={styles.navMenuLink} onClick={handleClick}>Servicios</a>
                    </Link>
                    <Link href="/portafolio">
                        <a className={styles.navMenuLink} onClick={handleClick}>Portafolio</a>
                    </Link>
                    <Link href="/#contacto">
                        <a className={styles.navMenuLink} onClick={handleClick}>Contacto</a>
                    </Link>
                </div>
            </div>
            {menuOpen ?
            <style global jsx>{`
                body{
                    overflow: hidden;
                }

                @media (min-width: 768px){
                    body{
                        overflow: auto;
                    }
                }
            `}</style>
            : null}
        </nav>
    )
}