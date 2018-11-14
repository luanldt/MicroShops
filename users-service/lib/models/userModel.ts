import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  lastName: {
    type: String,
  }, 
  firstName: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  birthDay: {
    type: Date,
  },
  gender: {
    type: String,
  },
  address: {
    type: String,
  },
  shopId: {
    type: String,
  },
  deleted: {
    type: Boolean,
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
    default: Date.now,
  },
  updatedBy: {
    type: String,
  },
  deletedAt: {
    type: Date,
    default: Date.now,
  },
  deletedBy: {
    type: String,
  },
});
