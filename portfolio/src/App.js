import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About/About';
import Skill from './Components/Skills/Skill';
import Projects from './Components/Projects/Project';
import Contact from './Components/Contact/Contact';
import Home from './Components/HeroSection/Home';
function App(){
  return(
    <div className="App">
   <Navbar/>
   <Home/>
   <About/>
   <Skill/>
   <Projects/>
   <Contact/>
    </div>
  )
}
export default App;