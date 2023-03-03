import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./components/adminComponent/AddUser";
import Admin from "./components/adminComponent/Admin";
import Login from "./components/authComponent/Login";
import Navbar from "./components/commonComponent/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Admin />} />
        <Route path="/adduser" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
