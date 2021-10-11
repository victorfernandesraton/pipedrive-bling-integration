import { Router } from "express";
import DealRoutes from "./DealRoutes";
import BatchRoutes from "./BatchRoutes";

const route = Router();

route.use("/deal", DealRoutes);
route.use("/batch", BatchRoutes);

export default route;
