import ExtractEntity from "../entity/Extract";
import AppError from "../errors/AppError";
import ExtractRepository from "../repository/ExtractRepository";

export default class ExtractService {
  constructor(readonly extractRepository: ExtractRepository) {}

  async find(id: string): Promise<ExtractEntity> {
    try {
      const result = await this.extractRepository.find(id);
      if (!result) {
        throw new AppError(404, "not found data");
      }
      return Promise.resolve(result);
    } catch (error) {
      throw error;
    }
  }
  async create(data: any): Promise<ExtractEntity> {
    try {
      const result = await this.extractRepository.insertOne(data);

      if (result) {
        return Promise.resolve(result);
      }
      throw new AppError(500, "not ceacte extract");
    } catch (error) {
      throw error;
    }
  }
}
