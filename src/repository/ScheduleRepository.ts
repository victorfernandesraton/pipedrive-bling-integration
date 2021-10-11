import ProductEntity from "../entity/Product";

export default interface ScheduleRepositorey {
  create(data: ProductEntity): Promise<ProductEntity>;
}
