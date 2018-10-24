import {
    Document,
    model,
    Schema
} from 'mongoose';
import { ISubscription } from '../../both/models/subscription.model';

export interface ISubscriptionDBModel extends ISubscription, Document { }

const SubscriptionSchema: Schema = new Schema({
    authorizedProfiles: {
        required: true,
        type: Number
    },
    name: {
        required: true,
        type: String
    },
    periodicity: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    }
});

export default model<ISubscriptionDBModel>('Subscription', SubscriptionSchema);