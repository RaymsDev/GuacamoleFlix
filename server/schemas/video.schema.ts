import {
  Document,
  model,
  Schema
} from 'mongoose';
import plugin from 'mongoose-createdat-updatedat';
import { IVideo } from '../../both/models/video.model';
import categorySchema from './category.schema';
import userSchema from './user.schema';
export interface IVideoDBModel extends IVideo, Document { }

const VideoSchema: Schema = new Schema({
  categories: [{
    ref: categorySchema.modelName,
    type: Schema.Types.ObjectId
  }],
  description: {
    required: false,
    type: String
  },
  image: {
    required: false,
    type: String
  },
  isSpotlight: {
    required: true,
    type: Boolean
  },
  likes: [{
    default: [],
    ref: userSchema.modelName,
    required: false,
    type: Schema.Types.ObjectId,

  }],
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

VideoSchema.plugin(plugin);

export default model<IVideoDBModel>('Video', VideoSchema);
