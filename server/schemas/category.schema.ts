import {
  Document,
  model,
  Schema
} from 'mongoose';

import { ICategory } from './../../both/models/category.model';

export interface ICategoryDBModel extends ICategory, Document { }

const CategorySchema: Schema = new Schema({
  name: {
    required: true,
    type: String,
    unique: true
  },
  pegi: {
    required: true,
    type: Number
  }
});

export default model<ICategoryDBModel>('Category', CategorySchema);
