export const ChatType = `
  type ChatType { 
    id: ID!
    dateCreated: String!
    chats: [MessageType!]
    senders: [UserType!]
  }
`;
