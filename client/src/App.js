import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./components/adminComponent/AddUser";
import Admin from "./components/adminComponent/Admin";
import ViewUser from "./components/adminComponent/ViewUser";
import Login from "./components/authComponent/Login";
import Navbar from "./components/commonComponent/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/adduser" element={<AddUser />} />
        <Route path="/admin/viewuser" element={<ViewUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
