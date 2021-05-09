export const MessageType = `
  type MessageType {
    id: String!;
    message: String!;
    status: String!;
    date: String!;
    sender: UserType;
  }
`;
