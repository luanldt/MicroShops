import * as express  from 'express';
import * as express_graphql from 'express-graphql';
import { buildSchema } from 'graphql';

class App {
public app: express.Application;
  constructor() {
    this.app = express();
    
  }

}

export default new App().app;
