import { AnyAction as Action } from "redux";
export default interface CommonActionCreator {
  handleFetchError(type: string, error: Error): Action;
  resetRedirectTask(): Action;
  setLocale(locale: string): Action; // Not in used.
}