import {
  Schema,
  model,
  Document
} from 'mongoose';

export interface IVideoDBModel extends Document {
  name: string;
}

const VideoSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  }
});



export default model('Video', VideoSchema);