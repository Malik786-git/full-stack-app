import axios from "axios";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

const AddUser = () => {
  const [userField, setUserField] = useState({
    name: "",
    age: "",
  });

  const handleInputs = (e) => {
    setUserField({ ...userField, [e.target.name]: e.target.value });
  };

  const postNewUser = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`http://localhost:5000/user/add-user/`, userField)
        .then((res) => { 
          if (res.status === 201) {
             alert('successfully added!')
          }
    });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter Name"
            name= "name"
            value={userField.name}
            onChange={handleInputs}
          />
          <br />
          <br />
          <input
            type="number"
            placeholder="Enter Age"
            name= "age"
            value={userField.age}
            onChange={handleInputs}
          />
          <br />
          <br />
          <button onClick={postNewUser}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddUser;
