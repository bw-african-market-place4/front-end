import React from "react";
import axios from "axios";

import AddItem from "./AddItem";

const MainPage = () => {
  axios
    .get("https://api.github.com/users/Callisto1981/followers")
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));

  return (
    <div className="main-page">
      <h1>Add Item Here</h1>
      <AddItem />
    </div>
  );
};

export default MainPage;
