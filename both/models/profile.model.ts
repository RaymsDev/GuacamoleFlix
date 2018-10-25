export interface IProfile {
    age: number;
    name: string;
}

export class Profile implements IProfile {
    public age: number;
    public name: string;
}