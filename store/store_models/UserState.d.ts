import IUser from "common/models.d";

export default interface UserState {
    currentUser: IUser | undefined;
    loading: boolean;
    uploadingAvatar: boolean;
    uploadedAvatarUrl: string | undefined;
}