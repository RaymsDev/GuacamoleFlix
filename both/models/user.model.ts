import { Subscription } from "./subscription.model";

export class User {
    idFirebase: string;
    isActive: number;
    name: string;
    subscription: Subscription;
}