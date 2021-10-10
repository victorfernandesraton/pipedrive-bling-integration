import { JsonHanler } from "../adapters/ExpressAdapter";
import ApplicationHttp from "../entity/ApplicationHtp";
import { DealStatusTypeEnum } from "../entity/Deal";
import ExtractService from "../service/ExtractService";
import PipeDriveService from "../service/PipeDrive";
import ScheduleService from "../service/ScheduleService";

export class BtachCotroller {
  constructor(
    readonly extractService: ExtractService,
    readonly pipedDriveService: PipeDriveService,
    readonly scheduleService: ScheduleService,
    readonly parseResponse: JsonHanler
  ) {}

  async execute({ query, errorParse, response }: ApplicationHttp) {
    try {
      const data = await this.pipedDriveService.findDeals({
        state: DealStatusTypeEnum.WON,
      });

      const schedule = await this.scheduleService.create();
      // createshcedule

      this.parseResponse(response)({ data: { message: "created scheduke" } });
    } catch (error) {
      errorParse(error);
    }
  }
}
