import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SignUp() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = userData;

    if (!name || !email || !password) {
      alert("Please fill in all fields");
    }
    try {
      await axios.post("http://localhost:5000/api/auth/signup", userData);
      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Error during registration");
    }
  }
  return (
    <div className="container">
      <h1>Sign - up</h1>
      <form onSubmit={handleSubmit}>
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userData.name}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userData.password}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <button type="submit">Register</button>

        <span>
          Already have an account ?<Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}

export default SignUp;
