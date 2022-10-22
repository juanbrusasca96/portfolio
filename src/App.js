// import logo from './logo.svg';
// import './App.css';
import './style.css';
import "animate.css/animate.min.css";
import Navbar from './components/navbar/Navbar';
import AboutMe from './components/aboutMe/AboutMe';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <AboutMe />
      <Navbar />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
