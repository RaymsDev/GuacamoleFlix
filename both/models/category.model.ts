export interface ICategory {
  _id: any;
  name?: string;
  pegi?: number;
}

export class Category implements ICategory {
  public _id: any;
  public name: string;
  public pegi: number;

  constructor(data?: Partial<ICategory>) {
    if (!data) {
      return;
    }

    this._id = data._id;
    this.name = data.name;
    this.pegi = data.pegi;
  }


}
