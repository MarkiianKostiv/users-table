import { IUser } from "../entities-interfaces/user.interface";

export interface UsersState {
  users: IUser[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
