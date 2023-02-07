/*
    File Name   : _document.tsx
    Created     : on 15:55 at Feb 07, 2023
    Description : ポートフォリオサイト

    Copyright 2023 Shogo Kitada All Rights Reserved.
        contact@shogo0x2e.com (Twitter, GitHub: @shogo0x2e)

    I would be happy to notify me if you use part of my code.
*/


import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        {/*
          SEO 用の meta タグたちちゃんと書いておきたいね
        */}
        <meta name="description" content="This site provides detailed information about Shogo Kitada (shogo0x2e)." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* 
          favicon 生成に使ったサイト: 
          https://redketchup.io/favicon-generator 
        */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </Head>
      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
