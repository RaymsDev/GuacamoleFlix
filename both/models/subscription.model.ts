
export interface ISubscription {
  _id: any;
  authorizedProfiles?: number;
  name?: string;
  periodicity?: string;
  price?: number;
}

export class Subscription implements ISubscription {
  public _id: any;
  public authorizedProfiles: number;
  public name: string;
  public periodicity: string;
  public price: number;

  constructor(data?: Partial<ISubscription>) {
    if (!data) {
      return;
    }

    this._id = data._id;
    this.authorizedProfiles = data.authorizedProfiles;
    this.name = data.name;
    this.periodicity = data.periodicity;
    this.price = data.price;
  }
}
