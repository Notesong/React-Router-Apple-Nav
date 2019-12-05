import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Mac from './components/Mac';
import Ipad from './components/IPad';
import IPhone from './components/IPhone';
import Watch from './components/Watch';
import TV from './components/TV';
import Music from './components/Music';
import Support from './components/Support';
import Search from './components/Search';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'><i class="fab fa-apple"></i></Link>
        <Link to=''>Mac</Link>
        <Link to=''>iPad</Link>
        <Link to=''>iPhone</Link>
        <Link to=''>Watch</Link>
        <Link to=''>TV</Link>
        <Link to=''>Music</Link>
        <Link to=''>Support</Link>
        <Link to=''><i class="far fa-search"></i></Link>
        <Link to=''><i class="far fa-shopping-bag"></i></Link>
      </nav>
      <Route exact path='/' component={Home} />

    </div>
  );
}

export default App;
