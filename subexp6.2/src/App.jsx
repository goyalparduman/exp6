import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z]+\.(com|in)$/;
  const passwordPattern = /^[A-Z](?=.*[0-9])(?=.*[!@#$%^&*]).{4,}$/;

  const validate = () => {
    let tempErrors = {};

    // Email Validation
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email.trim())) {
      tempErrors.email =
        "Email must not contain invalid characters and must end with .com or .in";
    }

    // Password Validation
    if (!formData.password.trim()) {
      tempErrors.password = "Password is required";
    } else if (!passwordPattern.test(formData.password)) {
      tempErrors.password =
        "Password must start with Capital, contain 1 number & 1 special character (min 5 chars)";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully!");
      console.log(formData);

      setFormData({
        email: "",
        password: ""
      });
      setErrors({});
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2>React Client Side Validation</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email}</span>
          )}
        </div>

        <br />

        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;