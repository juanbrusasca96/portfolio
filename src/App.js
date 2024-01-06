// import logo from './logo.svg';
// import './App.css';
import './style.css';
import "animate.css/animate.min.css";
import Navbar from './components/navbar/Navbar';
import AboutMe from './components/aboutMe/AboutMe';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { LanguageProvider } from './helpers/LanguageContext';
import { NavbarFixedProvider } from './helpers/NavbarFixedContext';
import { Grid } from '@mui/material';
import Experience from './components/experience/Experience';

function App() {
  return (
    <LanguageProvider>
      <NavbarFixedProvider>
        <div className="App">
          <Grid className='background'>
            <AboutMe />
            <Navbar />
          </Grid>
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </NavbarFixedProvider>
    </LanguageProvider>
  );
}

export default App;
