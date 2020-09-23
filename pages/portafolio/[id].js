import Head from 'next/head'
import AppLayout from "../../components/AppLayout";
import styles from '../../styles/Portafolio.module.scss';
import { getAllPostIds, getPostData } from '../../lib/posts'


export default function PortafolioPost({postData}) {
  return (
    <>
    {/* <Head>
        <link rel="icon" href="../logo.png" />
    </Head> */}
    <AppLayout>
        <div className={styles.portafolioContainer}>
            <div className="container">
                <h2>{postData.title}</h2>
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

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const postData = getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }
  