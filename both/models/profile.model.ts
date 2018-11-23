export interface IProfile {
  _id: any;
  age?: number;
  name?: string;
}

export class Profile implements IProfile {
  public _id: any;
  public age: number;
  public name: string;

  constructor(data?: Partial<IProfile>) {
    if (!data) {
      return;
    }
    this._id = data._id;
    this.age = data.age;
    this.name = data.name;
  }
}
