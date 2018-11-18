import * as mongoose from 'mongoose';
import { ClientSchema } from '../models/clientModel';
import { TokenSchema } from '../models/tokenModel';

const Client = mongoose.model('Client', ClientSchema);
const Token = mongoose.model('Token', TokenSchema);

export class AuthController {
  public async getAccessToken(accessToken: String) {
    return await Token.findOne({ accessToken: accessToken });
  }

  public async getRefreshToken(refreshToken: String) {
    return await Token.findOne({ refreshToken });
  }

  public async saveToken(token, client, user) {
    const tokenNew = new Token({
      accessToken: token.accessToken,
      accessTokenExpiresAt: token.accessTokenExpiresAt,
      refreshToken: token.refreshToken,
      refreshTokenExpiresAt: token.refreshTokenExpiresAt,
      scope: token.scope,
      client: client,
      user: user
    });
    return await tokenNew.save()
  }

  public async getClient(clientId: String, clientSecret: String) {
    const client = await Client.findOne({ clientId, clientSecret });
    return client;
  }

  public async revokeToken(token) {
    return await Token.findOneAndRemove({ refreshToken: token.refreshToken });
  }

}
