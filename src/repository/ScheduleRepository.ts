export default interface ScheduleRepositorey {
  create(data?: any): Promise<any>;
  update(data?: any): Promise<any>;
  find(data?: any): Promise<any>;
}
