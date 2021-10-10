export default interface ScheduleEntity {
  uuid: string;
  aggregate: {
    import: number;
    batced: number;
    withError: number;
    duplicated: number;
  };
}
