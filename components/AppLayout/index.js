import Head from 'next/head';
import Navbar from '../navbar';
import Footer from '../footer';
import logo from '../../public/logo.png'

export default function AppLayout({children}){

    return(
        <>
            <Head>
                <link rel="icon" href={logo} />
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