import ProductEntity from "../entity/Product";
import ScheduleRepositorey from "../repository/ScheduleRepository";

export default class ScheduleService {
  constructor(readonly ScheduleRepository: ScheduleRepositorey) {}

  async create(data: ProductEntity): Promise<any> {
    try {
      const schedule = await this.ScheduleRepository.create(data);
      return Promise.resolve(schedule);
    } catch (error) {
      throw error;
    }
  }
}
