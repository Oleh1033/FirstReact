import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Content from './components/Content'



const App = () => {
  return (
      <div className='wrapper'>
        <Header />
        <Sidebar />
        <Content/>
      </div>);
};

export default App;
