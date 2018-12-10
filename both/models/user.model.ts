import { ISubscription, Subscription } from "./subscription.model";
import { IProfile, Profile } from './profile.model';

export interface IUser {
  _id: any;
  idFirebase?: string;
  isActive?: boolean;
  isAdmin?: boolean;
  name?: string;
  subscription?: ISubscription;
  profiles?: IProfile[];
}
export class User implements IUser {

  public _id: any;
  public idFirebase: string;
  public isActive: boolean;
  public isAdmin: boolean;
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
    this.isAdmin = data.isAdmin;
    this.name = data.name;
    this.subscription = data.subscription ? new Subscription(data.subscription) : null;
    this.profiles = data.profiles ? data.profiles.map(c => new Profile(c)) : new Array<IProfile>();
  }
}
