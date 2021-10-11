import { Router } from "express";
import { extractionHttpData } from "../../adapters/ExpressAdapter";
import { BtachCotroller } from "../../controller/BachController";

export interface BatchRoutesParams {
  batchController: BtachCotroller;
}
export default function ({ batchController }: BatchRoutesParams): Router {
  const route = Router();

  route.post("/", (...args) =>
    batchController.batchDeals(extractionHttpData(...args))
  );
  return route;
}
