import { AnyAction as Action } from "redux";
import {IUser} from "common/models.d";
export default interface UserActionCreator {
    // allowConsent(transactionId: string, OTP?: string): any;
    // denyConsent(): Action;
    authenticate(): any;
    updateProfile(user: IUser): any;
    login(email: string, password: string): any;
    logout(): Action;
    uploadAvatar(payload: Blob): any;
    resetAvatar(): Action;
    updatePassword(oldPassword: string, password: string, confirmPassword: string): any;
    resetPassword(email: string, OTP: string, password: string, confirmPassword: string): any;
}