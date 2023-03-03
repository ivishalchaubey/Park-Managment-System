const Login = () => {
  return (
    <div className="container my-4 w-50">
      <div className="p-4">
        <h1>Login Here..</h1>
      </div>
      <form className="">
        <input
          type="email"
          name=""
          className="form-control my-3"
          placeholder="Enter Your Email Address"
        />

        <input
          type="password"
          name=""
          className="form-control my-3"
          placeholder="Enter Your Password"
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
