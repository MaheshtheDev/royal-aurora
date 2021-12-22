import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='flex flex-1 flex-col justify-center items-center min-h-screen' >
      <Head>
        <title>Royal Aurora</title>
        <meta name="description" content="Royal Aurora Homepage" />
      </Head>

      <main className="font-sans p-20 text-center">
        <h1 className='font-bold text-6xl text-center'>
          Welcome to <a href="" className='hover:underline text-blue-600'>Royal Aurora</a>
        </h1>

        <p className="text-xl pt-5">
          Building <span className='underline decoration-dashed tracking-wide decoration-pink-500'>FUTURISTIC</span> Products
        </p>
      </main>
    </div>
  )
}

export default Home
