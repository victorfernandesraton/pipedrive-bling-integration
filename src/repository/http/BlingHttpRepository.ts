import axios, { AxiosInstance } from "axios";
import { parseProduct } from "../../adapters/BlingAdapter";
import Order from "../../entity/Order";
import Product from "../../entity/Product";
import AppError from "../../errors/AppError";
import BlingRepository from "../BlingRepository";

export const BlingHttpProvider = axios.create({
  baseURL: process.env.BLING_ENDPOIT,
  params: {
    api_token: process.env.BLIG_TOKEN,
  },
});

export default class BlingHttpRepository implements BlingRepository {
  constructor(readonly pipeDriveProvider: AxiosInstance) {}
  async insertOrder(data: Product): Promise<Order> {
    try {
      const { data: result } = await this.pipeDriveProvider.post(
        "/produto/json",
        {
          params: data,
        }
      );

      if (result?.retorno) {
        return Promise.resolve(
          result.retorno.produtos.map((item: { produto: any }) => ({
            product: parseProduct(item.produto),
          }))
        );
      } else {
        throw new AppError(404, "Not find any deal");
      }
    } catch (error) {
      throw error;
    }
  }
}
