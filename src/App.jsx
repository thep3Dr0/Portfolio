import { React } from 'react'
import Nav from './components/Nav/Nav'
import AboutMe from './components/AboutMe/AboutMe'
import Proyects from './components/Proyects/Proyects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App () {
  return (
    <main>
      <h2 className='capitalize'>pedro ragni</h2>
      <Nav/>
      <h1>Frase</h1>
      <AboutMe/>
      <Proyects/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
