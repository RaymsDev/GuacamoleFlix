import {
  Document,
  model,
  Schema
} from 'mongoose';
import { IVideo } from '../../both/models/video.model';
import categorySchema from './category.schema';

export interface IVideoDBModel extends IVideo, Document { }

const VideoSchema: Schema = new Schema({
  category: {
    ref: categorySchema.modelName,
    type: [Schema.Types.ObjectId]
  },
  description: {
    required: true,
    type: String
  },
  image: {
    required: true,
    type: String
  },
  isSpotlight: {
    required: true,
    type: Boolean
  },
  name: {
    required: true,
    type: String
  },
  realeaseDate: {
    type: Date
  },
  url: {
    required: true,
    type: String
  },
  views: {
    type: Number
  }
});

export default model<IVideoDBModel>('Video', VideoSchema);