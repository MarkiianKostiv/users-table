import { IUser } from "../../../interfaces/entities-interfaces/user.interface";

export const TableRow = ({ id, name, username, email, phone }: IUser) => {
  return (
    <tr className={`hover`}>
      <th>{id}</th>
      <th>{name}</th>
      <th>{username}</th>
      <th>{email}</th>
      <th>{phone}</th>
    </tr>
  );
};
