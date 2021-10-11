import { Router } from "express";
import DealRoutes from "./DealRoutes";
import BatchRoutes from "./BatchRoutes";
import ScheduleService from "../../service/ScheduleService";
import BlingService from "../../service/BlingService";
import PipeDriveService from "../../service/PipeDrive";
import ExtractService from "../../service/ExtractService";

export interface RoutesParams {
  scheduleService: ScheduleService;
  blingService: BlingService;
  pipedDriveService: PipeDriveService;
  extractService: ExtractService;
}
export default function ({
  scheduleService,
  blingService,
  pipedDriveService,
}: RoutesParams) {
  const route = Router();
  route.use("/deal", DealRoutes);
  route.use(
    "/batch",
    BatchRoutes({ blingService, pipedDriveService, scheduleService })
  );

  return route;
}
