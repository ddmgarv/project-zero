export const MessageType = `
  type MessageType {
    id: ID!
    message: String!
    status: String!
    date: String!
    sender: UserType
  }
`;
