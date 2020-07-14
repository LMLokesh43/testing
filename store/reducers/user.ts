import { AnyAction as Action } from "redux";
import { AUTHENTICATE_SUCCESS, LOGOUT, LOGIN_SUCCESS, UPDATE_PROFILE_SUCCESS, USER_REQUEST_START, UPLOAD_AVATAR_START, UPLOAD_AVATAR_SUCCESS, UPLOAD_AVATAR_FAILED, RESET_UPLOADED_AVATAR, UPDATE_PASSWORD_START } from "../actions/user";
import UserState from "store/store_models/UserState";
import { IUser } from "common/models.d";

const initialState: UserState = {
    loading: false,
    currentUser: undefined,
    uploadingAvatar: false,
    uploadedAvatarUrl: undefined
};

const SEND_OTP_INTERVAL: number = 60;

const userState = (state: UserState = initialState, action: Action): UserState => {
    switch (action.type) {
        case LOGOUT:
            return initialState;
        case AUTHENTICATE_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.user
            };
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.user
            };
        case USER_REQUEST_START:
        case UPDATE_PASSWORD_START:
            return {...state, loading: true};
        case UPLOAD_AVATAR_START:
            return {...state, uploadingAvatar: true};
        case UPLOAD_AVATAR_FAILED:
            return {...state, uploadingAvatar: false};
        case UPLOAD_AVATAR_SUCCESS:
            return {
                ...state,
                uploadingAvatar: false,
                uploadedAvatarUrl: action.url
            };
        case RESET_UPLOADED_AVATAR:
            return { ...state, uploadedAvatarUrl: undefined };
        default:
            return {...state, loading: false};
    }
};

export default userState;