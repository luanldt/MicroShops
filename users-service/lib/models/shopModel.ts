import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ShopSchema = new Schema({
    shopId: {
        type: String
    },
    shopName: {
        type: String
    },
    shopAddress: {
        type: String
    },
    shopPhone: {
        type: String
    },
    shopOpenTime:
    {
        type: String
    },
    deleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    createdBy: {
        type: String,
    },
    updatedAt: {
        type: Date,
    },
    updatedBy: {
        type: String,
    },
    deletedAt: {
        type: Date,
    },
    deletedBy: {
        type: String,
    },
});