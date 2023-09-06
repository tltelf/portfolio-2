import Head from 'next/head';
import '../styles/globals.css';
import Layout from '../components/Layout';
import Transition from '../components/Transition';

import { useRouter } from 'next/router'

import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
  <Layout>
    <Head>
      <link rel='shortcut icon' href='/favicon.ico' />
      <title>Mark | Personal Portfolio</title>
      <meta name="description" content="Mark is a web-developer with 1 year of experience." />
    </Head>
    <AnimatePresence mode='wait'>
      <motion.div key={router.route} className='h-full'>
        <Transition />
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  </Layout> )
}

export default MyApp;
