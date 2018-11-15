import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ShopSchema = new Schema({
    Id: {
        type: String
    },
    shopName: {
        type: String
    },
    shopAddress: {
        homeNumber: {
            type: String
        },
        street: {
            type: String
        },
        district: {
            type: String
        }
    },
    shopPhone: {
        type: String
    },
    shopOpenTime:
    {
        open: {
            type: Date
        },
        closed: {
            type: Date
        }
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