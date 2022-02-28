import '../styles/globals.css'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>Netflix</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
