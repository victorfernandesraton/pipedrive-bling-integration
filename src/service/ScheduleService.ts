import ProductEntity from "../entity/Product";
import ScheduleRepositorey from "../repository/ScheduleRepository";

export default class ScheduleService {
  constructor(readonly scheduleRepository: ScheduleRepositorey) {
    this.create.bind(this);
  }

  async create(data: ProductEntity): Promise<any> {
    try {
      const schedule = await this.scheduleRepository.create(data);
      return Promise.resolve(schedule);
    } catch (error) {
      throw error;
    }
  }
}
