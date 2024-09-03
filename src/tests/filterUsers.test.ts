import { filterUsers } from "../service/users-service/filterUsers";

import { IUser } from "../interfaces/entities-interfaces/user.interface";
import { FilterState } from "../interfaces/state-interfaces/filter.state.interface";

const mockUsers: IUser[] = [
  {
    id: 1,
    name: "John Doe",
    username: "john",
    email: "john@example.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "jane",
    email: "jane@example.com",
    phone: "234-567-8901",
  },
  {
    id: 3,
    name: "Amanda Black",
    username: "amanda",
    email: "amanda@example.com",
    phone: "345-678-9012",
  },
];

describe("filterUsers", () => {
  it("should return all users if filters are empty", () => {
    const filters: FilterState = {
      name: "",
      username: "",
      email: "",
      phone: "",
    };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual(mockUsers);
  });

  it("should filter users by name starting with 'J'", () => {
    const filters: FilterState = {
      name: "J",
      username: "",
      email: "",
      phone: "",
    };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([
      {
        id: 1,
        name: "John Doe",
        username: "john",
        email: "john@example.com",
        phone: "123-456-7890",
      },
      {
        id: 2,
        name: "Jane Smith",
        username: "jane",
        email: "jane@example.com",
        phone: "234-567-8901",
      },
    ]);
  });

  it("should filter users by username starting with 'am'", () => {
    const filters: FilterState = {
      name: "",
      username: "am",
      email: "",
      phone: "",
    };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([
      {
        id: 3,
        name: "Amanda Black",
        username: "amanda",
        email: "amanda@example.com",
        phone: "345-678-9012",
      },
    ]);
  });

  it("should filter users by email starting with 'jane'", () => {
    const filters: FilterState = {
      name: "",
      username: "",
      email: "jane",
      phone: "",
    };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([
      {
        id: 2,
        name: "Jane Smith",
        username: "jane",
        email: "jane@example.com",
        phone: "234-567-8901",
      },
    ]);
  });

  it("should filter users by phone starting with '123'", () => {
    const filters: FilterState = {
      name: "",
      username: "",
      email: "",
      phone: "123",
    };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([
      {
        id: 1,
        name: "John Doe",
        username: "john",
        email: "john@example.com",
        phone: "123-456-7890",
      },
    ]);
  });

  it("should return no users if no user matches the filter criteria", () => {
    const filters: FilterState = {
      name: "NonExistent",
      username: "",
      email: "",
      phone: "",
    };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([]);
  });
  it("should return the user when all or some of the fields are filled", () => {
    const filters: FilterState = {
      name: "Jo",
      username: "jo",
      email: "john@",
      phone: "123",
    };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([
      {
        id: 1,
        name: "John Doe",
        username: "john",
        email: "john@example.com",
        phone: "123-456-7890",
      },
    ]);
  });
});
