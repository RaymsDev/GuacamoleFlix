import {
    Document,
    model,
    Schema
} from 'mongoose';

import { IProfile } from './../../both/models/profile.model';

export interface IProfileDBModel extends IProfile, Document { }

const ProfileSchema: Schema = new Schema({
    age: {
        required: true,
        type: Number
    },
    name: {
        required: true,
        type: String
    }
});

export default model<IProfileDBModel>('Profile', ProfileSchema);