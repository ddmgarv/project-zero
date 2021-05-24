export const ChatType = `
  type ChatType { 
    id: ID!
    dateCreated: Date!
    chats: [MessageType!]
    senders: [UserType!]
  }
`;
