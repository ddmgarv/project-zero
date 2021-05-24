export const UserDataType = `
  type UserDataType {
    age: Int!
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
    id: String!
    email: String!
    data: UserDataType
    status: UserStatusType
  }
`;

export const CreateUser = `
  type Query {
    createUser(
      email: String!, 
      password: String!, 
      confirmPassword: String!
    ): UserType
  }
`;
