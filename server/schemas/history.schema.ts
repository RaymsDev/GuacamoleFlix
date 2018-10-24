import {
    Document,
    model,
    Schema
} from 'mongoose';
import { IHistory } from './../../both/models/history.model';
import profileSchema from './profile.schema';
import videoSchema from './video.schema';

export interface IHistoryDBModel extends IHistory, Document { }

const HistorySchema: Schema = new Schema({
    profile: {
        ref: profileSchema.modelName,
        required: true,
        type: Schema.Types.ObjectId
    },
    timeOfStop: {
        type: Number
    },
    video: {
        ref: videoSchema.modelName,
        required: true,
        type: Schema.Types.ObjectId
    }
});

export default model<IHistoryDBModel>('History', HistorySchema);