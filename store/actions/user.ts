import UserActionCreator from "store/store_models/UserActionCreator";
import { Dispatch, AnyAction as Action } from "redux";
import fetch from "shared/fetch";
import { ACCESS_TOKEN_KEY, INVALID_TOKEN_ERROR } from "shared/constants";
import { IUser } from "common/models.d";
import actions from "../store_models/common";
import Gender from "common/Gender";
import { getStorage as localStorage } from "common/storage";
import RedirectTask from "store/actions/RedirectTask";
import AuthenticationResponse from  "store/store_models/response/AuthenticationResponse.d";

export const USER_REQUEST_START: string = "USER_REQUEST_START";
export const AUTHENTICATE_SUCCESS: string = "AUTHENTICATE_SUCCESS";
export const AUTHENTICATE_FAILED: string = "AUTHENTICATE_FAILED";
export const LOGIN_SUCCESS: string = "LOGIN_SUCCESS";
export const LOGIN_FAILED: string = "LOGIN_FAILED";
export const UPDATE_PROFILE_SUCCESS: string = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAILED: string = "UPDATE_PROFILE_FAILED";
export const SIGN_UP_SUCCESS: string = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILED: string = "SIGN_UP_FAILED";
export const LOGOUT: string = "LOGOUT";
export const UPLOAD_AVATAR_START = "UPLOAD_AVATAR_START";
export const UPLOAD_AVATAR_SUCCESS = "UPLOAD_AVATAR_SUCCESS";
export const UPLOAD_AVATAR_FAILED = "UPLOAD_AVATAR_FAILED";
export const RESET_UPLOADED_AVATAR = "RESET_UPLOADED_AVATAR";
export const UPDATE_PASSWORD_START = "UPDATE_PASSWORD_START";
export const UPDATE_PASSWORD_SUCCESS = "UPDATE_PASSWORD_SUCCESS";
export const UPDATE_PASSWORD_FAILED = "UPDATE_PASSWORD_FAILED";
export const SEND_OTP_START = "SEND_OTP_START";
export const SEND_OTP_SUCCESS = "SEND_OTP_SUCCESS";
export const SEND_OTP_COOL_DOWN = "SEND_OTP_COOL_DOWN";
export const SEND_OTP_FAILED = "SEND_OTP_FAILED";
const redirectToLogin: RedirectTask = {
  redirected: false,
  to: "/login"
};

const userActionCreator: UserActionCreator = {
  authenticate(): any {
    return (dispatch: Dispatch<any>): void => {
      localStorage()
        .getItem(ACCESS_TOKEN_KEY)
        .then((token: string | null) => {
          if (!token) {
            return Promise.reject(new Error(INVALID_TOKEN_ERROR));
          }
          dispatch({ type: USER_REQUEST_START });
          return fetch("/oauth2/profile", undefined, "GET", true);
        })
        .then((json) => {
          if (json.user) {
            dispatch({
              type: AUTHENTICATE_SUCCESS,
              user: json.user,
              others: json.others
            });
          } else {
            return Promise.reject(new Error(INVALID_TOKEN_ERROR));
          }
        })
        .catch((error: Error) => {
          localStorage().setItem(ACCESS_TOKEN_KEY, "");
          dispatch(actions.handleFetchError(AUTHENTICATE_FAILED, error));
        });
    };
  },
  login(email: string, password: string): any {
    return (dispatch: Dispatch<any>): any => {
      dispatch({ type: USER_REQUEST_START });
      return fetch("/oauth2/login", { email: email, password: password }, "POST")
        .then((json: AuthenticationResponse | RedirectTask) => {
          const response = json as AuthenticationResponse;
          const task = json as RedirectTask;
          if (response.user && response.accessToken) {
            dispatch({
              type: LOGIN_SUCCESS,
              user: response.user,
              others: response.others
            });
            return localStorage().setItem(ACCESS_TOKEN_KEY, response.accessToken);
          } else if (!task.redirected && task.to) {
            dispatch({
              type: SIGN_UP_SUCCESS,
              redirectTask: task
            });
          } else {
            return Promise.reject(new Error("toast.user.general_error"));
          }
        })
        .then(() => {
          console.log("toast.user.sign_in_successfully");
        })
        .catch((error: Error) => {
          dispatch(actions.handleFetchError(LOGIN_FAILED, error));
        });
    };
  },
  logout(): Action {
    localStorage().setItem(ACCESS_TOKEN_KEY, "");
    return {
      type: LOGOUT
    };
  },
  updateProfile(user: IUser): any {
    return (dispatch: Dispatch<any>): void => {
      localStorage()
        .getItem(ACCESS_TOKEN_KEY)
        .then((token: string | null) => {
          if (!token) {
            return Promise.reject(new Error(INVALID_TOKEN_ERROR));
          }
          dispatch({ type: USER_REQUEST_START });
          return fetch("/oauth2/profile", user, "POST", true);
        })
        .then((json) => {
          if (json) {
            dispatch({
              type: UPDATE_PROFILE_SUCCESS,
              user: json
            });
            console.log("toast.user.update_successfully");
          } else {
            return Promise.reject(new Error("toast.user.update_failed"));
          }
        })
        .catch((error: Error) => {
          dispatch(actions.handleFetchError(UPDATE_PROFILE_FAILED, error));
        });
    };
  },
  uploadAvatar(payload: Blob): any {
    return (dispatch: Dispatch<any>): void => {
      localStorage()
        .getItem(ACCESS_TOKEN_KEY)
        .then((token: string | null) => {
          if (!token) {
            return Promise.reject(new Error(INVALID_TOKEN_ERROR));
          }
          dispatch({ type: UPLOAD_AVATAR_START });
          return fetch("/api/avatar/create", payload, "PUT", true);
        })
        .then((json: any) => {
          if (json.url) {
            dispatch({
              type: UPLOAD_AVATAR_SUCCESS,
              url: json.url
            });
          } else {
            return Promise.reject(new Error("toast.user.upload_avatar_failed"));
          }
        }, (error: Error) => {
          dispatch(actions.handleFetchError(UPLOAD_AVATAR_FAILED, error));
        });
    };
  },
  resetAvatar(): Action {
    return {
      type: RESET_UPLOADED_AVATAR
    };
  },
  updatePassword(oldPassword: string, password: string, confirmPassword: string): any {
    return (dispatch: Dispatch<any>): void => {
      dispatch({ type: UPDATE_PASSWORD_START });
      fetch("/oauth2/password/update", {
        oldPassword,
        password,
        confirmPassword
      }, "POST", true)
        .then((json: any) => {
          dispatch({
            type: UPDATE_PASSWORD_SUCCESS,
            redirectTask: redirectToLogin
          });
          console.log("toast.user.update_successfully");
        })
        .catch((error: Error) => {
          dispatch(actions.handleFetchError(UPDATE_PASSWORD_FAILED, error));
        });
    };
  },
  resetPassword(email: string, OTP: string, password: string, confirmPassword: string): any {
    return (dispatch: Dispatch<any>): void => {
      dispatch({ type: UPDATE_PASSWORD_START });
      fetch("/oauth2/password/reset", {
        email,
        OTP,
        password,
        confirmPassword
      }, "POST", false)
        .then((json: any) => {
          dispatch({
            type: UPDATE_PASSWORD_SUCCESS,
            redirectTask: redirectToLogin
          });
          console.log("toast.user.update_successfully");
        })
        .catch((error: Error) => {
          dispatch(actions.handleFetchError(UPDATE_PASSWORD_FAILED, error));
        });
    };
  }
};

export default userActionCreator;