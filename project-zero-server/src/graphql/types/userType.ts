export const User = `
  type User {	
    id: String!;
    email: String!;
    data: {
      age: Int!;
      direction: String!;
      country: String!;
      firstName: String!;
      lastName: String!;
      fullName: String!;
    };
    status: {
      disabled: Boolean!;
      active: Boolean!;
      lastConnection: String!;
    }
  }
`;

export const CreateUser = `
  type Query {
    createUser(
      email: String!, 
      password: String!, 
      confirmPassword: String!
    ): User
  }
`;
