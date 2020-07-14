import Gender from "common/Gender"

export interface UnifiedModel {
  _id: any; // This _id should be readonly on client side
  readonly createdAt?: string;
  readonly updatedAt?: string;
}
export interface IUser extends UnifiedModel {
  name: string,
  mail: string,
  password: string,
  gender: Gender,
  isSuperAdmin?: boolean,
  role: string,
  avatarUrl?: string;
  address?: string;
  userType?: string
}