
import { ILike, Like } from "../../both/models/like.model";
import LikeSchema, { ILikeDBModel } from "../schemas/like.schema";

export class LikeController {
  public static list(): Promise<ILike[]> {
    const promise = new Promise<ILike[]>((resolve, reject) => {

      LikeSchema.find()
        .populate('profile')
        .populate('video')
        .then((likes) => {
          const likeList = likes.map((c) => new Like(c));
          resolve(likeList);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }

  public static create(like: ILike): Promise<ILike> {
    const newLike = new LikeSchema(like);
    return newLike.save();
  }

  public static select(id: any): Promise<ILike> {
    const promise = new Promise<ILike>((resolve, reject) => {

      LikeSchema.findById(id)
        .populate('profile')
        .populate('video')
        .then((c) => {
          const like = new Like(c);
          resolve(like);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }

  public static remove(id: any): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {

      LikeSchema.remove({
        _id: id
      }).then(() => {
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });

    return promise;
  }

  public static update(id: any, like: Partial<ILike>): Promise<ILike> {
    delete like._id;
    const promise = new Promise<ILike>((resolve, reject) => {
      LikeSchema.updateOne({
        _id: id
      }, like)
        .then((c) => {
          const likeUpdated = new Like(c);
          resolve(likeUpdated);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }
}
