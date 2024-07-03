import "./App.css";
import About from "./components/About";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {


  const [mode, setMode] = useState('light')
  const [modeText, setModeText] = useState('dark')
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })
  const [alert, setAlert] = useState(null)


  let showAlert = (message,type)=>{
    
    setAlert({
        msg:message,
        type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
}

  function toggleMode() {
    if (mode === 'light' && modeText === 'dark') {
      setMode('dark')
      setModeText('light')
      document.body.style.backgroundColor = "#05223b"
      setMyStyle({
        color: 'white',
        backgroundColor: '#05223b' })
      showAlert("Dark Mode Enable","success")

    }
    else {
      setMode('light')
      setModeText('dark')
      document.body.style.backgroundColor = "White"
      setMyStyle({
        color: 'black',
        backgroundColor: 'white' })
      showAlert("Light Mode Enable","success")

    }
  }

   
  return (
    <>
    <Router>
           <Navbar title="Textila" about="About Us" toggleMode={toggleMode} mode={mode} modeText={modeText} />
      <Alerts alert ={alert}/>
      <Routes>
      <Route exact path="/about" element = {<About myStyle={myStyle} />
}> 
          </Route>
          <Route exact path="/" element = {<Textform myStyle={myStyle} showAlert={showAlert} />
}>
          </Route>

      </Routes>
          </Router>

     
    </>
  );
}

export default App;
