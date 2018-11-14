import * as mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';

const User = mongoose.model('User', UserSchema);

export class UserController {
  public findOne({id}) {
    User.findById(id, (err, user) => {
      if (!err) {
        return user;
      }
      return {};
    });
  }
}
