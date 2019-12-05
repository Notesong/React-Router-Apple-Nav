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
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #444444;
  margin: 0;
  padding: 1rem 0;
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: white;
  font-size: 1rem;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

const StyledLinkIcon = styled(StyledLink)`
  font-size: 1.2rem;
`;

const Subnav = styled.div`
  background-color: #2d2d2d;
  margin: 0;
  padding: 1rem;
  color: white;
`;

function App() {
  return (
    <div className="App">
      <Nav>
        <StyledLinkIcon to='/'><i class="fab fa-apple"></i></StyledLinkIcon>
        <StyledLink to='/mac'>Mac</StyledLink>
        <StyledLink to='/ipad'>iPad</StyledLink>
        <StyledLink to='/iphone'>iPhone</StyledLink>
        <StyledLink to='/watch'>Watch</StyledLink>
        <StyledLink to='/tv'>TV</StyledLink>
        <StyledLink to='/music'>Music</StyledLink>
        <StyledLink to='/support'>Support</StyledLink>
        <StyledLinkIcon to='/search'><i class="far fa-search"></i></StyledLinkIcon>
        <StyledLinkIcon to='/shop'><i class="far fa-shopping-bag"></i></StyledLinkIcon>
      </Nav>
      <Subnav>
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
      </Subnav>
      
    </div>
  );
}

export default App;
