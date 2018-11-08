import {
  Document,
  model,
  Schema
} from 'mongoose';
import { IUser } from './../../both/models/user.model';
import SubscriptionSchema from './subscription.schema';

export interface IUserDBModel extends IUser, Document { }

const UserSchema: Schema = new Schema({
  idFirebase: {
    required: true,
    type: String,
    unique: true,
  },
  isActive: {
    required: true,
    type: Boolean
  },
  name: {
    required: true,
    type: String
  },
  subscription: {
    ref: SubscriptionSchema.modelName,
    required: false,
    type: Schema.Types.ObjectId
  }
});

export default model<IUserDBModel>('User', UserSchema);
