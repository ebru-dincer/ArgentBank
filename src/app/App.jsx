import "./App.css";
import NavBar from "../common/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../common/Footer";

/**
 * This component renders the landing page.
 * @returns {jsx} <App />
 */
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
  );
}

export default App;
