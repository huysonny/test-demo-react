import {
  FETCH_USER_LOGIN_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
} from "../action/userAction";
import { USER_LOGOUT_SUCCESS } from "../action/userAction";
const INITIAL_STATE = {
  acount: {
    access_token: "",
    refresh_token: "",
    username: "",
    image: "",
    email: "",
    role: "",
    password: "",
  },
  isAuthenticated: false,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_LOGIN_SUCCESS:
      console.log("check actions", action);
      return {
        ...state,
        account: {
          access_token: action?.payload?.DT?.access_token,
          refresh_token: action?.payload?.DT?.refresh_token,
          username: action?.payload?.DT?.username,
          image: action?.payload?.DT?.image,
          email: action?.payload?.DT?.email,
          role: action?.payload?.DT?.role,
          password: action?.payload?.DT?.password,
        },
        isAuthenticated: true,
      };

    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        acount: {
          access_token: "",
          refresh_token: "",
          username: "",
          image: "",
          email: "",
          role: "",
          password: "",
        },
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default userReducer;
