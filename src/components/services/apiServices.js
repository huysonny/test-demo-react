import axios from "../utils/axiosCustomize";

const postCreateNewUser = (email, passWord, username, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", passWord);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("api/v1/participant", data);
};
const getAllUsers = () => {
  return axios.get("api/v1/participant/all");
};
const putUpdateUser = (id, username, role, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.put("api/v1/participant", data);
};
const deleteUsers = (userId) => {
  return axios.delete("api/v1/participant", { data: { id: userId } });
};
const getUsersPaginate = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};
export {
  postCreateNewUser,
  getAllUsers,
  putUpdateUser,
  deleteUsers,
  getUsersPaginate,
};
