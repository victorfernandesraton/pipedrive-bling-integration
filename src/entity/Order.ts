import ProductEntity from "./Product";

export default interface Order {
  product: ProductEntity;
  quantity: number;
}
