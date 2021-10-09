import BlingRepository from "../repository/BlingRepository";

export default class BlingService {
  constructor(readonly BlingRepository: BlingRepository) {}

  async createOrder(data?: any): Promise<any> {
    const order = await this.BlingRepository.insertOrder(data);
    return Promise.resolve(data);
  }
}
