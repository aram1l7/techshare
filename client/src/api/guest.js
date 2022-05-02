import axios from "axios";

const client = axios.create();

export const register = (data) => {
  return client.post("/api/users", data);
};
