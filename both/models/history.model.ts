import { IProfile } from "./profile.model";
import { IVideo } from "./video.model";

export interface IHistory {
    profile: IProfile;
    timeOfStop: number;
    video: IVideo;
}