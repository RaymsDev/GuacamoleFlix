export interface IProfile {
    age: number;
    name: string;
}

export class Profile implements IProfile {
    public age: number;
    public name: string;

    constructor(data?: Partial<IProfile>) {
        if (!data) {
            return;
        }
        this.age = data.age;
        this.name = data.name;
    }
}