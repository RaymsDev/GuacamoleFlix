
import { Category, ICategory } from "../../both/models/category.model";
import CategorySchema, { ICategoryDBModel } from "../schemas/category.schema";

export class CategoryController {
  public static list(): Promise<ICategory[]> {
    const promise = new Promise<ICategory[]>((resolve, reject) => {

      CategorySchema.find()
        .then((categories) => {
          const categoryList = categories.map((c) => new Category(c));
          resolve(categoryList);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }

  public static create(category: ICategory): Promise<ICategory> {
    const newCategory = new CategorySchema(category);
    return newCategory.save();
  }

  public static select(id: any): Promise<ICategory> {
    const promise = new Promise<ICategory>((resolve, reject) => {

      CategorySchema.findById(id)
        .then((c) => {
          const category = new Category(c);
          resolve(category);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }

  public static remove(id: any): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {

      CategorySchema.deleteOne({
        _id: id
      }).then(() => {
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });

    return promise;
  }

  public static update(id: any, category: Partial<ICategory>): Promise<ICategory> {
    delete category._id;
    const promise = new Promise<ICategory>((resolve, reject) => {
      CategorySchema.updateOne({
        _id: id
      }, category)
        .then((c) => {
          const categoryUpdated = new Category(c);
          resolve(categoryUpdated);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }
}
