import { ObjectId } from "bson";
import { IVideo, Video } from "../../both/models/video.model";
import CategorySchema from "../schemas/category.schema";
import VideoSchema, { IVideoDBModel } from "../schemas/video.schema";

export class VideoController {
  public static list(): Promise<IVideo[]> {
    const promise = new Promise<IVideo[]>((resolve, reject) => {
      VideoSchema.find()
        .populate("categories")
        .then((videos) => {
          const videoList = videos.map((v) => new Video(v));
          resolve(videoList);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }

  // return last 10 related video by categoryList
  public static getVideosByCategories(categoryIdList: string[]): Promise<IVideo[]> {
    const videoLimit = 10;
    const promise = new Promise<IVideo[]>((resolve, reject) => {
      VideoSchema.find()
        .where('categories')
        .in(categoryIdList)
        .sort('-createdAt')
        .limit(videoLimit)
        .then((videos) => {
          const videoList = videos.map((v) => new Video(v));
          resolve(videoList);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }

  public static create(video: IVideo): Promise<IVideo> {
    const newVideo = new VideoSchema(video);
    return newVideo.save();
  }

  public static select(id: any, userId: string): Promise<IVideo> {
    const promise = new Promise<IVideo>((resolve, reject) => {
      VideoSchema.findById(id)
        .populate("categories")
        .then((v) => {
          const video = new Video(v);
          video.isLikedByUser = v.likes.some((u: ObjectId) => {
            return u.toHexString() == userId;
          });
          resolve(video);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }
  // Get last 10 spotlighted video created
  public static spotlight(): Promise<IVideo[]> {
    const videoLimit = 10;
    const promise = new Promise<IVideo[]>((resolve, reject) => {
      VideoSchema.find({
        isSpotlight: true
      }
      )
        .sort('-createdAt')
        .limit(videoLimit)
        .then((videoList) => {
          const videos = videoList.map((v) => new Video(v));
          resolve(videos);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }

  public static selectByCategory(id: any): Promise<IVideo[]> {
    const promise = new Promise<IVideo[]>((resolve, reject) => {
      VideoSchema.find({
        categories: {
          _id: id
        }
      })
        .populate("categories")
        .then((videoList) => {
          const videos = videoList.map((v) => new Video(v));
          resolve(videos);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }

  public static remove(id: any): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {
      VideoSchema.remove({
        _id: id
      })
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }

  // toggle like
  public static like(videoId: string, userId: string): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {

      VideoSchema.findOne({
        _id: videoId
      }).then((video) => {
        let index = 0;
        const islikedByUser = video.likes.some((u: ObjectId, i) => {
          index = i;
          return u.toHexString() == userId;
        });

        if (islikedByUser) {
          video.likes.splice(index, 1);
          video.save();
          resolve(false);
          return;
        }

        video.likes.push(userId);
        video.save();
        return resolve(true);
      }).catch((error) => {
        reject(error);
      });

    });

    return promise;
  }

  public static update(id: any, video: Partial<IVideo>): Promise<IVideo> {
    delete video._id;
    const promise = new Promise<IVideo>((resolve, reject) => {
      VideoSchema.updateOne(
        {
          _id: id
        },
        video
      )
        .then((v) => {
          const videoUpdated = new Video(v);
          resolve(videoUpdated);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }
}
