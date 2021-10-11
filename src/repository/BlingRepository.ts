import Order from "../entity/Order";
import ProductEntity from "../entity/Product";

export default interface BlingRepository {
  insertOrder(data: ProductEntity): Promise<Order>;
}
