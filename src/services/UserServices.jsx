import React from "react";
import axios from "./axios";

export const UserServices = (page) => {
  return axios.get(`/api/users?page=${page}`);
};

export const postCreateUser = (nameUser, job) => {
  return axios.post("/api/users", { nameUser, job });
};

// export default { UserServices, postCreateUser };
