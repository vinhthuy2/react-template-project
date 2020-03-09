import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './layout/footer/Footer';
import Content from './layout/content/Content';
import Header from './layout/header/Header';
import classes from './App.module.css';
function App() {
  return (
    <Router>
      <div className={classes.main}>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
