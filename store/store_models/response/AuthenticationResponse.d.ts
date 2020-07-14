import User from "../User.d";
import Notification from "../Notification.d";
export default interface AuthenticationResponse {
    user: User;
    accessToken?: string;
    // notifications: Notification[]; // unacknowledged
    others: any; // Get all users' info after authenticate
}