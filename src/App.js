import React, { useState } from 'react';
import MainPage from './Pages/MainPage/MainPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Header/Header';
import AboutUs from './Pages/AboutUs/AboutUs';
import Programms from './Pages/Programms/Programms';
import IndiPage from './Pages/IndiPage/IndiPage';
import Footer from '../src/Pages/Footer/Footer'
import './App.css'



const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/MainPage'>
            <MainPage />
          </Route>
          <Route path='/indiPage'>
            <IndiPage />
          </Route>
          <Route path='/Programms'>
            <Programms />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
