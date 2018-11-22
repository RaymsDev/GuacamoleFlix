
import { History, IHistory } from "../../both/models/history.model";
import HistorySchema from "../schemas/history.schema";

export class HistoryController {
  public static list(): Promise<IHistory[]> {
    const promise = new Promise<IHistory[]>((resolve, reject) => {

      HistorySchema.find()
        .populate('videos')
        .populate('profiles')
        .then((historys) => {
          const historyList = historys.map((c) => new History(c));
          resolve(historyList);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }

  public static create(history: IHistory): Promise<IHistory> {
    const newHistory = new HistorySchema(history);
    return newHistory.save();
  }

  public static select(id: any): Promise<IHistory> {
    const promise = new Promise<IHistory>((resolve, reject) => {

      HistorySchema.findById(id)
        .populate('videos')
        .populate('profiles')
        .then((c) => {
          const history = new History(c);
          resolve(history);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }

  public static remove(id: any): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {

      HistorySchema.remove({
        _id: id
      }).then(() => {
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });

    return promise;
  }

  public static update(id: any, history: Partial<IHistory>): Promise<IHistory> {
    delete history._id;
    const promise = new Promise<IHistory>((resolve, reject) => {
      HistorySchema.updateOne({
        _id: id
      }, history)
        .then((c) => {
          const historyUpdated = new History(c);
          resolve(historyUpdated);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }
}
