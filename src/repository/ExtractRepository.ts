export default interface ExtractRepository {
  insertOne(data: any): Promise<any>;
  insertMany(data: any[]): Promise<any>;
  find(data: any): Promise<any>;
  findAll(data: any): Promise<any[]>;
}
