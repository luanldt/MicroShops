import * as express  from 'express';
import * as express_graphql from 'express-graphql';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import { UserRoutes } from './routes/userRoutes';
import { ShopRoutes } from './routes/shopRoutes';
import { AuthRoutes } from './routes/authRoutes';

class App {

  public mongoUrl: string = 'mongodb://application-coffee-shop:123abc789@ds259463.mlab.com:59463/user-manager';
  public app: express.Application;
  public userRoutes: UserRoutes = new UserRoutes();
  public shopRoutes: ShopRoutes = new ShopRoutes();
  public authRoutes: AuthRoutes = new AuthRoutes();

  constructor() {
    this.config();
    this.mongoSetup();
    this.userRoutes.routes(this.app);
    this.shopRoutes.routes(this.app);
    this.authRoutes.routes(this.app);
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    mongoose.set('useFindAndModify', false);
  }

  private config(): void {
    this.app = express();
    this.app.use('/oauth/token', bodyParser.urlencoded({ extended: false }));
  }

}

export default new App().app;

