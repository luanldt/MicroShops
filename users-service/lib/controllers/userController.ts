import * as mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';

const User = mongoose.model('User', UserSchema);

export class UserController {
  public async findOne({ id }) {
    const res = await User.findById(id);
    return res;
  }

  public async create({ user }) {
    const newUser = new User(user);

    const res = await newUser.save();
    return res;
  }

  public async listAll({ shopId }) {
    return await User.find({ shopId: shopId });
  }

  public async update({ id, user }) {
    return await User.findOneAndUpdate({ _id: id }, user, { new: true });
  }

  public async delete({ id }) {
    return await User.findOneAndUpdate({ _id: id }, { deleted: true }, { new: true });
  }

  public async getUser(username: String, password: String) {
    return await User.findOne({ $or: [{ email: username }, { phone: username }], password });
  }
}
