import app from '../app';
import express_graphql from 'express-graphql';
import { buildSchema } from 'graphql';
import { UserController } from '../controllers/userController';

const userController = new UserController();


const schema = buildSchema(`
type Query {
  user(id: String!): User
  users(shopId: String): [User]
  delete(id: String)
  update(id: String, user: User)
  create(user: User)
},
type User {
  lastName:     
  firstName:    String
  phone:        String
  email:        String
  birthDay:     Date
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
`);

const root = {
  user: userController.findOne,
};

app.use('/user', express_graphql({
  schema: schema,
  rootValue: root,
  grapiql: true
}));
