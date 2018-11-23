import { ISubscription, Subscription } from "./subscription.model";
import { IProfile, Profile } from './profile.model';

export interface IUser {
  _id: any;
  idFirebase?: string;
  isActive?: boolean;
  name?: string;
  subscription?: ISubscription;
  profiles?: IProfile[];
}
export class User implements IUser {

  public _id: any;
  public idFirebase: string;
  public isActive: boolean;
  public name: string;
  public subscription: ISubscription;
  public profiles: IProfile[];

  constructor(data?: Partial<IUser>) {
    if (!data) {
      return;
    }

    this._id = data._id;
    this.idFirebase = data.idFirebase;
    this.isActive = data.isActive;
    this.name = data.name;
    this.subscription = new Subscription(data.subscription);
    this.profiles = data.profiles ? data.profiles.map(c => new Profile(c)) : new Array<IProfile>();
  }
}
