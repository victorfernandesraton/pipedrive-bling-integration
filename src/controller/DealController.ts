import { JsonHanler, ParseResponse } from "../adapters/ExpressAdapter";
import ApplicationHttp from "../entity/ApplicationHtp";
import PipeDriveService from "../service/PipeDrive";

export default class DealController {
  constructor(
    readonly service: PipeDriveService,
    readonly parseRespose: JsonHanler
  ) {}
  async findDeals({ params, errorParse, response }: ApplicationHttp) {
    try {
      const result = await this.service.findDeals(params);

      this.parseRespose(response)({ data: result, code: 200 });
    } catch (error) {
      errorParse(error);
    }
  }
}
