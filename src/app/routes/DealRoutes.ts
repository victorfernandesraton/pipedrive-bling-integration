import { Router } from "express";
import { extractionHttpData } from "../../adapters/ExpressAdapter";
import DealController from "../../controller/DealController";

export interface DealRoutesParams {
  dealController: DealController;
}
export default function ({ dealController }: DealRoutesParams): Router {
  const route = Router();

  route.get("/", (...args) =>
    dealController.findDeals(extractionHttpData(...args))
  );
  return route;
}
