import { Router } from "express";
import PipeDriveService from "../../service/PipeDrive";
import {
  jsonResponse,
  extractionHttpData,
} from "../../adapters/ExpressAdapter";
import DealController from "../../controller/DealController";
import PipeDriveHttpRepository from "../../repository/http/PipeDriveHttpRepository";

const pipeDriveService = new PipeDriveService(new PipeDriveHttpRepository());
const dealController = new DealController(pipeDriveService, jsonResponse);
const route = Router();

route.get("/", (...args) =>
  dealController.findDeals(extractionHttpData(...args))
);

export default route;
