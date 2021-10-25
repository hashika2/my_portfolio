import '../styles/globals.css'
import 'antd/dist/antd.css';

import type { AppProps } from 'next/app'
import HomeLayout from '../src/components/Layout/HomeLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HomeLayout>
  <Component {...pageProps} />
  </HomeLayout>
  )
}
export default MyApp
