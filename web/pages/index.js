import { Gallery, Hero, Layout } from '../components'

export default function Home() {
  return (
    <Layout>
      <main className='home-container'>
        <Hero />
        <Gallery />
      </main>
    </Layout>
  )
}
