import Chat from 'src/components/atomic/Chat'
import About from 'src/components/organisms/About'
import Footer from 'src/components/organisms/Footer'
import Header from 'src/components/organisms/Header'
import OurService from 'src/components/organisms/OurService'
import Partners from 'src/components/organisms/Partners'

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <OurService />
      <Partners />
      <Footer />
      <Chat />
    </div>
  )
}

export default Home
