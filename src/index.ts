import { Router } from "express";
import Http from "http";
import { jsonResponse } from "./adapters/ExpressAdapter";
import App from "./app";
import BatchRoutes from "./app/routes/BatchRoutes";
import DealRoutes from "./app/routes/DealRoutes";
import { BtachCotroller } from "./controller/BachController";
import DealController from "./controller/DealController";
import { MongoHelper } from "./helpers/MongoDBHelpers";
import BlingHttpRepository, {
  BlingHttpProvider,
} from "./repository/http/BlingHttpRepository";
import PipeDriveHttpRepository, {
  PipeDriveHttpProvider,
} from "./repository/http/PipeDriveHttpRepository";
import ExtractMongoReposiotry from "./repository/mongodb/ExtractMongoRepository";
import ScheduleMongoRepository from "./repository/mongodb/ScheduleMongoRepository";
import BlingService from "./service/BlingService";
import ExtractService from "./service/ExtractService";
import PipeDriveService from "./service/PipeDrive";
import ScheduleService from "./service/ScheduleService";

async function start() {
  const PORT = process.env.PORT || 8000;

  try {
    await MongoHelper.connect(process.env.MONGO_HOST);

    const blingHttpRepository = new BlingHttpRepository(BlingHttpProvider);
    const pipedriveHttpRepository = new PipeDriveHttpRepository(
      PipeDriveHttpProvider
    );
    const scheduleCollection = await MongoHelper.getCollection("schedule");
    const extractCollection = await MongoHelper.getCollection("extract");
    const scheduleRepositorey = new ScheduleMongoRepository(scheduleCollection);
    const extractRepository = new ExtractMongoReposiotry(extractCollection);

    const scheduleService = new ScheduleService(scheduleRepositorey);
    const pipedDriveService = new PipeDriveService(pipedriveHttpRepository);
    const blingService = new BlingService(blingHttpRepository);
    const extractService = new ExtractService(extractRepository);

    const route = Router();

    const bachController = new BtachCotroller(
      pipedDriveService,
      blingService,
      scheduleService,
      jsonResponse
    );
    const dealController = new DealController(pipedDriveService, jsonResponse);

    route.use("/deal", DealRoutes({ dealController }));
    route.use(
      "/batch",
      BatchRoutes({
        batchController: bachController,
      })
    );
    const app = App(route);
    const Server = Http.createServer(app);
    Server.on("listening", () => {
      console.info(`server runing in ${PORT}`);
      console.info(`Press CTRL + C to KILL`);
    });
    Server.listen(PORT);
  } catch (error) {
    console.error(error);
  }
}

start();
