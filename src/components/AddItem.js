import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddItem = () => {
  const [addItem, setAddItem] = useState([]);

  useEffect(() => {
    const getAddItem = () => {
      axiosWithAuth()
        .get("https://afmarket.herokuapp.com/api/items")
        .then(res => {
          setAddItem(res.data);
        })
        .catch(err => {
          console.log("error", err.response);
        });
    };
    getAddItem();
  }, []);

  return (
    <>
      <p>{addItem}</p>
      <button onClick={() => addItem}>Add</button>
    </>
  );
};

export default AddItem;
