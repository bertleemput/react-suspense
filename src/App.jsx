import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import './app.css';

import PageTemplate from './PageTemplate'

import MainPage from './components/main/MainPage';
const AboutPage = React.lazy(() => import('./components/about/AboutPage'));

const Nav = styled.nav`
  background-color: black;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    color: white;
    text-decoration: none;
    margin: 10px;
  }
`

const Content = styled.div`
  flex: 1;
  margin: 10px 30px;
`

function App() {
  return (
    <Router>
      <PageTemplate>
        <Nav>
            <Link to="/">Home</Link>
            <Link to="/about/">About</Link>
        </Nav>

        <Content>
          <Suspense fallback={<div>Loading...</div>} >
            <Route path="/" exact component={MainPage} />
            {/* Using props in the following line to suppress an invalid error message on the console. */}
            <Route path="/about/" component={props => <AboutPage {...props} />} />
          </Suspense>
        </Content>
      </PageTemplate>
    </Router>
  );
}

export default App;
