import React, { useState } from "react";
import { AddUserAPI } from "../../service/api";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const myInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const data = await AddUserAPI(user);
    console.log(data.data);
    if (!data.data.error) {
      alert(data.data.success);
      navigate("/admin");
    } else {
      setUser({
        username: "",
        name: "",
        email: "",
        phone: "",
        password: "",
      });
      alert(data.data.error);
    }
  };
  return (
    <div className="w-50 m-auto">
      <div className="m-4 p-4">
        <h1>Add The User Here..</h1>
      </div>
      <form onSubmit={(e) => submitForm(e)}>
        <input
          type="text"
          name="username"
          className="form-control my-3"
          placeholder="Enter Your username"
          onChange={(e) => myInput(e)}
          value={user.username}
        />

        <input
          type="text"
          name="name"
          className="form-control my-3"
          placeholder="Enter Your Full Name"
          onChange={(e) => myInput(e)}
          value={user.name}
        />

        <input
          type="email"
          name="email"
          className="form-control my-3"
          placeholder="Enter Your email"
          onChange={(e) => myInput(e)}
          value={user.email}
        />

        <input
          type="text"
          name="phone"
          className="form-control my-3"
          placeholder="Enter Your Phone Number"
          onChange={(e) => myInput(e)}
          value={user.phone}
        />

        <input
          type="password"
          name="password"
          className="form-control my-3"
          placeholder="Enter Your password"
          onChange={(e) => myInput(e)}
          value={user.password}
        />

        <input
          type="submit"
          value="Add User"
          className="form-control my-3 bg-success"
        />
      </form>
      <NavLink to="/admin" className="btn btn-outline-dark">
        Back
      </NavLink>
    </div>
  );
};

export default AddUser;
