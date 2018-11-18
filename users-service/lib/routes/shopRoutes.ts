import * as express_graphql from 'express-graphql';
import { buildSchema } from 'graphql';
import { ShopController } from '../controllers/shopController';
import { shopSchema } from '../schemas/shopSchema';

const schema = buildSchema(shopSchema);

export class ShopRoutes {
    public shopController: ShopController = new ShopController();

    public routes(app): void {

        const root = {
            shop: this.shopController.findOne,
            shops: this.shopController.listAll,
            create: this.shopController.create,
            update: this.shopController.update,
            delete: this.shopController.delete
        };

        app.use('/shop', express_graphql({
            schema: schema,
            rootValue: root,
            graphql: true
        }));
    }
}

