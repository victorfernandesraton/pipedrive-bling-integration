export default interface ScheduleRepositorey {
  create(): Promise<any>;
  update(id?: string): Promise<any>;
  find(id?: string): Promise<any>;
}
