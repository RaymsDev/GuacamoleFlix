import { IUser, User } from '../../both/models/user.model';
import SubscriptionSchema from '../schemas/subscription.schema';
import UserSchema from '../schemas/user.schema';

export class UserController {
  public static list(): Promise<IUser[]> {
    const promise = new Promise<IUser[]>((resolve, reject) => {
      UserSchema.find()
        .populate('subscription')
        .then((users) => {
          const userList = users.map((u) => new User(u));
          resolve(userList);
        })
        .catch((error) => {
          reject(error);
        });

    });

    return promise;
  }

  public static create(user: IUser): Promise<IUser> {
    const newUser = new UserSchema(user);
    return newUser.save();
  }
}
