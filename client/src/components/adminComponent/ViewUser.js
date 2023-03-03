import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AllUsersAPI } from "../../service/api";

const ViewUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    allUser();
  }, []);

  const allUser = async () => {
    const data = await AllUsersAPI();
    setUsers(data.data);
  };

  return (
    <div className="container my-3">
      <div className="row">
        {users.map((item, key) => (
          <div className="col-md-4" key={key}>
            <div
              className="card text-bg-dark mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-header">{item.username}</div>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Email: {item.email}</p>
                <p className="card-text">Phone: +91 {item.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <NavLink to="/admin" className="btn btn-outline-dark">
        Back
      </NavLink>
    </div>
  );
};

export default ViewUser;
