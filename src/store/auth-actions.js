import { authActions } from "./auth-slice";

export const loginAction = (userDetails) => (dispatch) => {
  localStorage.setItem("userDetails", JSON.stringify(userDetails));
  dispatch(authActions.login(userDetails));
};

export const confirmLogin = (userDetails) => (dispatch) => {
  dispatch(authActions.login(userDetails));
};

export const logoutAction = () => (dispatch) => {
  localStorage.removeItem("userDetails");
  dispatch(authActions.logout());
};
