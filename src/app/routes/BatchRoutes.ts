import { Router } from "express";
import PipeDriveService from "../../service/PipeDrive";
import {
  jsonResponse,
  extractionHttpData,
} from "../../adapters/ExpressAdapter";
import { BtachCotroller } from "../../controller/BachController";
import ScheduleService from "../../service/ScheduleService";
import BlingService from "../../service/BlingService";

export interface BatchRoutesParams {
  scheduleService: ScheduleService;
  blingService: BlingService;
  pipedDriveService: PipeDriveService;
}
export default function ({
  scheduleService,
  blingService,
  pipedDriveService,
}: BatchRoutesParams): Router {
  const route = Router();
  const bachController = new BtachCotroller(
    pipedDriveService,
    blingService,
    scheduleService,
    jsonResponse
  );
  route.post("/", (...args) =>
    bachController.batchDeals(extractionHttpData(...args))
  );
  return route;
}
