import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddItem = () => {
  const [addItem, setAddItem] = useState([]);

  useEffect(() => {
    const getAddItem = () => {
      axiosWithAuth()
        .get("https://afmarket.herokuapp.com/api/items")
        .then(res => {
          console.log("from addItem", res.data);
          //setAddItem(res);
        })
        .catch(err => {
          console.log("error", err.response);
        });
    };
    getAddItem();
  }, []);

  return (
    <>
      <p></p>
    </>
  );
};

export default AddItem;
