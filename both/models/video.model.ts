import { ICategory, Category } from "./category.model";

export interface IVideo {
  _id: any;
  categories?: ICategory[];
  name?: string;
  url?: string;
  image?: string;
  description?: string;
  realeaseDate?: Date;
  isSpotlight?: boolean;
  views?: number;
  youtubeId?: string;
  thumbnail?: string;
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
  public youtubeId: string;
  constructor(data?: Partial<IVideo>) {
    if (!data) {
      return;
    }

    this._id = data._id;
    this.categories = data.categories
      ? data.categories.map(c => new Category(c))
      : new Array<ICategory>();
    this.name = data.name;
    this.url = data.url;
    this.image = data.image;
    this.description = data.description;
    this.realeaseDate = data.realeaseDate;
    this.isSpotlight = data.isSpotlight;
    this.views = data.views;
    this.youtubeId = this.extractYoutubeId(data.url);
  }

  private extractYoutubeId(url): string {
    if (!url) {
      return null;
    }
    const regex = /(?:\?|\&)([v=]+)\=([^&]+)/gm;
    const matchs = regex.exec(url);
    if (matchs) {
      return matchs[2];
    }

    return null;
  }

  public get thumbnail(): string {
    return `https://img.youtube.com/vi/${this.youtubeId}/mqdefault.jpg`;
  }
}
