import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <header>
        <Header  />
    </header>
        <Routes>
          <Route path='/'  element={<About />}  />
          <Route path='/project'  element={<Projects  />}  />
          <Route path='/contact'  element={<Contact />}  />
        </Routes>
    <footer>
        <Footer  />
    </footer>
    </BrowserRouter>
  )
}

export default App
