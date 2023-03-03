import React from "react";
import { NavLink } from "react-router-dom";

const Admin = () => {
  return (
    <div className="container my-4 text-dark">
      <div className="card text-center my-3">
        <div className="card-header bg-dark">.</div>
        <div className="card-body">
          <h5 className="card-title">Add The User</h5>
          <p className="card-text"></p>
          <NavLink to="/admin/adduser" className="btn btn-primary w-50">
            Add
          </NavLink>
        </div>
        <div className="card-footer text-muted bg-dark">.</div>
      </div>

      <div className="card text-center my-3">
        <div className="card-header bg-dark">.</div>
        <div className="card-body">
          <h5 className="card-title">View All Users</h5>
          <p className="card-text"></p>
          <NavLink to="/admin/viewuser" className="btn btn-primary w-50">
            View
          </NavLink>
        </div>
        <div className="card-footer text-muted bg-dark">.</div>
      </div>

      <div className="card text-center my-3">
        <div className="card-header bg-dark">.</div>
        <div className="card-body">
          <h5 className="card-title">Add Users Tasks</h5>
          <p className="card-text"></p>
          <NavLink className="btn btn-primary w-50">Task</NavLink>
        </div>
        <div className="card-footer text-muted bg-dark">.</div>
      </div>
    </div>
  );
};

export default Admin;
