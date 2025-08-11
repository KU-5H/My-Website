import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;