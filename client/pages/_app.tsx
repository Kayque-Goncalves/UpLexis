import type { AppProps } from 'next/app'

import styles from '../styles/app.module.scss'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <section className={ styles.wrapper }>
      <main>
        <Component {...pageProps} />
      </main>
    </section>
  )
  
}

export default MyApp
