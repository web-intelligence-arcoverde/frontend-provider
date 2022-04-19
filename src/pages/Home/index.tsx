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
    </div>
  )
}

export default Home
