export interface ISubscription {
    authorizedProfiles: number;
    name: string;
    periodicity: string;
    price: number;
}

export class Subscription implements ISubscription {
    public authorizedProfiles: number;
    public name: string;
    public periodicity: string;
    public price: number;

    constructor(data?: Partial<ISubscription>) {
        if (!data) {
            return;
        }

        this.authorizedProfiles = data.authorizedProfiles;
        this.name = data.name;
        this.periodicity = data.periodicity;
        this.price = data.price;
    }
}