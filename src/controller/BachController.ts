import { JsonHanler } from "../adapters/ExpressAdapter";
import { parseProductFromDeal } from "../adapters/PipeDriveAdapter";
import ApplicationHttp from "../entity/ApplicationHtp";
import { DealStatusTypeEnum } from "../entity/Deal";
import BlingService from "../service/BlingService";
import ExtractService from "../service/ExtractService";
import PipeDriveService from "../service/PipeDrive";
import ScheduleService from "../service/ScheduleService";

export class BtachCotroller {
  constructor(
    // readonly extractService: ExtractService,
    readonly pipedDriveService: PipeDriveService,
    readonly blingService: BlingService,
    // readonly scheduleService: ScheduleService,
    readonly parseResponse: JsonHanler
  ) {}

  async batchDeals({ errorParse, response }: ApplicationHttp) {
    try {
      const data = await this.pipedDriveService.findDeals({
        state: DealStatusTypeEnum.WON,
      });

      console.log(data);

      // const schedule = await this.scheduleService.create();

      const result = await Promise.all(
        data.map(
          async (item) =>
            await this.blingService.createOrder(parseProductFromDeal(item))
        )
      );
      console.log(result);
      this.parseResponse(response)({ data: { message: "created scheduke" } });
    } catch (error) {
      errorParse(error);
    }
  }
}
