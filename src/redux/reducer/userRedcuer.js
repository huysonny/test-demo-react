import { INCREMENT, DECREMENT } from "../action/counterAction";
import { FETCH_USER_LOGIN_SUCCESS } from "../action/userAction";
import { USER_LOGOUT_SUCCESS } from "../action/userAction";
const INITIAL_STATE = {
  acount: {
    access_token: "",
    refresh_token: "",
    username: "",
    image: "",
    email: "",
    role: "",
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
        },
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default userReducer;
