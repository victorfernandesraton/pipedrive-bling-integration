import { parseDeal } from "../adapters/PipeDriveAdapter";
import DealEntity from "../entity/Deal";
import PipeDriveRepository from "../repository/PipeDriveRepository";

export default class PipeDriveService {
  constructor(
    readonly PipeDriveRepository: PipeDriveRepository // readonly BlingRepository: BlingRepository, // readonly ScheduleRepository: ScheduleRepositorey
  ) {}

  async findDeals(filter?: any): Promise<DealEntity[]> {
    try {
      const result = await this.PipeDriveRepository.getDeals(filter);

      if (result?.data) {
        return Promise.resolve(result.data.map(parseDeal));
      }
      return Promise.resolve([]);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  // async batchOrder(filter?: any): Promise<any> {
  //   const data = await this.findDeals(filter);
  //   const order = { deals: data, schedule: "schedule" };
  //   await this.ScheduleRepository.create(order);
  //   // TODO producer do rabbitm
  // }
}
