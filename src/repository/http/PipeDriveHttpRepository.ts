import axios from "axios";
import PipeDriveRepository, { DealsFilter } from "../PipeDriveRepository";

export const PipeDriveHttpProvider = axios.create({
  baseURL: process.env.PIPEDRIVE_API,
  params: {
    api_token: process.env.PIPEDRIVE_TOKEN,
  },
});

export default class PipeDriveHttpRepository implements PipeDriveRepository {
  async getDeals(data: DealsFilter): Promise<any> {
    try {
      const result = await PipeDriveHttpProvider.get("/deals", {
        params: data,
      });

      return result.data;
    } catch (error) {
      Promise.reject(error);
    }
  }
}
