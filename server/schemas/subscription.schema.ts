import {
    Document,
    model,
    Schema
} from 'mongoose';

export interface ISubscriptionDBModel extends Document {
    authorizedProfiles: number;
    name: string;
    periodicity: string;
    price: number;
}

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

export default model('Subscription', SubscriptionSchema);