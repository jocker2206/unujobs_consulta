import React, {Fragment} from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default function MyApp({Component, pageProps}) {
    return <Fragment>
        <Head>
            <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet"/>
            <link href="/css/linearicons.css" rel="stylesheet"/>
            <link href="/css/owl.carousel.css" rel="stylesheet"/>
            <link href="/css/font-awesome.min.css" rel="stylesheet"/>
            <link href="/css/nice-select.css" rel="stylesheet"/>
            <link href="/css/magnific-popup.css" rel="stylesheet"/>
            <link href="/css/bootstrap.css" rel="stylesheet"/>
            <link href="/css/main.css" rel="stylesheet"/>
            <title>UnuCenter</title>
        </Head>

        <Header/>

        <Component {...pageProps}/>

        <div className="mt-100"></div>

        <Footer/>
    </Fragment>
}
