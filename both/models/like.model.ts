import { IProfile } from "./profile.model";
import { IVideo } from "./video.model";

export interface ILike {
    profile: IProfile;
    video: IVideo;
}