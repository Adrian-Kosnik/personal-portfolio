import './App.css';
import Home from './Pages/Home';
import ProjectGallery from './Pages/ProjectGallery';
import Contact from './Pages/Contact';
import Navbar from './Header/Navbar';
import { Route, Routes } from "react-router-dom";
import Pointer from './Header/Pointer';

function App() {

  return (
    <div className='appContainer'>
      <div className="spacer"></div>
      <div className='container col-3'>
        <Navbar />
        <Pointer />
      </div>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProjectGallery" element={<ProjectGallery />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
