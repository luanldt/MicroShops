import * as mongoose from 'mongoose';
import { ShopSchema } from '../models/shopModel';

const Shop = mongoose.model('Shop', ShopSchema);

export class ShopController {
    public async findOne({ id }) {
        const res = await Shop.findById(id);
        return res;
    }

    public async create({ shop }) {
        const newShop = new Shop(shop);

        const res = await newShop.save();
        return res;
    }

    public async listAll({ shopId }) {
        return await Shop.find({ shopId: shopId });
    }

    public async update({ id, shop }) {
        return await Shop.findOneAndUpdate({ _id: id }, shop, { new: true });
    }

    public async delete({ id }) {
        return await Shop.findOneAndUpdate({ _id: id }, { deleted: true }, { new: true });
    }
}