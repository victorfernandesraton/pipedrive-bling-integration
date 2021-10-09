import BlingRepository from "../repository/BlingRepository";
import PipeDriveRepository from "../repository/PipeDriveRepository";
import ScheduleRepositorey from "../repository/ScheduleRepository";

export default class PipeDriveService {
  constructor(
    readonly PipeDriveRepository: PipeDriveRepository,
    readonly BlingRepository: BlingRepository,
    readonly ScheduleRepository: ScheduleRepositorey
  ) {}

  async findDeals(filter?: any): Promise<any> {
    try {
      const data = await this.PipeDriveRepository.getDeals(filter);

      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async batchOrder(filter?: any): Promise<any> {
    const data = await this.findDeals(filter);
    const order = { deal: data, schedule: "schedule" };
    await this.ScheduleRepository.create(order);
    // TODO producer do rabbitm
  }
}
