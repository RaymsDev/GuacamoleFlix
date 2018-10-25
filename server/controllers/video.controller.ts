import {
  Document
} from 'mongoose';
import videoSchema, { IVideoDBModel } from "../schemas/video.schema";

export class VideoController {
  public static list(): Promise<Document[]> {
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
