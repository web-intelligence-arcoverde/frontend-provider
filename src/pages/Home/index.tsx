import Chat from 'src/components/atomic/Chat'
import About from 'src/components/organisms/About'
import Footer from 'src/components/organisms/Footer'
import Header from 'src/components/organisms/Header'
import OurService from 'src/components/organisms/OurService'
import Partners from 'src/components/organisms/Partners'
import Support from 'src/components/organisms/Support'

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <OurService />
      <Support />
      <Partners />
      <Footer />
      <Chat />
    </div>
  )
}

export default Home
