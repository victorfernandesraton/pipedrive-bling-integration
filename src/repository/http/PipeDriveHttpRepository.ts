import axios from "axios";
import { DealStatusTypeEnum } from "../../entity/Deal";
import PipeDriveRepository from "../PipeDriveRepository";

export const PipeDriveHttpProvider = axios.create({
  baseURL: process.env.PIPEDRIVE_API,
  params: {
    api_token: process.env.PIPEDRIVE_TOKEN,
  },
});

export interface GetDealsParams {
  status: DealStatusTypeEnum;
  start: number;
  limit: number;
}

export default class PipeDriveHttpRepository implements PipeDriveRepository {
  getDeals(data: GetDealsParams): Promise<any> {
    return PipeDriveHttpProvider.get("v1/deals", {
      params: data,
    });
  }
}
