import { useState,useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from "axios";
import {

  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Socket from './components/Socket';

function App() {

  


  return (
    <div className="App">
       <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>

      <Route path="/home" element={<Home />}/>

      <Route path="/socket" element={<Socket />}/>
      
    </Routes>


     
    </div>
  )
}

export default App
