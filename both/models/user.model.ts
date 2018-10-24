import { ISubscription } from "./subscription.model";

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
}