import {
  Document,
  model,
  Schema
} from 'mongoose';
import { IUser } from './../../both/models/user.model';
import ProfileSchema from './profile.schema';
import SubscriptionSchema from './subscription.schema';

export interface IUserDBModel extends IUser, Document {
  isAdmin: boolean;
}

const UserSchema: Schema = new Schema({
  idFirebase: {
    required: true,
    type: String,
    unique: true
  },
  isActive: {
    required: true,
    type: Boolean
  },
  isAdmin: {
    default: false,
    type: Boolean
  },
  name: {
    required: true,
    type: String
  },
  profiles: [{
    ref: ProfileSchema.modelName,
    required: false,
    type: Schema.Types.ObjectId
  }],
  subscription: {
    default: null,
    ref: SubscriptionSchema.modelName,
    required: false,
    type: Schema.Types.ObjectId
  }
});

export default model<IUserDBModel>('User', UserSchema);
