import Navbar from '../Navbar'
import Footer from '../Footer'
import Head from 'next/head'


export default function format ({ children }) {
    return (
        <>
            <Head>
               < title>Blog</title>

            </Head>
            <Navbar /> 
            <main>{ children}</main>
            <Footer />
        </>
    )
}