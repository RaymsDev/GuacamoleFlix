export interface ICategory {
    name: string;
    pegi: number;
}

export class Category implements ICategory {
    public name: string;
    public pegi: number;

    constructor(data?: Partial<ICategory>) {
        if (!data) {
            return;
        }

        this.name = data.name;
        this.pegi = data.pegi;
    }


}