import {
    Document,
    model,
    Schema
} from 'mongoose';
import { ILike } from './../../both/models/like.model';
import ProfileSchema from './profile.schema';
import VideoSchema from './video.schema';

export interface ILikeDBModel extends ILike, Document { }

const LikeSchema: Schema = new Schema({
    profile: {
        ref: ProfileSchema.modelName,
        required: true,
        type: Schema.Types.ObjectId
    },
    video: {
        ref: VideoSchema.modelName,
        required: true,
        type: Schema.Types.ObjectId
    }
});

export default model<ILikeDBModel>('Like', LikeSchema);