import './App.css'
import NavBar from '../common/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../common/Footer'


function App() {

  return (
    <>
        <NavBar />
        <main>
          <Hero />
          <Features />
        </main>
        <Footer />
    </>
  )
}

export default App
