
import { IProfile, Profile } from "../../both/models/profile.model";
import ProfileSchema, { IProfileDBModel } from "../schemas/profile.schema";

export class ProfileController {
  public static list(): Promise<IProfile[]> {
    const promise = new Promise<IProfile[]>((resolve, reject) => {

      ProfileSchema.find()
        .then((profiles) => {
          const profileList = profiles.map((c) => new Profile(c));
          resolve(profileList);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }

  public static create(profile: IProfile): Promise<IProfile> {
    const newProfile = new ProfileSchema(profile);
    return newProfile.save();
  }

  public static select(id: any): Promise<IProfile> {
    const promise = new Promise<IProfile>((resolve, reject) => {

      ProfileSchema.findById(id)
        .then((c) => {
          const profile = new Profile(c);
          resolve(profile);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }

  public static remove(id: any): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {

      ProfileSchema.remove({
        _id: id
      }).then(() => {
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });

    return promise;
  }

  public static update(id: any, profile: Partial<IProfile>): Promise<IProfile> {
    delete profile._id;
    const promise = new Promise<IProfile>((resolve, reject) => {
      ProfileSchema.updateOne({
        _id: id
      }, profile)
        .then((c) => {
          const profileUpdated = new Profile(c);
          resolve(profileUpdated);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }
}
