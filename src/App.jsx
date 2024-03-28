
import './App.css'
import Footer from './components/Footer/Footer'
import Nav from './components/Header/Nav'
import Hero from './components/Hero/Hero'
import Plan from './components/Main/Plan'
import Sponserd from './components/Sponserd/Sponserd'
import Testimonials from './components/Testimonials/Testimonials'

function App() {

  return (
    <div className='main'>
      <Nav />
      <Hero />
      <Plan />
      <Sponserd />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
