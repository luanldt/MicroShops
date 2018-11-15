export const shopSchema = `
scalar Date,
input UserInput {
    shopId:                 String
    shopName:               String
    shopAddress:            String
    shopPhone:              String
    shopOwner: {
        fullName:           String,
        phoneNumber:        String
    }
    shopEmployees: {
        employeeId:         String,
        fullName:           String,
        phonrNumber:        String
    }
    wifiInfo: {
        wifiName:           String,
        wifiPassword:       String
    }
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
    shopOwner: {
        fullName:           String,
        phoneNumber:        String
    }
    shopEmployees: {
        employeeId:         String,
        fullName:           String,
        phonrNumber:        String
    }
    wifiInfo: {
        wifiName:           String,
        wifiPassword:       String
    }
    deleted:                Boolean
    createdAt:              Date
    createdBy:              String
    updatedAt:              Date
    updatedBy:              String
    deletedAt:              Date
    deletedBy:              String
  }
`;