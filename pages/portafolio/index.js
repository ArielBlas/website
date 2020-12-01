import Head from "next/head";
import Link from "next/link";
import AppLayout from "../../components/AppLayout";
import styles from "../../styles/Portafolio.module.scss";
import { getSortedPostsData } from '../../lib/posts'

export default function Portafolio({ allPostsData }){
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
                        {allPostsData.map(({ id, title, description, image, website, github }) => (
                            <div className={styles.card} key={id}>
                            <div className={styles.cardContent}>
                                <div className={styles.cardPort}>
                                    <a>
                                        <h3>{title}</h3>
                                        <p>{description}</p>
                                    </a>
                                </div>                                    
                                <div className={styles.imgContainer}>
                                    <img src={`/portafolio/${image}`}/>
                                    <div className={styles.iconsContainer}>
                                        <a href={website} alt="website" target="_blank"><img src="/web.svg"/></a>
                                        <a href={github} alt="github" target="_blank"><img src="/github.svg"/></a>
                                    </div>
                                </div>                                  
                            </div>
                        </div>
                        ))}                        
                    </div>
                </div>
            </div>
            </AppLayout>

            
        </>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }