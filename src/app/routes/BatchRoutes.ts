import { Router } from "express";
import PipeDriveService from "../../service/PipeDrive";
import {
  jsonResponse,
  extractionHttpData,
} from "../../adapters/ExpressAdapter";
import DealController from "../../controller/DealController";
import PipeDriveHttpRepository, {
  PipeDriveHttpProvider,
} from "../../repository/http/PipeDriveHttpRepository";
import { BtachCotroller } from "../../controller/BachController";

import BlingHttpRepository, {
  BlingHttpProvider,
} from "../../repository/http/BlingHttpRepository";
import BlingService from "../../service/BlingService";

const pipeDriveService = new PipeDriveService(
  new PipeDriveHttpRepository(PipeDriveHttpProvider)
);

const blingService = new BlingService(
  new BlingHttpRepository(BlingHttpProvider)
);
const bachController = new BtachCotroller(
  pipeDriveService,
  blingService,
  jsonResponse
);
const route = Router();

route.post("/", (...args) =>
  bachController.batchDeals(extractionHttpData(...args))
);

export default route;
