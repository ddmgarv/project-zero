export const ChatType = `
  type ChatType { 
    id: String!
    dateCreated: String!
    chats: [MessageType!]
    senders: [UserType!]
  }
`;
