import { Layout } from '../components'
import Hero from '../components/hero'

export default function Home() {
  return (
    <Layout>
      <main className='home-container'>
        <Hero />
      </main>
    </Layout>
  )
}
