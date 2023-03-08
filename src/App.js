import './App.css';
import Header from './js/Header';
import Home from './js/Home';
import Project from './js/Project';
import Contact from './js/Contact';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
