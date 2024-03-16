import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Header from './components/Header'
import Login from './components/Login'


function App() {
  return (
    <div>
      <Header/>
      <Routes >
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Login/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
