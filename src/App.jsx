import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import FindTransaction from './components/FindTransaction';
import Home from './components/Home';
const App=()=> {
  

  return (
    
    <Router>
      <div>

        
        <Navbar/>
        <div className='main-content'>
          <Routes>
            <Route path='/' exact Component={Home}/>
            <Route path='/find' Component={FindTransaction}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
