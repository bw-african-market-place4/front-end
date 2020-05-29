import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ContainerDiv } from "./styled/Styled";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";

import PrivateRoute from "./components/PrivateRoute";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Router>
      <ContainerDiv>
        <Navbar />
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
      </ContainerDiv>
      <PrivateRoute exact path="/mainpage" component={MainPage} />
    </Router>
  );
}

export default App;
