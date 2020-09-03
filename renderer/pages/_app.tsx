import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/styles.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Security-Policy" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
