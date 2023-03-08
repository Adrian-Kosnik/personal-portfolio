import './App.css';
import Header from './Header/Header';
import Home from './Pages/Home';
import ProjectGallery from './Pages/ProjectGallery';
import Contact from './Pages/Contact';
import Navbar from './Header/Navbar';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <div className='mainContainer container'>
        <div className='container col-3'>
          <Navbar />
        </div>
      </div>
      {/* <Header /> */}
      {/* <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProjectGallery" element={<ProjectGallery />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div> */}
    </>
  );
}

export default App;
