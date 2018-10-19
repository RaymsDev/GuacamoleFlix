import {
  Document,
  model,
  Schema
} from 'mongoose';

export interface IVideoDBModel extends Document {
  name: string;
  url: string;
  image: string;
  description: string;
  realeaseDate: Date;
  isSpotlight: boolean;
  views: number;
}

const VideoSchema: Schema = new Schema({
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

export default model('Video', VideoSchema);