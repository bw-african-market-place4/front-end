import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddItem = () => {
  const [addItem, setAddItem] = useState([]);

  useEffect(() => {
    const getAddItem = () => {
      axiosWithAuth()
        .get("http://localhost:5000/api/colors")
        .then(res => {
          setAddItem(res);
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
