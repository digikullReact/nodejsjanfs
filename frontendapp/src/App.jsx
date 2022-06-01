import { useState,useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from "axios";

function App() {

  const [count, setCount] = useState("")
  useEffect(()=>{
    axios.get("http://localhost:5500",{data:"johnn"}).then(response=>{
      console.log(response.data);
      setCount(response.data);
    })

  },[])


  return (
    <div className="App">

{count}


     
    </div>
  )
}

export default App
