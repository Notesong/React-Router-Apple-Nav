import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Mac from './components/Mac';
import IPad from './components/IPad';
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
        <Link to='/mac'>Mac</Link>
        <Link to='/ipad'>iPad</Link>
        <Link to='/iphone'>iPhone</Link>
        <Link to='/watch'>Watch</Link>
        <Link to='/tv'>TV</Link>
        <Link to='/music'>Music</Link>
        <Link to='/support'>Support</Link>
        <Link to='/search'><i class="far fa-search"></i></Link>
        <Link to='/shop'><i class="far fa-shopping-bag"></i></Link>
      </nav>
      <Route exact path='/' component={Home} />
      <Route path='/mac' component={Mac} />
      <Route path='/ipad' component={IPad} />
      <Route path='/iphone' component={IPhone} />
      <Route path='/watch' component={Watch} />
      <Route path='/tv' component={TV} />
      <Route path='/music' component={Music} />
      <Route path='/support' component={Support} />
      <Route path='/search' component={Search} />
      <Route path='/shop' component={Shop} />
    </div>
  );
}

export default App;
