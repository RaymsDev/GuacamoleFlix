import { ISubscription, Subscription } from "../../both/models/subscription.model";
import SubscriptionSchema from "../schemas/subscription.schema";

export class SubscriptionController {
  public static list(): Promise<ISubscription[]> {
    const promise = new Promise<ISubscription[]>((resolve, reject) => {
      SubscriptionSchema.find()
        .then((subscriptions) => {
          const subscriptionList = subscriptions.map((s) => {
            return new Subscription(s);
          });

          resolve(subscriptionList);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }

  public static create(subscription: ISubscription): Promise<ISubscription> {
    const newSubscription = new SubscriptionSchema(subscription);
    return newSubscription.save();
  }
}
