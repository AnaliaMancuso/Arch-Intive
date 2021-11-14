import React from 'react'
import './App.css';
import HomeContainer from './components/HomeContainer/HomeContainer';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import ContactContainer from './components/ContactContainer/ContactContainer';
import NavBar from './components/NavBar/NavBarComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PortfolioContainer from './components/PortfolioContainer/PortfolioContainer';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<HomeContainer/>} />
            <Route path='/home' element={<HomeContainer/>} />
            <Route path='/aboutus' element={<AboutUsPage/>} />
            <Route path='/contact' element={<ContactContainer/>} />
            <Route path='/portfolio' element={<PortfolioContainer/>} />

            {/* <Route component={PageNotFound} /> */}
          </Routes>
          <FooterComponent/>
        </Router>
      </div>
    </div>
  );
}

export default App;
