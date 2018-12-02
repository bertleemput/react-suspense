import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import MainPage from './components/main/MainPage';
const AboutPage = React.lazy(() => import('./components/about/AboutPage'));

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<div>loading...</div>} >
          <Route path="/" exact component={MainPage} />
          <Route path="/about/" component={AboutPage} />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
