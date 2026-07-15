import { ThemeProvider } from './context/ThemeContext';
import ScrollProgressBar from './components/ScrollProgressBar';
import Loader from './components/Loader';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import GithubSection from './components/GithubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

function App() {
  return (
    <ThemeProvider>
      <Loader />
      <ScrollProgressBar />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <GithubSection />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
