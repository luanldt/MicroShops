import * as express  from 'express';
import * as express_graphql from 'express-graphql';
import * as mongoose from 'mongoose';
import { Routes } from './routes/userRoutes';



class App {

  public mongoUrl: string = 'mongodb://application-coffee-shop:123abc789@ds259463.mlab.com:59463/user-manager';
  public app: express.Application;
  public routesUser: Routes = new Routes();

  constructor() {
    this.app = express();
    this.mongoSetup();
    this.routesUser.routes(this.app);
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    mongoose.set('useFindAndModify', false);
  }

}

export default new App().app;
