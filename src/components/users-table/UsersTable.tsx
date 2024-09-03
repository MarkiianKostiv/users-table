import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../state/store";

import { setFilter } from "../../state/filters/filter.slice";
import { filterUsers } from "../../service/users-service/filterUsers";

import { TableRow } from "./components/TableRow";
import { TableRowPlaceHolder } from "../ui/TableRowPlaceHolder";
import { TableRowError } from "./components/TableRowError";
import { TableRowEmpty } from "./components/TableEmpty";

export const UsersTable = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector(
    (state: RootState) => state.users
  );
  const filters = useSelector((state: RootState) => state.filters);

  const filteredUsers = filterUsers(users, filters);

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    dispatch(setFilter({ key, value }));
  };

  return (
    <div className='overflow-x-auto mt-5'>
      <table className='table'>
        <thead>
          <tr>
            <th></th>
            <th>
              <div className='flex flex-col items-start justify-center'>
                <h3 className={`font-medium text-lg`}>Name</h3>
                <input
                  type='text'
                  placeholder='Find by Name...'
                  className='input input-bordered w-full max-w-xs'
                  autoComplete='off'
                  value={filters.name}
                  onChange={(e) => handleFilterChange("name", e.target.value)}
                />
              </div>
            </th>
            <th>
              <div className='flex flex-col items-start justify-center'>
                <h3 className={`font-medium text-lg`}>Username</h3>
                <input
                  type='text'
                  placeholder='Find by Username...'
                  className='input input-bordered w-full max-w-xs'
                  autoComplete='off'
                  value={filters.username}
                  onChange={(e) =>
                    handleFilterChange("username", e.target.value)
                  }
                />
              </div>
            </th>
            <th>
              <div className='flex flex-col items-start justify-center'>
                <h3 className={`font-medium text-lg`}>Email</h3>
                <input
                  type='text'
                  placeholder='Find by Email...'
                  className='input input-bordered w-full max-w-xs'
                  autoComplete='off'
                  value={filters.email}
                  onChange={(e) => handleFilterChange("email", e.target.value)}
                />
              </div>
            </th>
            <th>
              <div className='flex flex-col items-start justify-center'>
                <h3 className={`font-medium text-lg`}>Phone</h3>
                <input
                  type='text'
                  placeholder='Find by Phone...'
                  className='input input-bordered w-full max-w-xs'
                  autoComplete='off'
                  value={filters.phone}
                  onChange={(e) => handleFilterChange("phone", e.target.value)}
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {status === "loading" &&
            Array.from({ length: 10 }).map((_, index) => (
              <TableRowPlaceHolder key={index} />
            ))}

          {status === "succeeded" && filteredUsers.length === 0 && (
            <TableRowEmpty colSpan={5} />
          )}

          {status === "succeeded" &&
            filteredUsers.map((user) => (
              <TableRow
                key={user.id}
                id={user.id}
                name={user.name}
                username={user.username}
                email={user.email}
                phone={user.phone}
              />
            ))}

          {status === "failed" && error && (
            <TableRowError
              message={error}
              colSpan={5}
            />
          )}
        </tbody>
      </table>
    </div>
  );
};
