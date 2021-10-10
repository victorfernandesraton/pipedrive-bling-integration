import ScheduleRepositorey from "../repository/ScheduleRepository";

export default class ScheduleService {
  constructor(readonly ScheduleRepository: ScheduleRepositorey) {}

  async find(data?: any): Promise<any> {
    try {
      const schedule = await this.ScheduleRepository.find(data);

      return Promise.resolve(schedule);
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }

  async create(): Promise<any> {
    try {
      const schedule = await this.ScheduleRepository.create();
      return Promise.resolve(schedule);
    } catch (error) {
      throw error;
    }
  }
}
