import './App.css'
import {Info} from './Info.jsx'
import {About} from './About.jsx'
import {Interests} from './Interests.jsx'
import {Footer} from './Footer.jsx'

function App() {
  return (
    <main className='container'>
      <Info />
      <About />
      <Interests />
      <Footer />
    </main>
  )
}

export default App
