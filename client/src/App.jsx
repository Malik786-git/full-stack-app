import { useState } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [form, setForm] = useState({
    name: "",
    age: "",
  });

  const handleInputs = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const addNewUser = (e) => {
    e.preventDefault();
    try {
      axios.post(`http://localhost:5000/user/add-user`,form)
      .then(res => console.log(res))
      
    } catch (error) {
      console.log(error, 'unable to post new user...');
    }
    console.log(form, "user data...");
  };

  return (
    <div className="App">
      <form action="">
        <input
          type="text"
          name="name"
          placeholder="enter your name"
          value={form.name}
          onChange={handleInputs}
        />
        <br />
        <input
          type="Number"
          name="age"
          placeholder="enter your age"
          value={form.age}
          onChange={handleInputs}
        />

        <br />
        <button onClick={addNewUser}>Submit</button>
      </form>
    </div>
  );
}

export default App;
