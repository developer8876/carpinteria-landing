import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Process from '@/components/Process'
import Materials from '@/components/Materials'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Process />
        <Materials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
