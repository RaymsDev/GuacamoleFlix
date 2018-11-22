import { IProfile, Profile } from "./profile.model";
import { IVideo, Video } from "./video.model";

export interface IHistory {
  _id: any;
  profile: IProfile;
  timeOfStop: number;
  video: IVideo;
}

export class History implements IHistory {
  public _id: any;
  public profile: IProfile;
  public timeOfStop: number;
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
