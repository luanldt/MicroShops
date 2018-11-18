import * as express_graphql from 'express-graphql';
import { buildSchema } from 'graphql';
import { UserController } from '../controllers/userController';
import { userSchema } from '../schemas/userSchema';

const schema = buildSchema(userSchema);

export class UserRoutes {

  public userController: UserController = new UserController();

  public routes(app): void {

    const root = {
      user: this.userController.findOne,
      users: this.userController.listAll,
      create: this.userController.create,
      update: this.userController.update,
      delete: this.userController.delete
    };

    app.use('/user', express_graphql({
      schema: schema,
      rootValue: root,
      graphiql: true
    }));
  }
}
