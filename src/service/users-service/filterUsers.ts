import { IUser } from "../../interfaces/entities-interfaces/user.interface";
import { FilterState } from "../../interfaces/state-interfaces/filter.state.interface";

export const filterUsers = (users: IUser[], filters: FilterState): IUser[] => {
  return users.filter((user) => {
    const nameMatch = user.name
      .toLowerCase()
      .startsWith(filters.name.toLowerCase());
    const usernameMatch = user.username
      .toLowerCase()
      .startsWith(filters.username.toLowerCase());
    const emailMatch = user.email
      .toLowerCase()
      .startsWith(filters.email.toLowerCase());
    const phoneMatch = user.phone
      .toLowerCase()
      .startsWith(filters.phone.toLowerCase());

    return nameMatch && usernameMatch && emailMatch && phoneMatch;
  });
};
