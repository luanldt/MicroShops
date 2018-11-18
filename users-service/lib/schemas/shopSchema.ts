export const shopSchema = `
  scalar Date,
  input ShopInput {
    Id:                 String
    shopName:               String
    shopAddress:            String
    shopPhone:              String
    shopOpenTime:           String
  },
  type Query {
    shop(id: String!): Shop
    shops(shopId: String): [Shop]
  },
  type Mutation {
    delete(id: String!): Shop
    update(id: String!, shop: ShopInput!): Shop
    create(shop: ShopInput): Shop
  },
  type Shop {
    shopId:                 String
    shopName:               String
    shopAddress:            String
    shopPhone:              String
    shopOpenTime:           String
    deleted:                Boolean
    createdAt:              Date
    createdBy:              String
    updatedAt:              Date
    updatedBy:              String
    deletedAt:              Date
    deletedBy:              String
  }
`;
