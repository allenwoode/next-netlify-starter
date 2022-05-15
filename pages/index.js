import Head from 'next/head'
import Header from '@components/Header1'
import Footer from '@components/Footer'

const styles = {
  container: ``,
  main: ``,
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <Header />
      </div>
      <Footer />
    </div>
  )
}
