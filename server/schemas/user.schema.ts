import {
    Document,
    model,
    Schema
} from 'mongoose';

export interface IUserDBModel extends Document {
    name: string;
}

const UserSchema: Schema = new Schema({
    name: {
        required: true,
        type: String,
    }
});

export default model('User', UserSchema);