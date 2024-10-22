import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import VideoBackground from "./components/videobackground"

function App() {

  return (
    <div >
      <VideoBackground/>
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
