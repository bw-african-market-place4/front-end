import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ContainerDiv } from './styled/Styled';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className='App'>
    <ContainerDiv>
    <Navbar />
  <Route exact path='/' component={Login} />
  <Route exact path='/register' component={Register} />
 
    </ContainerDiv>
    </div>
    </Router>
  );
}

export default App;
