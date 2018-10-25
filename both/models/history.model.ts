import { IProfile, Profile } from "./profile.model";
import Video, { IVideo } from "./video.model";

export interface IHistory {
    profile: IProfile;
    timeOfStop: number;
    video: IVideo;
}

export class History implements IHistory {
    public profile: IProfile; timeOfStop: number;
    public video: IVideo;
    constructor(data?: Partial<IHistory>) {
        if (!data) {
            return;
        }

        this.profile = new Profile(data.profile);
        this.timeOfStop = data.timeOfStop;
        this.video = new Video(data.video);
    }
}