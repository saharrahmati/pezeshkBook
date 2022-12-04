import Head from 'next/head'
import PostDetailsContainer from '../containers/PostDetails'
import styles from '../styles/Home.module.scss'

export default function Details() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pezeshk Book</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <PostDetailsContainer />
      </main>
    </div>
  )
}