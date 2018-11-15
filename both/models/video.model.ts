import { ICategory, Category } from "./category.model";

export interface IVideo {
  _id: any;
  categories: ICategory[];
  name: string;
  url: string;
  image: string;
  description: string;
  realeaseDate: Date;
  isSpotlight: boolean;
  views: number;
}

export class Video implements IVideo {
  public _id: any;
  public categories: ICategory[];
  public name: string;
  public url: string;
  public image: string;
  public description: string;
  public realeaseDate: Date;
  public isSpotlight: boolean;
  public views: number;
  constructor(data?: Partial<IVideo>) {
    if (!data) {
      return;
    }

    this._id = data._id;
    this.categories = data.categories ? data.categories.map(c => new Category(c)) : new Array<ICategory>();
    this.name = data.name;
    this.url = data.url;
    this.image = data.image;
    this.description = data.description;
    this.realeaseDate = data.realeaseDate;
    this.isSpotlight = data.isSpotlight;
    this.views = data.views;
  }
}
