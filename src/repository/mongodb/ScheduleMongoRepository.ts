import { Collection } from "mongodb";

import ProductEntity from "../../entity/Product";
import ScheduleRepositorey from "../ScheduleRepository";

export default class ScheduleMongoRepository implements ScheduleRepositorey {
  constructor(readonly collection: Collection) {}
  async create(data: ProductEntity): Promise<ProductEntity> {
    try {
      await this.collection.insertOne(data);
      return Promise.resolve(data);
    } catch (error) {
      throw error;
    }
  }
}
