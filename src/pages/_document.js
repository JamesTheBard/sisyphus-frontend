import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Sisyphus Status</title>
      </Head>
      <body className="h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
