import { IProfile, Profile } from "./profile.model";
import { Video, IVideo } from "./video.model";

export interface ILike {
  _id: any;
  profile?: IProfile;
  video?: IVideo;
}

export class Like implements ILike {
  public _id: any;
  public profile: IProfile;
  public video: IVideo;
  constructor(data?: Partial<ILike>) {
    if (!data) {
      return;
    }

    this.profile = new Profile(data.profile);
    this.video = new Video(data.video);
  }
}
