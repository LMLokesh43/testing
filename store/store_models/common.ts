import CommonActionCreator from "store/store_models/CommonActionCreator";
import { AnyAction as Action } from "redux";
import { INVALID_TOKEN_ERROR } from "shared/constants";

export const RESET_REDIRECT: string = "RESET_REDIRECT";
export const SET_LOCALE: string = "SET_LOCALE";

const actions: CommonActionCreator = {
  handleFetchError(type: string, error: Error): Action {
    if (error.message === INVALID_TOKEN_ERROR) {
      // Suppress not logged-in error.
      return { type };
    }
    return { type };
  },
  resetRedirectTask(): Action {
    return {
      type: RESET_REDIRECT
    };
  },
  setLocale(locale: string): Action {
    localStorage.setItem("locale",locale);
    return {
      type: SET_LOCALE,
      locale: locale
    };
  },
};

export default actions;