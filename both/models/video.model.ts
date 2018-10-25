import { ICategory } from "./category.model";

export interface IVideo {
    category: ICategory[];
    name: string;
    url: string;
    image: string;
    description: string;
    realeaseDate: Date;
    isSpotlight: boolean;
    views: number;
}

export default class Video implements IVideo {
    public category: ICategory[];
    public name: string;
    public url: string;
    public image: string;
    public description: string;
    public realeaseDate: Date;
    public isSpotlight: boolean;
    public views: number;
    constructor(data?: Partial<Video>) {
        if (!data) {
            return;
        }

        this.category = data.category;
        this.name = data.name;
        this.url = data.url;
        this.image = data.image;
        this.description = data.description;
        this.realeaseDate = data.realeaseDate;
        this.isSpotlight = data.isSpotlight;
        this.views = data.views;
    }
}