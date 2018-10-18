import videoSchema, { IVideoDBModel } from "../schemas/video.schema";
import {
  Document
} from 'mongoose';

export class VideoController {
  public static list() {
    const promise = new Promise<Document[]>((resolve, reject) => {

      videoSchema.find((err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });

    });

    return promise;
  }
}
