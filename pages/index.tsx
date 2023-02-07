/*
    File Name   : index.tsx
    Created     : on 18:25 at Feb 06, 2023
    Description : ポートフォリサイトの index

    Copyright 2023 Shogo Kitada All Rights Reserved.
        contact@shogo0x2e.com (Twitter, GitHub: @shogo0x2e)

    I would be happy to notify me if you use part of my code.
*/
import Head from "next/head"
import Link from "next/link"
import styles from "@/styles/Home.module.scss"
import Naviagtion from "@/components/Navigation"

export default function Home() {
  return (
    <>
      <Head>
        <title>Shogo Kitada</title>
      </Head>
      <main className={styles.main}>
        <Naviagtion />
        <Link href="/works">
          作品たちはこちら
        </Link>
      </main>
    </>
  )
}
