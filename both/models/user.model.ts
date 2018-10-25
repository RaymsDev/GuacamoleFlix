import { ISubscription, Subscription } from "./subscription.model";

export interface IUser {
    idFirebase: string;
    isActive: number;
    name: string;
    subscription: ISubscription;
}
export class User implements IUser {
    public idFirebase: string;
    public isActive: number;
    public name: string;
    public subscription: ISubscription;

    constructor(data?: Partial<IUser>) {
        if (!data) {
            return;
        }

        this.idFirebase = data.idFirebase;
        this.isActive = data.isActive;
        this.name = data.name;
        this.subscription = new Subscription(data.subscription);
    }
}