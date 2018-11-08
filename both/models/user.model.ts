import { ISubscription, Subscription } from "./subscription.model";

export interface IUser {
  _id: any;
  idFirebase: string;
  isActive: boolean;
  name: string;
  subscription: ISubscription;
}
export class User implements IUser {
  public _id: any;
  public idFirebase: string;
  public isActive: boolean;
  public name: string;
  public subscription: ISubscription;

  constructor(data?: Partial<IUser>) {
    if (!data) {
      return;
    }

    this._id = data._id;
    this.idFirebase = data.idFirebase;
    this.isActive = data.isActive;
    this.name = data.name;
    this.subscription = new Subscription(data.subscription);
  }
}
