import { ISubscription, Subscription } from "../../both/models/subscription.model";
import SubscriptionSchema from "../schemas/subscription.schema";

export class SubscriptionController {
  public static list(): Promise<ISubscription[]> {
    const promise = new Promise<ISubscription[]>((resolve, reject) => {

      SubscriptionSchema.find()
        .then((subscriptions) => {
          const subscriptionList = subscriptions.map((c) => new Subscription(c));
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

  public static select(id: any): Promise<ISubscription> {
    const promise = new Promise<ISubscription>((resolve, reject) => {

      SubscriptionSchema.findById(id)
        .then((c) => {
          const subscription = new Subscription(c);
          resolve(subscription);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }

  public static remove(id: any): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {

      SubscriptionSchema.deleteOne({
        _id: id
      }).then(() => {
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });

    return promise;
  }

  public static update(id: any, subscription: Partial<ISubscription>): Promise<ISubscription> {
    delete subscription._id;
    const promise = new Promise<ISubscription>((resolve, reject) => {
      SubscriptionSchema.updateOne({
        _id: id
      }, subscription)
        .then((c) => {
          const subscriptionUpdated = new Subscription(c);
          resolve(subscriptionUpdated);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }
}
