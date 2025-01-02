import Head from 'next/head'

import { Header } from '../components/Header'

import { Links } from '../components/Links'

import { Skills } from '../components/Skills'
import { ScrollTop } from '../components/ScrollTop'
import { Footer } from '../components/Footer'
import { Experience } from '../components/Experience'

import { Section } from '../styles/styles'
//import { Work } from '../components/Work'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tary Junior - Desenvolvedor Machine Learning</title>
      </Head>

      <Header />
      <Section>
        <Links />
        <ScrollTop />


        <Skills />
        <Experience />
        {/*<Work />*/}


      </Section>
      <Footer />
    </>
  )
}
