import Head from 'next/head'
import Page from './Page'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Clerks App</title>
        <meta name="description" content="clerks users application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page />
    </>
  )
}
