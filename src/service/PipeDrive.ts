import { parseDeal } from "../adapters/PipeDriveAdapter";
import DealEntity, { DealStatusTypeEnum } from "../entity/Deal";
import AppError from "../errors/AppError";
import PipeDriveRepository from "../repository/PipeDriveRepository";

export interface FindDealsFilter {
  status?: DealStatusTypeEnum;
}
export default class PipeDriveService {
  constructor(
    readonly PipeDriveRepository: PipeDriveRepository // readonly BlingRepository: BlingRepository, // readonly ScheduleRepository: ScheduleRepositorey
  ) {}

  async findDeals(filter?: any): Promise<DealEntity[]> {
    try {
      const result = await this.PipeDriveRepository.getDeals(filter);

      if (result) {
        return Promise.resolve(result);
      }
      throw new AppError(404, "not find deals");
    } catch (error) {
      throw error;
    }
  }

  // async batchOrder(filter?: any): Promise<any> {
  //   const data = await this.findDeals(filter);
  //   const order = { deals: data, schedule: "schedule" };
  //   await this.ScheduleRepository.create(order);
  //   // TODO producer do rabbitm
  // }
}
