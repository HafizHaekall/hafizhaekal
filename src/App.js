import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectsPage from './Projects';
import Berhasil from './components/Berhasil';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
// import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Header />
                <Nav />
                <Banner />
                <About />
                <Skills />
                {/* <Services /> */}
                <Work />
                <Contact />
                <div className='h-[10vh] lg:h-[25vh] xxl:h-[0]'></div>
              </div>
            }
          />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/berhasil" element={<Berhasil />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
