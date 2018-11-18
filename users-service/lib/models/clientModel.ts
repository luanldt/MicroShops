import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ClientSchema = new Schema({
  clientId: {
    type: String,
  },
  clientSecret: {
    type: String
  },
  grants: {
    type: [String]
  },
  accessTokenLifeTime: {
    type: Number
  },
  refreshTokenLifeTime: {
    type: Number
  }
});

