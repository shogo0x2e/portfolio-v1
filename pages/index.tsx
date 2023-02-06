import Head from "next/head"
import Link from "next/link"
import styles from "@/styles/Home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Shogo Kitada</title>
        <meta name="description" content="This site provides detailed information about Shogo Kitada (shogo0x2e)." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* 
          favicon 生成に使ったサイト: 
          https://redketchup.io/favicon-generator 
        */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className={styles.main}>
        <Link href="/works">
          作品たちはこちら
        </Link>
      </main>
    </>
  )
}
