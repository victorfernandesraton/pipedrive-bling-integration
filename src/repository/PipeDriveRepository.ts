import { DealStatusTypeEnum } from "../entity/Deal";

export interface DealsFilter {
  status?: DealStatusTypeEnum;
}

export default interface PipeDriveRepository {
  getDeals(data: DealsFilter): Promise<any>;
}
