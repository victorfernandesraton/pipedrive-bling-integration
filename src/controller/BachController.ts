import { JsonHanler } from "../adapters/ExpressAdapter";
import { parseProductFromDeal } from "../adapters/PipeDriveAdapter";
import ApplicationHttp from "../entity/ApplicationHtp";
import { DealStatusTypeEnum } from "../entity/Deal";
import BlingService from "../service/BlingService";
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

      const result = await Promise.all(
        data.map(
          async (item) =>
            await this.blingService.createOrder(parseProductFromDeal(item))
        )
      );

      // const store = await Promise.all(
      //   result.map(async (item) => item.map(await this.scheduleService.create))
      // );

      this.parseResponse(response)({
        data: { message: "created scheduke" },
        code: 200,
      });
    } catch (error) {
      errorParse(error);
    }
  }
}
