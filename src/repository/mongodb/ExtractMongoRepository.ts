import { Collection } from "mongodb";

import Extract, { ExtractFilter } from "../../entity/Extract";
import ExtractRepository from "../ExtractRepository";

export default class ExtractMongoReposiotry implements ExtractRepository {
  constructor(readonly collection: Collection) {}
  async insertOne(data: Extract): Promise<Extract> {
    try {
      const result = await this.collection.insertOne(data);
      return Promise.resolve(data);
    } catch (error) {
      throw error;
    }
  }
  async insertMany(data: Extract[]): Promise<Extract[]> {
    try {
      const result = await this.collection.insertMany(data);
      return Promise.resolve(data);
    } catch (error) {
      throw error;
    }
  }
  async find(id: string): Promise<Extract> {
    try {
      const result = await this.collection.findOne({ uuid: id });
      return Promise.resolve(result as Extract);
    } catch (error) {
      throw error;
    }
  }
  async findAll(data: ExtractFilter): Promise<Extract[]> {
    try {
      const result = (await this.collection
        .find({ dateFrom: data.dateFrom })
        .toArray()) as Extract[];
      return Promise.resolve(result);
    } catch (error) {
      throw error;
    }
  }
}
