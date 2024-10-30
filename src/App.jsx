
import { useEffect } from 'react'
import './App.css'
import Navbar from './pages/Navbar'
import "./styles/global.css"
import Intro from './pages/Intro';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';


function App() {
  useEffect(()=> {

    // If the user has selecteda  theme, use that
    const selectedTheme = localStorage.getItem('theme');

    if (selectedTheme) {
      document.body.classList.add(selectedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.add('light');
    }

  }, []);

  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Intro/>
      <About/>
      <Work/>
      
      <Contact/>
    </div>
  )
}

export default App
