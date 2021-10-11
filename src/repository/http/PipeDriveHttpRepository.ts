import axios, { AxiosInstance } from "axios";
import { parseDeal } from "../../adapters/PipeDriveAdapter";
import DealEntity from "../../entity/Deal";
import AppError from "../../errors/AppError";
import PipeDriveRepository, { DealsFilter } from "../PipeDriveRepository";

export const PipeDriveHttpProvider = axios.create({
  baseURL: process.env.PIPEDRIVE_API,
  params: {
    api_token: process.env.PIPEDRIVE_TOKEN,
  },
});

export default class PipeDriveHttpRepository implements PipeDriveRepository {
  constructor(readonly pipeDriveProvider: AxiosInstance) {}
  async getDeals(data: DealsFilter): Promise<DealEntity[]> {
    try {
      const { data: result } = await this.pipeDriveProvider.get("/deals", {
        params: data,
      });

      if (result?.success && result?.data) {
        return Promise.resolve(result.data.map(parseDeal));
      } else {
        throw new AppError(404, "Not find any deal");
      }
    } catch (error) {
      throw error;
    }
  }
}
