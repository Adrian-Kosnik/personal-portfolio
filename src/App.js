import './App.css';
import Header from './Header/Header';
import Home from './Pages/Home';
import ProjectGallery from './Pages/ProjectGallery';
import Contact from './Pages/Contact';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProjectGallery" element={<ProjectGallery />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
