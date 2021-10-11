import Http from "http";
import App from "./app";
import route from "./app/routes";
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
    await MongoHelper.connect(process.env.MONGODB_HOST);

    const blingHttpRepository = new BlingHttpRepository(BlingHttpProvider);
    const pipedriveHttpRepository = new PipeDriveHttpRepository(
      PipeDriveHttpProvider
    );
    const scheduleRepositorey = new ScheduleMongoRepository(
      await MongoHelper.getCollection("schedule")
    );
    const extractRepository = new ExtractMongoReposiotry(
      await MongoHelper.getCollection("extract")
    );

    const scheduleService = new ScheduleService(scheduleRepositorey);
    const pipedDriveService = new PipeDriveService(pipedriveHttpRepository);
    const blingService = new BlingService(blingHttpRepository);
    const extractService = new ExtractService(extractRepository);
    const app = App(
      route({
        blingService,
        pipedDriveService,
        scheduleService,
        extractService,
      })
    );
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
