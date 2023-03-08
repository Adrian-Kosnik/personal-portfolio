import './App.css';
import Header from './js/Header';
import Home from './js/Home';
import Project from './js/Project';
import Contact from './js/Contact';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <App />
      break
    case "/Home":
      component = <Home />
      break
    case "/Project":
      component = <Project />
      break
    case "/Contact":
      component = <Contact />
      break
  }
  return (
    <>
    <Header />
    {component}
    </>
  );
}

export default App;
