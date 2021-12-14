import React, { useState } from 'react';
import MainPage from './Pages/MainPage/MainPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Header/Header';
import AboutUs from './Pages/AboutUs/AboutUs';
import Programms from './Pages/Programms/Programms';


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/MainPage'>
            <MainPage />
          </Route>
          <Route path='/AboutUs'>
            <AboutUs />
          </Route>
          <Route path='/Programms'>
            <Programms />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
