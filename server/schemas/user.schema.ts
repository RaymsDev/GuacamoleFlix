import {
    Document,
    model,
    Schema
} from 'mongoose';
import SubscriptionSchema, { ISubscriptionDBModel } from './subscription.schema';

export interface IUserDBModel extends Document {
    idFirebase: string;
    isActive: number;
    name: string;
    subscription: ISubscriptionDBModel;
}

const UserSchema: Schema = new Schema({
    idFirebase: {
        required: true,
        type: String
    },
    isActive: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    subscription: {
        required: true,
        type: SubscriptionSchema
    }
});

export default model('User', UserSchema);