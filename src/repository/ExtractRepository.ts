import ExtractEntity, { ExtractFilter } from "../entity/Extract";

export default interface ExtractRepository {
  insertOne(data: ExtractEntity): Promise<ExtractEntity>;
  insertMany(data: ExtractEntity[]): Promise<ExtractEntity[]>;
  find(id: string): Promise<ExtractEntity>;
  findAll(data: ExtractFilter): Promise<ExtractEntity[]>;
}
