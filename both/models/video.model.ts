export default class Video {
    public id: string;
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
    }
}