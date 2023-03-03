import axios from "axios";

const URL = "http://localhost:8000";

export const AddUserAPI = async (data) => {
  try {
    return await axios.post(`${URL}/adduser`, data);
  } catch (error) {
    console.log("Error While AddUser API Calling..");
  }
};

export const LoginAPI = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error While Login API");
  }
};

export const AllUsersAPI = async () => {
  try {
    return await axios.get(`${URL}/viewusers`);
  } catch (error) {
    console.log("Error While All API Fetch..");
  }
};
