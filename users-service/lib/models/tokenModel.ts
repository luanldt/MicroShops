import * as mongoose from 'mongoose';
import { UserSchema } from './userModel';
import { ClientSchema } from './clientModel';

const Schema = mongoose.Schema;

export const TokenSchema = new Schema({
  accessToken: {
    type: String
  },
  accessTokenExpiresAt: {
    type: Date
  },
  refreshToken: {
    type: String
  },
  refreshTokenExpiresAt: {
    type: Date
  },
  scope: {
    type: [String]
  },
  client: {
    type: ClientSchema
  },
  user: {
    type: UserSchema
  }
});

