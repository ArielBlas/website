import Head from "next/head";
import Link from "next/link";
import AppLayout from "../../components/AppLayout";
import styles from "../../styles/Portafolio.module.scss";

export default function Portafolio({ userName }){
    return(
        <>
            <Head>
                <title>Ariel Blas | Portafolio</title>
            </Head>
            <AppLayout>
            <div className={styles.portafolioContainer}>
                <div className="container">
                    <h2>Portafolio</h2>
                    <div className={styles.cardContainer}>
                        <div className={styles.card}>
                            <div className={styles.cardContent}>
                                <Link href="/portafolio/[id]" as='/portafolio/pagina_web'>
                                    <a>
                                        <h3>Página web</h3>
                                        <p>Mi página web se desarrollo para que pueda mostrar mi perfil y mis proyectos que van surgiendo.</p>
                                    </a>
                                </Link>                                    
                                <div className={styles.imgContainer}>
                                    <img src="pagina_web.png"/>
                                    <div className={styles.iconsContainer}>
                                        <a href="/" alt="#" target="_blank"><img src="/web.svg"/></a>
                                        <a href="https://github.com/" alt="#"><img src="/github.svg"/></a>
                                    </div>
                                </div>                                  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </AppLayout>

            <style global jsx>{`
                nav {
                    background: #aea;
                    color: #fff;
                    border-bottom: 1px solid #eee;
                }
            `}</style>
        </>
    )
}
