import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import OpenWeather from '../components/openweather/openWeather'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      <OpenWeather></OpenWeather>

      </main>

    </div>
  )
}
