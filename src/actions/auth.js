import {
  AUTH,
  END_LOADING,
  REGISTER_USER_ERROR,
  START_LOADING,
} from "../constants/actionTypes";
import * as api from "../api/index";
export const signin = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.signin(formData);
    dispatch({ type: AUTH, data });
    navigate("/");
    dispatch({ type: END_LOADING });
  } catch (error) {
    // console.log(error.response.data);
    dispatch({
      type: REGISTER_USER_ERROR,
      payload: error.response.data.message,
    });
    dispatch({ type: END_LOADING });
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.signup(formData);
    dispatch({ type: AUTH, data });
    dispatch({ type: END_LOADING });
    navigate("/");
  } catch (error) {
    // console.log(error);
    dispatch({
      type: REGISTER_USER_ERROR,
      payload: error.response.data.message,
    });
    dispatch({ type: END_LOADING });
  }
};
