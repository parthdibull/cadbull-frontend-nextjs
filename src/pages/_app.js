import '@/styles/globals.scss'
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  React.useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap.bundle.min")
      : null;
  }, [router.events]);
  const getLayout = Component.getLayout || ((page) => page)
  return <Fragment>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Cadbull</title>
      <meta name="description" content="World Largest 2d CAD Library." />
    </Head>
    {
      getLayout(<Component {...pageProps} />)
    }
  </Fragment>
}
