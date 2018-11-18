export const userSchema = `
  scalar Date,
  input UserInput {
    lastName:     String
    firstName:    String!
    phone:        String!
    password:     String!
    email:        String
    birthday:     Date
    gender:       String
    address:      String
    shopId:       String!
  },
  type Query {
    user(id: String!): User
    users(shopId: String): [User]
  },
  type Mutation {
    delete(id: String!): User
    update(id: String!, user: UserInput!): User
    create(user: UserInput): User
  },
  type User {
    lastName:     String
    firstName:    String!
    phone:        String!
    email:        String
    birthday:     Date
    gender:       String
    address:      String
    shopId:       String!
    deleted:      Boolean
    createdAt:    Date
    createdBy:    String
    updatedAt:    Date
    updatedBy:    String
    deletedAt:    Date
    deletedBy:    String
  }
`;
