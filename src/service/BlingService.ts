import ProductEntity from "../entity/Product";
import BlingRepository from "../repository/BlingRepository";

export default class BlingService {
  constructor(readonly BlingRepository: BlingRepository) {}

  async createOrder(data: ProductEntity): Promise<ProductEntity> {
    try {
      const order = await this.BlingRepository.insertOrder(data);
      return Promise.resolve(order.product);
    } catch (error) {
      throw error;
    }
  }
}
