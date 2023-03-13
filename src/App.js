import './App.css';
import Home from './Pages/Home';
import ProjectGallery from './Pages/ProjectGallery';
import Contact from './Pages/Contact';
// import Skills from './Pages/Skills';
import Navbar from './Header/Navbar';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className='appContainer'>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal-portfolio" element={<Home />} />
          {/* <Route path="/Skills" element={<Skills />} /> */}
          <Route path="/ProjectGallery" element={<ProjectGallery />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
