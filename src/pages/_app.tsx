import '@/styles/_globals.scss'
import type { AppProps } from 'next/app'

import Layout from '@/components/_layout';

// Для обертки в provider
import { Provider } from "react-redux";
// Импортируется сама папка
import store from "@/store";

export default function App({ Component, pageProps }: AppProps) {

  return ( 
  <Provider store={ store }>
      <Layout>
        <Component {...pageProps} />
      </Layout>
  </Provider>
  )
}


