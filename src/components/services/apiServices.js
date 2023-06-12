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
export { postCreateNewUser, getAllUsers };
