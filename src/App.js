import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert'
import  {useState} from 'react';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom'; 

function App() {
  //for alert 
  const [alert, setAlert] = useState(null)

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
          setAlert(null)
        }, 1000);
    }
    //for dark mode
  const [mode, setMode] = useState('light')
  // for toggle
  const toggle = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#03172a';
      showAlert('Dark mode is enable', 'success')
      document.title = "TextChange - Dark Mode" // to change the title of page
      setInterval (() => {
          document.title = 'hello janam dai '
      },2000)

      // to change the tittle in some period of time.
      setInterval (() => {
        document.title = "install TextChange Now";
      }, 1500);
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is enable', 'success')
      document.title = 'TextChange - Light Mode'
    }
  }
  return (
    <>
  <Router>
  <Navbar  about = 'About Us' mode = {mode} toggleMode = {toggle}/>
  <Alert alert= {alert} />
  <div className = 'container mb-3' > 
    <Switch>
        <Route exact path="/about" >
          <About/>
        </Route> 
        <Route exact path="/">
        <TextForm showAlert = {showAlert} heading ='type here to analyze below' mode = {mode} />
        </Route >

      
    </Switch>
  </div>
  </Router>

    </>
  );
}

export default App;
