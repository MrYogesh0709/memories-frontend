import {
  AUTH,
  END_LOADING,
  LOGOUT,
  REGISTER_USER_ERROR,
  START_LOADING,
} from "../constants/actionTypes";

const authReducer = (
  state = { authData: null, showAlert: false, isLoading: false, message: "" },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case REGISTER_USER_ERROR:
      return { ...state, showAlert: true, message: action?.payload };
    case AUTH:
      //   console.log(action?.data);
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
