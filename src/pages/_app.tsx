import { motion } from 'framer-motion'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import '../styles/globals.scss'


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .6
          }
        },
      }}>

    <Header />
     <Component {...pageProps} />
     </motion.div>

    </>

     )
}

export default MyApp
