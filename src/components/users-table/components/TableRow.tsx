import { IUser } from "../../../interfaces/entities-interfaces/user.interface";

export const TableRow = ({ id, name, username, email, phone }: IUser) => {
  return (
    <tr className={`hover`}>
      <th className='font-medium text-base'>{id}</th>
      <th className='font-medium text-base'>{name}</th>
      <th className='font-medium text-base'>{username}</th>
      <th className='font-medium text-base'> {email}</th>
      <th className='font-medium text-base'>{phone}</th>
    </tr>
  );
};
