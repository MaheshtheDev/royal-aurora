import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Layout from '../components/layout'
import Main from '../components/main'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen relative flex justify-between flex-col">
      <Head>
        <title>ROYALAURORA</title>
      </Head>
      <Layout />
      <Main />
      <Footer />
    </div>
  );
}

export default Home
