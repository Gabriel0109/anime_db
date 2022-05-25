import type { NextPage } from 'next'
import { motion } from 'framer-motion';
import Head from 'next/head'
import Image from 'next/image'
import { Banner } from '../components/Banner'

const Home: NextPage = () => {
  return (<>
    <Banner>
        <h1 >
          Hello
        </h1>
    </Banner>

  </>
  )
}

export default Home
