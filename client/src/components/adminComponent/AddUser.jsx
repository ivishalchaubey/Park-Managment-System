import React from "react";

const AddUser = () => {
  return (
    <div className="w-50 m-auto">
      <div className="m-4 p-4">
        <h1>Add The User Here..</h1>
      </div>
      <form>
        <input
          type="text"
          name=""
          className="form-control my-3"
          placeholder="Enter Your username"
        />

        <input
          type="text"
          name=""
          className="form-control my-3"
          placeholder="Enter Your Full Name"
        />

        <input
          type="email"
          name=""
          className="form-control my-3"
          placeholder="Enter Your email"
        />

        <input
          type="text"
          name=""
          className="form-control my-3"
          placeholder="Enter Your Phone Number"
        />

        <input
          type="password"
          name=""
          className="form-control my-3"
          placeholder="Enter Your password"
        />

        <input
          type="submit"
          value="Add User"
          className="form-control my-3 bg-success"
        />
      </form>
    </div>
  );
};

export default AddUser;
