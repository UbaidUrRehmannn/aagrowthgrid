import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-Screen";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AA Growth Grid | Portfolio</title>
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <Cursor />
      <LoadingScreen />
      <Component {...pageProps} />
      <ScrollToTop />
      <ToastContainer />
      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      {/* <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script> */}
      <script async id="simpleParallax" src="https://cdn.jsdelivr.net/npm/simple-parallax-js@5.6.1/dist/simpleParallax.min.js"></script>
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script id="wowInit" strategy="lazyOnload">{`new WOW().init();`}</Script>
    </>
  );
}

export default MyApp;
