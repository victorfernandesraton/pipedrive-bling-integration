import qs from "qs";
import axios, { AxiosInstance } from "axios";
import { parseProduct, parseToString } from "../../adapters/BlingAdapter";
import Order from "../../entity/Order";
import Product from "../../entity/Product";
import AppError from "../../errors/AppError";
import BlingRepository from "../BlingRepository";

export const BlingHttpProvider = axios.create({
  baseURL: process.env.BLING_API,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export default class BlingHttpRepository implements BlingRepository {
  constructor(readonly blingHttpProvider: AxiosInstance) {}
  async insertOrder(data: Product): Promise<Order> {
    try {
      const { data: result } = await this.blingHttpProvider.post(
        "/produto/json",
        {},
        {
          params: {
            xml: parseToString(data),
            apikey: process.env.BLING_TOKEN,
          },
        }
      );

      if (result?.retorno?.produtos) {
        return Promise.resolve({
          products: result.retorno.produtos.map((item: { produto: any }) =>
            parseProduct({ ...item.produto, name: data.name })
          ),
        });
      } else {
        throw new AppError(404, "Not find any deal");
      }
    } catch (error) {
      throw error;
    }
  }
}
