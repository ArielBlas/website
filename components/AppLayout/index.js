import Head from 'next/head';
import Navbar from '../navbar';
import Footer from '../footer';

export default function AppLayout({children}){

    return(
        <>
            <Head>
                <link rel="icon" href="/logo.png" />
                {/* <script src="/main.js"></script> */}
            </Head>
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>
        </>        
    )
}