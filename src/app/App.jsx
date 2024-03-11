import './App.css'
import NavBar from '../common/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'


function App() {

  return (
    <>
      <body>
        <NavBar />
        <main>
          <Hero />
          <Features />
        </main>
        <Footer />
      </body>
    </>
  )
}

export default App
