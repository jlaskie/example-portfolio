import "../styles/globals.css";
import Head from "next/head";



export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Example Portfolio</title>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Example of an online portfolio." />
        <meta
          name="robots"
          content="noindex, nofollow, noarchive, nosnippet, noimageindex"
        />
        <meta name="theme-color" content="rgb(103 232 249)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
