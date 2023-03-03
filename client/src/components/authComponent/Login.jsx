import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../../service/api";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const inputData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const data = await LoginAPI(user);

    if (!data.data.error) {
      alert(data.data.success);
      navigate("/admin");
    } else alert(data.data.error);
  };

  return (
    <div className="container my-4 w-50">
      <div className="p-4">
        <h1>Login Here..</h1>
      </div>
      <form
        className=""
        onSubmit={(e) => submitData(e)}
        action="/"
        method="POST"
      >
        <input
          type="email"
          name="email"
          className="form-control my-3"
          placeholder="Enter Your Email Address"
          onChange={(e) => inputData(e)}
        />

        <input
          type="password"
          name="password"
          className="form-control my-3"
          placeholder="Enter Your Password"
          onChange={(e) => inputData(e)}
        />
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-outline-primary w-50">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
