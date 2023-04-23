/*
    File Name   : Navigation.tsx
    Created     : on 16:17 at Feb 07, 2023
    Description : グローバルナビゲーションのコンポーネント

    Copyright 2023 Shogo Kitada All Rights Reserved.
        contact@shogo0x2e.com (Twitter, GitHub: @shogo0x2e)

    I would be happy to notify me if you use part of my code.
*/

import styles from "../styles/Navigation.module.scss"
import { Inconsolata, Open_Sans } from 'next/font/google'

const fontLogo = Inconsolata({
  weight: "500",
  subsets: ["latin"],
});

const fontButton = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function Navigation() {
  return (
    <nav className={styles.navigator}>
      <p className={`${styles.logo} ${fontLogo.className}`}>
        Shogo0x2e
      </p>
      <ol className={styles.button_container}>
        <li className={`${fontButton.className}`}> Home </li>
        <li className={`${fontButton.className}`}> Works </li>
      </ol>
    </nav>
  )
}