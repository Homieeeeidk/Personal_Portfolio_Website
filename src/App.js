import Navbar from './components/Navbar/navbar'
import Intro from './components/Intro/into';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import Contact from './components/Contact/contact'
import Projects from './components/Projects/Projects';
import ProjectDisplay from './components/Works/ProjectDisplay';
import Footer from './components/Footer/footer';
import Proj1 from './components/proj1/proj1';
import Proj2 from './components/proj2/proj2';
import Proj3 from './components/proj3/proj3';
import Proj4 from './components/proj4/proj4';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        {/* <Intro/> */}
        <Routes>
          <Route path='/' element={<Intro/>}/>
        </Routes>
        <Routes>
          <Route path='/' element={<Works/>}/>
        </Routes>
      </Router>
      <Proj1/>
      <Proj2/>
      <Proj3/>
      <Proj4/>
       <Contact/>
      <Footer/>
      
      
    </div>
  );
}


export default App;

 