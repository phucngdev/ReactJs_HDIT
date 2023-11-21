import React from "react";
import axios from "./axios";

const UserServices = (page) => {
  return axios.get(`/api/users?page=${page}`);
};

export default UserServices;
