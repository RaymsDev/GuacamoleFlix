
import { IVideo, Video } from "../../both/models/video.model";
import CategorySchema from "../schemas/category.schema";
import VideoSchema, { IVideoDBModel } from "../schemas/video.schema";

export class VideoController {
  public static list(): Promise<IVideo[]> {
    const promise = new Promise<IVideo[]>((resolve, reject) => {

      VideoSchema.find()
        .populate('categories')
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

  public static select(id: any): Promise<IVideo> {
    const promise = new Promise<IVideo>((resolve, reject) => {

      VideoSchema.findById(id)
        .then((v) => {
          const video = new Video(v);
          resolve(video);
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
      }).then(() => {
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });

    return promise;
  }

  public static update(id: any, video: Partial<IVideo>): Promise<IVideo> {
    delete video._id;
    const promise = new Promise<IVideo>((resolve, reject) => {
      VideoSchema.updateOne({
        _id: id
      }, video)
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
