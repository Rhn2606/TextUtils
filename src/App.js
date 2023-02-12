import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) =>
  {

  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0e0d27';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }

  }
  return (
    <>
    <Navbar title ="TextUtils" mode ={mode} toggleMode={toggleMode}/>
    <Alert alert = "this is an alert"/>
    <div className="container my-3 " >
    <TextForm heading = "Enter the text to analyze"  mode ={mode}/>*
    </div>
    
    </>
  );
}

export default App;
