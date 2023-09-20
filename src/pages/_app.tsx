import '@styles/global.css';
import { Manrope } from 'next/font/google';
import Head from "next/head";
import {ModalContextProvider} from "../contexts/ModalContext";
import {AppProps} from "next/app";

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-manrope'
});

const App = ({
 Component,
 pageProps
}: AppProps) => {
  return (
    <ModalContextProvider>
      <div className={`${manrope.variable} font-sans`}>
        <Head>
          <title>Heapix AI Lab</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
          <link rel="icon" type="image/ico" sizes="16x16" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </div>
    </ModalContextProvider>
  );
};

export default App;
