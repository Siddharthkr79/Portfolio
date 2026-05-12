import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import About from './components/About'
import Skill from './components/Skill'
import ProjectsGrid from './components/projects/ProjectsGrid'
import Recommendations from './components/Recommendations'
import Contacts from './components/Contacts'
import Footer from './components/Footer';



function App() {

  return (
    <>
    <Navbar />
    <Hero/>
    <About/>
    <Skill/>
    <ProjectsGrid/>
    <Recommendations/>
    <Contacts/>
    <Footer/>
  </>
  )
}

export default App
