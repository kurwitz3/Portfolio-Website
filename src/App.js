import React from 'react'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import About from './components/About'


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
            <Switch>
               <Route exact path='/' component={Home}/>
               <Route path='/Portfolio' component={Portfolio}/>
               <Route path='/Resume' component={Resume}/>
               <Route path='/About' component={About}/>
            </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
