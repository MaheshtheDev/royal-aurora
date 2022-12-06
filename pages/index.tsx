import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Layout from '../components/layout'
import Main from '../components/main'
//import Productspage from '../components/productspage'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen relative flex justify-between flex-col">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"  
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Head>
        <title>ROYALAURORA</title>
        <link rel="icon" href="/logo.png" />
        <meta
          name="description"
          content="We provide a wide range of house cleaning products such as detergent liquid, dishwash gel, floor cleaners, bathroom cleaners, glass cleaners."
        />

        <meta
          property="og:image"
          content="https://www.royalaurora.com/OG-Image.png"
        />
      </Head>
      <Main />
      {/*<Productspage />*/}
      {/*<Footer />*/}
    </div>
  );
}

export default Home
