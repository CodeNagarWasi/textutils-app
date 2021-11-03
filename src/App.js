
import { useState } from 'react/cjs/react.development';
import './App.css';
import Alerts from './components/Alerts';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [alerts, setAlerts] = useState(null)

  const showAlerts = (message ,type)=>{
     setAlerts({
       msg: message,
       type: type
     })
     setTimeout(() => {
       setAlerts(null)
     }, 1500);
  }

  const toggleMode = ()=>{
    if(Mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#2f363d'
      document.body.style.border = 'black'
      document.body.style.color = 'white'
      showAlerts("Dark mode is been enabled","success")

    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlerts("Dark mode is been disabled", "warning")
    }
  }
  const [Mode, setMode] = useState('light')
  return (
    <>
     <Navbar title="TextUtilsIO" mode={Mode} toggleMode={toggleMode}/>
       <Alerts alerts={alerts}/>
     <div className="container my-4">
     {/* <Switch> */}
          {/* <Route exact path="/about">
            <About /> */}
          {/* </Route>
          <Route exact path="/"> */}
            <TextForm showAlert={showAlerts} heading="Enter the text to analyze -- "/>
          {/* </Route>
        </Switch> */}
        {/* <About></About> */}
     </div>
     </>
  );
}

export default App;
