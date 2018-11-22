
import { IUser, User } from "../../both/models/user.model";
import UserSchema from "../schemas/user.schema";

export class UserController {
  public static list(): Promise<IUser[]> {
    const promise = new Promise<IUser[]>((resolve, reject) => {

      UserSchema.find()
        .populate('subscriptions')
        .then((users) => {
          const userList = users.map((v) => new User(v));
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

  public static select(id: any): Promise<IUser> {
    const promise = new Promise<IUser>((resolve, reject) => {

      UserSchema.findById(id)
        .populate('subscriptions')
        .then((v) => {
          const user = new User(v);
          resolve(user);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }

  public static remove(id: any): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {

      UserSchema.remove({
        _id: id
      }).then(() => {
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });

    return promise;
  }

  public static update(id: any, user: Partial<IUser>): Promise<IUser> {
    delete user._id;
    const promise = new Promise<IUser>((resolve, reject) => {
      UserSchema.updateOne({
        _id: id
      }, user)
        .then((v) => {
          const userUpdated = new User(v);
          resolve(userUpdated);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }
}
