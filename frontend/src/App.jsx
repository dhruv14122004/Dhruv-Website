import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import { BackgroundBeams } from "./components/ui/background-beams";


function App() {
  return (
    <div className="relative">
      <BackgroundBeams className="-z-10" />
      <div>
        <Header/>
        <Banner/>
        <About/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
        <Menu/>
      </div>
    </div>
  )
}

export default App
