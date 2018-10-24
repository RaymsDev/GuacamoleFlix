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
}