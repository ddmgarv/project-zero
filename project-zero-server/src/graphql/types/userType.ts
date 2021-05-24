export const UserDataType = `
  type UserDataType {
    dateOfBirth: String!
    direction: String!
    country: String!
    firstName: String!
    lastName: String!
    fullName: String!
  }
`;

export const UserStatusType = `
  type UserStatusType {
    disabled: Boolean!
    active: Boolean!
    lastConnection: String!
  }
`;

export const UserType = `
  type UserType {	
    id: ID!
    email: String!
    data: UserDataType
    status: UserStatusType
  }
`;

export const CreateUser = `
  type Query {
    createUser(data: UserType): UserType
  }
`;
